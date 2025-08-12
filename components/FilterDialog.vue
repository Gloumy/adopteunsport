<template>
  <v-dialog v-model="isOpen" max-width="500">
    <v-card>
      <v-card-title class="d-flex align-center">
        <v-icon class="mr-3" color="primary">mdi-filter-variant</v-icon>
        <span>Filtrer par sport</span>
        <v-spacer></v-spacer>
        <v-btn
          icon="mdi-close"
          variant="text"
          @click="$emit('update:modelValue', false)"
        ></v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <div class="mb-4">
          <div class="d-flex align-center mb-3">
            <span class="text-subtitle-1">Sports disponibles</span>
            <v-spacer></v-spacer>
            <v-btn
              v-if="selectedSports.length > 0"
              @click="$emit('clear-filters')"
              color="error"
              variant="text"
              size="small"
              prepend-icon="mdi-filter-remove"
            >
              Effacer
            </v-btn>
          </div>
          
          <v-chip-group
            :model-value="selectedSports"
            @update:model-value="$emit('update:selected-sports', $event)"
            multiple
            column
          >
            <v-chip
              v-for="sport in availableSports"
              :key="sport"
              :value="sport"
              filter
              variant="outlined"
              class="ma-1"
            >
              {{ sport }}
            </v-chip>
          </v-chip-group>
        </div>

        <v-divider class="my-4"></v-divider>

        <div class="text-body-2 text-medium-emphasis">
          <v-icon size="small" class="mr-2">mdi-information</v-icon>
          {{ filteredCount }} club(s) trouvé(s) sur {{ totalCount }}
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          @click="$emit('update:modelValue', false)"
          color="primary"
          variant="elevated"
        >
          Appliquer
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue: boolean;
  availableSports: string[];
  selectedSports: string[];
  filteredCount: number;
  totalCount: number;
}

const props = defineProps<Props>();

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  'update:selected-sports': [sports: string[]];
  'clear-filters': [];
}>();
</script>