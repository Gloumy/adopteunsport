<template>
  <div style="height: 100%; width: 100%">
    <l-map
      ref="map"
      v-model:zoom="zoom"
      :use-global-leaflet="false"
      :center="[49.5724501273382, 5.535054262725816]"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
        attribution="&copy; OpenStreetMap contributors"
      />
      <l-marker
        v-for="club in clubs"
        :key="club.nom"
        :lat-lng="[club.latitude, club.longitude]"
        :name="club.nom"
      >
        <l-popup :options="{ maxWidth: 300, className: 'custom-popup' }">
          <div class="popup-content">
            <div class="popup-header">
              <h3 class="popup-title">{{ club.nom }}</h3>
              <v-chip 
                v-if="club.sport" 
                size="small" 
                color="primary" 
                variant="tonal"
                class="ml-2"
              >
                {{ club.sport }}
              </v-chip>
            </div>
            
            <div class="popup-info" v-if="club.adress">
              <v-icon size="small" class="mr-1">mdi-map-marker</v-icon>
              <span class="text-caption">{{ club.adress }}</span>
            </div>
            
            <div class="popup-actions">
              <v-btn
                @click="openDetailsDialog(club)"
                color="primary"
                variant="elevated"
                size="small"
                prepend-icon="mdi-information"
                class="mt-2"
              >
                Plus d'infos
              </v-btn>
            </div>
          </div>
        </l-popup>
      </l-marker>
    </l-map>
    <v-dialog 
      v-model="displayDetailsDialog" 
      max-width="600"
      :fullscreen="$vuetify.display.xs"
    >
      <v-card v-if="selectedClub">
        <v-card-title class="d-flex align-center">
          <v-icon class="mr-3" color="primary">mdi-account-group</v-icon>
          <div>
            <div class="text-h5">{{ selectedClub.nom }}</div>
            <v-chip 
              v-if="selectedClub.sport" 
              size="small" 
              color="primary" 
              variant="tonal"
              class="mt-1"
            >
              {{ selectedClub.sport }}
            </v-chip>
          </div>
          <v-spacer></v-spacer>
          <v-btn
            icon="mdi-close"
            variant="text"
            @click="displayDetailsDialog = false"
          ></v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text>
          <div class="club-details">
            <div v-if="selectedClub.adress" class="detail-item">
              <v-icon class="mr-3" color="grey-darken-1">mdi-map-marker</v-icon>
              <div>
                <div class="text-subtitle-2">Adresse</div>
                <div class="text-body-2">{{ selectedClub.adress }}</div>
              </div>
            </div>

            <div v-if="selectedClub.phoneNumber" class="detail-item">
              <v-icon class="mr-3" color="grey-darken-1">mdi-phone</v-icon>
              <div>
                <div class="text-subtitle-2">Téléphone</div>
                <div class="text-body-2">{{ selectedClub.phoneNumber }}</div>
              </div>
            </div>

            <div v-if="selectedClub.email" class="detail-item">
              <v-icon class="mr-3" color="grey-darken-1">mdi-email</v-icon>
              <div>
                <div class="text-subtitle-2">Email</div>
                <div class="text-body-2">{{ selectedClub.email }}</div>
              </div>
            </div>

            <div v-if="selectedClub.website" class="detail-item">
              <v-icon class="mr-3" color="grey-darken-1">mdi-web</v-icon>
              <div>
                <div class="text-subtitle-2">Site web</div>
                <a :href="selectedClub.website" target="_blank" class="text-primary text-body-2">
                  {{ selectedClub.website }}
                </a>
              </div>
            </div>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-if="selectedClub.phoneNumber"
            :href="`tel:${selectedClub.phoneNumber}`"
            color="success"
            variant="tonal"
            prepend-icon="mdi-phone"
          >
            Appeler
          </v-btn>
          <v-btn
            v-if="selectedClub.email"
            :href="`mailto:${selectedClub.email}`"
            color="primary"
            variant="tonal"
            prepend-icon="mdi-email"
          >
            Contact
          </v-btn>
          <v-btn
            v-if="selectedClub.website"
            :href="selectedClub.website"
            target="_blank"
            color="primary"
            variant="elevated"
            prepend-icon="mdi-open-in-new"
          >
            Site web
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
// import type L from "leaflet";
import useClubApi from "../api/ClubApi";
import { Club } from "../models/Club";

const { getClubs } = useClubApi();

// Variables réactives
const zoom = ref(15);
const displayDetailsDialog = ref(false);

const clubs = ref<Club[]>([]);
const selectedClub = ref<Club>();

onMounted(async () => {
  clubs.value = await getClubs();
});

function openDetailsDialog(club: Club) {
  selectedClub.value = new Club(club);
  displayDetailsDialog.value = true;
}
</script>

<style scoped>
/* Assurer que Leaflet s'affiche correctement */
:deep(.leaflet-container) {
  height: 100%;
  width: 100%;
  border-radius: 12px;
}

/* Styles pour les popups */
.popup-content {
  padding: 8px;
}

.popup-header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}

.popup-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1976d2;
}

.popup-info {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #666;
}

.popup-actions {
  text-align: center;
}

/* Styles pour la dialog des détails */
.club-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.detail-item > div {
  flex: 1;
}

/* Styles personnalisés pour les popups Leaflet */
:deep(.custom-popup) {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

:deep(.custom-popup .leaflet-popup-content-wrapper) {
  border-radius: 12px;
  padding: 0;
}

:deep(.custom-popup .leaflet-popup-tip) {
  background: white;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .popup-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .popup-title {
    font-size: 1rem;
  }
}
</style>
