<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Map from "./components/Map.vue";
import useClubApi from "./api/ClubApi";
import { Club } from "./models/Club";

const { getClubs } = useClubApi();

// États pour le filtrage
const clubs = ref<Club[]>([]);
const selectedSports = ref<string[]>([]);
const showFilterDialog = ref(false);

// Charger les clubs
onMounted(async () => {
  clubs.value = await getClubs();
});

// Sports uniques disponibles
const availableSports = computed(() => {
  const sportsSet = new Set<string>();
  clubs.value.forEach(club => {
    if (club.sport && club.sport.trim()) {
      sportsSet.add(club.sport.trim());
    }
  });
  return Array.from(sportsSet).sort();
});

// Clubs filtrés
const filteredClubs = computed(() => {
  if (selectedSports.value.length === 0) {
    return clubs.value;
  }
  return clubs.value.filter(club => 
    club.sport && selectedSports.value.includes(club.sport.trim())
  );
});

// Ouvrir/fermer la dialog de filtre
function toggleFilterDialog() {
  showFilterDialog.value = !showFilterDialog.value;
}

// Effacer tous les filtres
function clearFilters() {
  selectedSports.value = [];
}
</script>

<template>
  <v-app>
    <v-app-bar 
      color="primary" 
      prominent
      elevation="4"
    >
      <template v-slot:prepend>
        <img 
          src="/logo.svg" 
          alt="Adopte un Sport" 
          class="app-logo"
        />
      </template>
      
      <v-app-bar-title class="text-h4 font-weight-bold d-none d-sm-block">
        Adopte un Sport
      </v-app-bar-title>

      <template v-slot:append>
        <v-btn
          icon="mdi-information-outline"
          variant="text"
        ></v-btn>
        <v-btn
          icon="mdi-filter-variant"
          variant="text"
          @click="toggleFilterDialog"
        >
          <v-badge 
            v-if="selectedSports.length > 0" 
            :content="selectedSports.length" 
            color="error"
          >
            <v-icon>mdi-filter-variant</v-icon>
          </v-badge>
          <v-icon v-else>mdi-filter-variant</v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <v-main class="bg-grey-lighten-4">
      <div class="map-container">
        <Map :clubs="filteredClubs" />
      </div>
    </v-main>

    <!-- Dialog de filtrage des sports -->
    <v-dialog v-model="showFilterDialog" max-width="500">
      <v-card>
        <v-card-title class="d-flex align-center">
          <v-icon class="mr-3" color="primary">mdi-filter-variant</v-icon>
          <span>Filtrer par sport</span>
          <v-spacer></v-spacer>
          <v-btn
            icon="mdi-close"
            variant="text"
            @click="showFilterDialog = false"
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
                @click="clearFilters"
                color="error"
                variant="text"
                size="small"
                prepend-icon="mdi-filter-remove"
              >
                Effacer
              </v-btn>
            </div>
            
            <v-chip-group
              v-model="selectedSports"
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
            {{ filteredClubs.length }} club(s) trouvé(s) sur {{ clubs.length }}
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            @click="showFilterDialog = false"
            color="primary"
            variant="elevated"
          >
            Appliquer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<style scoped>
.app-logo {
  height: 40px;
  width: 40px;
  margin-right: 8px;
}

.map-container {
  height: calc(100vh - 128px);
  margin: 16px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

@media (max-width: 600px) {
  .app-logo {
    height: 32px;
    width: 32px;
  }
  
  .map-container {
    margin: 8px;
    height: calc(100vh - 112px);
  }
}
</style>
