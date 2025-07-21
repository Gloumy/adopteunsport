<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Map from "./components/Map.vue";
import AppBar from "./components/AppBar.vue";
import FilterDialog from "./components/FilterDialog.vue";
import InfoDialog from "./components/InfoDialog.vue";
import useClubApi from "./api/ClubApi";
import { Club } from "./models/Club";

const { getClubs } = useClubApi();

// États pour le filtrage
const clubs = ref<Club[]>([]);
const selectedSports = ref<string[]>([]);
const showFilterDialog = ref(false);
const showInfoDialog = ref(false);

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

// Ouvrir/fermer la dialog d'informations
function toggleInfoDialog() {
  showInfoDialog.value = !showInfoDialog.value;
}

// Effacer tous les filtres
function clearFilters() {
  selectedSports.value = [];
}
</script>

<template>
  <v-app>
    <AppBar 
      :filter-count="selectedSports.length"
      @toggle-info="toggleInfoDialog"
      @toggle-filter="toggleFilterDialog"
    />

    <v-main class="bg-grey-lighten-4">
      <div class="map-container">
        <Map :clubs="filteredClubs" />
      </div>
    </v-main>

    <FilterDialog
      v-model="showFilterDialog"
      :available-sports="availableSports"
      :selected-sports="selectedSports"
      :filtered-count="filteredClubs.length"
      :total-count="clubs.length"
      @update:selected-sports="selectedSports = $event"
      @clear-filters="clearFilters"
    />

    <InfoDialog v-model="showInfoDialog" />
  </v-app>
</template>

<style scoped>
.map-container {
  height: calc(100vh - 128px);
  margin: 16px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

@media (max-width: 600px) {
  .map-container {
    margin: 8px;
    height: calc(100vh - 112px);
  }
}
</style>
