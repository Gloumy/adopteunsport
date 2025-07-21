#!/bin/bash

# Script de déploiement Vue.js via SSH
# Usage: ./deploy.sh [environnement]

set -e  # Arrêter le script en cas d'erreur

# Configuration par défaut (modifiez selon vos besoins)
DEFAULT_ENV="production"
ENV=${1:-$DEFAULT_ENV}

# Chargement de la configuration d'environnement

SERVER_HOST="46.101.209.51"
SERVER_USER="root"
SERVER_PATH="/var/www/adopteunsport"
BUILD_COMMAND="npm run build"
DIST_FOLDER="dist"

# Variables
PROJECT_NAME=$(basename $(pwd))
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_PATH="$SERVER_PATH/backups"
TEMP_PATH="/tmp/deploy_$PROJECT_NAME_$TIMESTAMP"

echo "🚀 Déploiement de $PROJECT_NAME vers $ENV"
echo "📍 Serveur: $SERVER_USER@$SERVER_HOST:$SERVER_PATH"
echo ""

# Vérifications préalables
echo "🔍 Vérifications préalables..."

# Vérifier que nous sommes dans un projet Vue.js
if [ ! -f "package.json" ]; then
    echo "❌ package.json non trouvé. Êtes-vous dans le bon répertoire ?"
    exit 1
fi

# Vérifier la connectivité SSH
if ! ssh -o ConnectTimeout=5 $SERVER_USER@$SERVER_HOST "echo 'Connexion SSH OK'" > /dev/null 2>&1; then
    echo "❌ Impossible de se connecter au serveur via SSH"
    echo "Vérifiez votre configuration SSH et que le serveur est accessible"
    exit 1
fi

# Afficher la branche et le commit actuel
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
CURRENT_COMMIT=$(git rev-parse --short HEAD)
echo "📂 Branche: $CURRENT_BRANCH"
echo "📝 Commit: $CURRENT_COMMIT"

# Confirmation
# echo ""
# read -p "🤔 Confirmer le déploiement vers $ENV ? (y/N): " -n 1 -r
# echo
# if [[ ! $REPLY =~ ^[Yy]$ ]]; then
#     echo "❌ Déploiement annulé"
#     exit 1
# fi

echo ""
echo "⏳ Début du déploiement..."

# 1. Installation des dépendances
echo "📦 Installation des dépendances..."
npm ci

# 2. Build de l'application
echo "🔨 Build de l'application..."
$BUILD_COMMAND

# Vérifier que le build a bien créé le dossier dist
if [ ! -d "$DIST_FOLDER" ]; then
    echo "❌ Le dossier $DIST_FOLDER n'a pas été créé par le build"
    exit 1
fi

# 3. Création d'une sauvegarde sur le serveur
echo "💾 Création d'une sauvegarde sur le serveur..."
ssh $SERVER_USER@$SERVER_HOST "
    mkdir -p $BACKUP_PATH
    if [ -d '$SERVER_PATH/current' ]; then
        mv '$SERVER_PATH/current' '$BACKUP_PATH/backup_$TIMESTAMP'
        echo '✅ Sauvegarde créée: $BACKUP_PATH/backup_$TIMESTAMP'
    fi
    
    # Nettoyage des anciennes sauvegardes (garde les 5 dernières)
    cd $BACKUP_PATH && ls -t | tail -n +6 | xargs -r rm -rf
"

# 4. Préparation du dossier temporaire sur le serveur
echo "📁 Préparation du serveur..."
ssh $SERVER_USER@$SERVER_HOST "
    mkdir -p $TEMP_PATH
    mkdir -p $SERVER_PATH
"

# 5. Upload des fichiers
echo "📤 Upload des fichiers..."
rsync -avz --delete \
    --exclude='node_modules' \
    --exclude='.git' \
    --exclude='.env.local' \
    --exclude='*.log' \
    $DIST_FOLDER/ $SERVER_USER@$SERVER_HOST:$TEMP_PATH/

# 6. Activation de la nouvelle version
echo "🔄 Activation de la nouvelle version..."
ssh $SERVER_USER@$SERVER_HOST "
    # Déplacement atomique pour éviter les coupures
    mv '$TEMP_PATH' '$SERVER_PATH/current'
    
    # Vérification des permissions
    sudo chown -R www-data:www-data '$SERVER_PATH/current'
    sudo chmod -R 755 '$SERVER_PATH/current'
    
    # Test de la configuration Nginx
    sudo nginx -t
    
    # Rechargement de Nginx
    sudo systemctl reload nginx
    
    echo '✅ Nouvelle version activée'
"

# 7. Vérification de santé
echo "🏥 Vérification de santé..."
sleep 2

# Test HTTP simple
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://$SERVER_HOST/ || echo "000")
if [ "$HTTP_STATUS" = "200" ]; then
    echo "✅ Site accessible (HTTP 200)"
else
    echo "⚠️  Site retourne HTTP $HTTP_STATUS"
fi

# 8. Nettoyage
echo "🧹 Nettoyage..."
rm -rf $DIST_FOLDER

# 9. Log du déploiement
echo "📝 Enregistrement du déploiement..."
ssh $SERVER_USER@$SERVER_HOST "
    echo '$TIMESTAMP - Déploiement $ENV - Branche: $CURRENT_BRANCH - Commit: $CURRENT_COMMIT' >> $SERVER_PATH/deploy.log
"

echo ""
echo "🎉 Déploiement terminé avec succès !"
echo ""
echo "📊 Résumé:"
echo "   • Environnement: $ENV"
echo "   • Branche: $CURRENT_BRANCH"
echo "   • Commit: $CURRENT_COMMIT"
echo "   • Timestamp: $TIMESTAMP"
echo ""
echo "🔗 Votre site: http://$SERVER_HOST"
echo ""
echo "🛠️ En cas de problème:"
echo "   • Rollback: ssh $SERVER_USER@$SERVER_HOST 'mv $SERVER_PATH/current $SERVER_PATH/failed_$TIMESTAMP && mv $BACKUP_PATH/backup_$TIMESTAMP $SERVER_PATH/current && sudo systemctl reload nginx'"
echo "   • Logs Nginx: ssh $SERVER_USER@$SERVER_HOST 'sudo tail -f /var/log/nginx/error.log'"
echo "   • Logs déploiement: ssh $SERVER_USER@$SERVER_HOST 'tail -f $SERVER_PATH/deploy.log'"