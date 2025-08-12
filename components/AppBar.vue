<template>
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
        @click="$emit('toggle-info')"
      ></v-btn>
      <v-btn
        icon="mdi-filter-variant"
        variant="text"
        @click="$emit('toggle-filter')"
      >
        <v-badge 
          v-if="filterCount > 0" 
          :content="filterCount" 
          color="error"
        >
          <v-icon>mdi-filter-variant</v-icon>
        </v-badge>
        <v-icon v-else>mdi-filter-variant</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
interface Props {
  filterCount?: number;
}

withDefaults(defineProps<Props>(), {
  filterCount: 0
});

defineEmits<{
  'toggle-info': [];
  'toggle-filter': [];
}>();
</script>

<style scoped>
.app-logo {
  height: 40px;
  width: 40px;
  margin-right: 8px;
}

@media (max-width: 600px) {
  .app-logo {
    height: 32px;
    width: 32px;
  }
}
</style>