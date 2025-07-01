<template>
  <div style="height:600px; width:800px">
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
      <l-marker :lat-lng="[49.5667, 5.5333]" />
        
    </l-map>
  </div>
</template>

<script setup lang="ts">
import { ref} from "vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

// Variables réactives
const zoom = ref(12);

</script>

<style scoped>
/* Assurer que Leaflet s'affiche correctement */
:deep(.leaflet-container) {
  height: 100%;
  width: 100%;
}
</style>