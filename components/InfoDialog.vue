<template>
  <v-dialog v-model="isOpen" max-width="600" :fullscreen="$vuetify.display.xs">
    <v-card>
      <v-card-title class="d-flex align-center">
        <v-icon class="mr-3" color="primary">mdi-information</v-icon>
        <span>À propos</span>
        <v-spacer></v-spacer>
        <v-btn
          icon="mdi-close"
          variant="text"
          @click="$emit('update:modelValue', false)"
        ></v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="pa-6">
        <div class="info-content">
          <!-- Section principale -->
          <div class="mb-6">
            <h3 class="text-h6 mb-3 text-primary">
              <v-icon class="mr-2">mdi-lightbulb-on-outline</v-icon>
              Idée
            </h3>
            <p class="text-body-1 mb-4">
              Le sport, tout le monde dit que c'est bien et bon pour la santé, mais trouver un sport qui nous plaît n'est pas si facile. <br>
              Ce site peut t'aider à visualiser les sports disponibles près de chez toi pour trouver celui qui te convient !
            </p>
          </div>

          <v-divider class="my-4"></v-divider>

          <!-- Section contact -->
          <div>
            <h3 class="text-h6 mb-3 text-primary">
              <v-icon class="mr-2">mdi-email</v-icon>
              Contact
            </h3>
            <p class="text-body-2 mb-0">
              Si vous connaissez un club qui n'est pas répertorié (ou mal), merci de me contacter à
              <a href="mailto:simon@cornet.dev" class="text-primary">
                simon@cornet.dev
              </a> avec toutes les informations possibles.
              <br>
              <br>Pour l'instant, les données ont été récupérées via IA avec certaines coordonnées GPS revérifiées à la main, mais ça prend du temps, donc il reste des erreurs.
            </p>
          </div>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          @click="$emit('update:modelValue', false)"
          color="primary"
          variant="elevated"
        >
          Fermer
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue: boolean;
}

const props = defineProps<Props>();

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();
</script>