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
        <l-popup>
          <span>{{ club.nom }}</span>
          <v-icon @click="openDetailsDialog(club)">mdi-open-in-new</v-icon>
        </l-popup>
      </l-marker>
    </l-map>
    <v-dialog v-model="displayDetailsDialog">
      <v-card>
        <v-card-title>{{ selectedClub?.nom }}</v-card-title>
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
}
</style>
