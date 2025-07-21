import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { customTheme, customDarkTheme } from './theme'

// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'customLight',
    themes: {
      customLight: customTheme,
      customDark: customDarkTheme,
    },
  },
})