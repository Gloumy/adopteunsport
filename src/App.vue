<script setup lang="ts">
import Map from "./components/Map.vue";
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
      
      <v-app-bar-title class="text-h4 font-weight-bold">
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
        ></v-btn>
      </template>
    </v-app-bar>

    <v-main class="bg-grey-lighten-4">
      <div class="map-container">
        <Map />
      </div>
    </v-main>
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
