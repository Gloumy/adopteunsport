import { type ThemeDefinition } from 'vuetify'

// Palette de couleurs personnalisée
// Basée sur https://coolors.co/272932-4d7ea8-828489-9e90a2-b6c2d9
export const customTheme: ThemeDefinition = {
  dark: false,
  colors: {
    // Couleurs principales
    primary: '#4D7EA8',        // Bleu principal (Steel Blue)
    secondary: '#9E90A2',      // Lilas (Mountbatten Pink)
    accent: '#B6C2D9',         // Bleu clair (Pale Cornflower Blue)
    
    // Couleurs de surface
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#F8F9FA',
    'surface-variant': '#B6C2D9',
    'on-surface-variant': '#272932',
    
    // Couleurs de fond
    background: '#F5F7FA',
    'on-background': '#272932',
    
    // Couleurs neutres
    'grey-50': '#FAFBFC',
    'grey-100': '#F1F3F4',
    'grey-200': '#E8EAED',
    'grey-300': '#DADCE0',
    'grey-400': '#BDC1C6',
    'grey-500': '#9AA0A6',
    'grey-600': '#80868B',
    'grey-700': '#5F6368',
    'grey-800': '#3C4043',
    'grey-900': '#272932',
    
    // Couleurs d'état
    success: '#34A853',
    warning: '#FBBC04',
    error: '#EA4335',
    info: '#4D7EA8',
    
    // Couleurs de texte
    'on-primary': '#FFFFFF',
    'on-secondary': '#FFFFFF',
    'on-accent': '#272932',
    'on-success': '#FFFFFF',
    'on-warning': '#272932',
    'on-error': '#FFFFFF',
    'on-info': '#FFFFFF',
    'on-surface': '#272932',
  }
}

// Thème sombre optionnel
export const customDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    // Couleurs principales
    primary: '#4D7EA8',
    secondary: '#9E90A2',
    accent: '#B6C2D9',
    
    // Couleurs de surface sombres
    surface: '#1E1E1E',
    'surface-bright': '#2D2D2D',
    'surface-light': '#272932',
    'surface-variant': '#3C3C3C',
    'on-surface-variant': '#E1E3E6',
    
    // Couleurs de fond sombres
    background: '#121212',
    'on-background': '#E1E3E6',
    
    // Couleurs neutres pour le thème sombre
    'grey-50': '#FAFBFC',
    'grey-100': '#F1F3F4',
    'grey-200': '#E8EAED',
    'grey-300': '#DADCE0',
    'grey-400': '#BDC1C6',
    'grey-500': '#9AA0A6',
    'grey-600': '#80868B',
    'grey-700': '#5F6368',
    'grey-800': '#3C4043',
    'grey-900': '#202124',
    
    // Couleurs d'état
    success: '#34A853',
    warning: '#FBBC04',
    error: '#EA4335',
    info: '#4D7EA8',
    
    // Couleurs de texte pour le thème sombre
    'on-primary': '#FFFFFF',
    'on-secondary': '#FFFFFF',
    'on-accent': '#272932',
    'on-success': '#FFFFFF',
    'on-warning': '#272932',
    'on-error': '#FFFFFF',
    'on-info': '#FFFFFF',
    'on-surface': '#E1E3E6',
  }
}