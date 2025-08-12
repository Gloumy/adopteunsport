// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [],
  css: [
    '@mdi/font/css/materialdesignicons.css',
    'leaflet/dist/leaflet.css',
    'vuetify/styles'
  ],
  build: {
    transpile: ['vuetify']
  }
})