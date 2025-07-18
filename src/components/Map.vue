<template>
  <div style="height: 100vh; width: 100vw">
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
      <l-marker v-for="club in clubs" :key="club.nom" :lat-lng="[club.latitude, club.longitude]" :name="club.nom">
        <l-popup>{{ club.nom }}</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
// import type L from "leaflet";
import useClubApi from "../api/ClubApi";
import type { Club } from "../models/Club";

const { getClubs } = useClubApi();

// Variables réactives
const zoom = ref(20);
const clubs = ref<Club[]>([]);

onMounted(async() => {
  clubs.value = await getClubs();
})

</script>

<style scoped>
/* Assurer que Leaflet s'affiche correctement */
:deep(.leaflet-container) {
  height: 100%;
  width: 100%;
}
</style>
