# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is a Vue.js application for sports club discovery with interactive mapping capabilities. The project uses:

- **Vue 3** with Composition API and `<script setup>` syntax
- **TypeScript** for type safety
- **Vite** as build tool and development server
- **Leaflet** with `@vue-leaflet/vue-leaflet` for interactive maps
- **Vitest** with jsdom for testing

## Key Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production (includes TypeScript compilation)
npm run preview      # Preview production build
```

### Testing
```bash
npm test             # Run tests with Vitest
npm run test:ui      # Run tests with UI interface
```

## Code Architecture

### Component Structure
- **Main App**: `src/App.vue` → `src/components/Map.vue`
- **Map Component**: Implements Leaflet map with OpenStreetMap tiles, centered on Luxembourg/Eastern France region
- **Models**: `src/models/Club.ts` (currently empty, intended for club data structure)

### Map Implementation Details
- Uses `@vue-leaflet/vue-leaflet` components: `LMap`, `LTileLayer`, `LMarker`
- Fixed dimensions: 800x600px
- Default zoom level: 12
- Current marker at coordinates [49.5667, 5.5333]
- Map center at [49.5724501273382, 5.535054262725816]

### Testing Strategy
- Comprehensive unit tests for Map component in `src/components/__tests__/Map.test.ts`
- Mocks Leaflet components to avoid DOM issues in tests
- Tests cover rendering, positioning, dimensions, and tile layer configuration
- Uses jsdom environment for DOM testing

### TypeScript Configuration
- Strict TypeScript with separate configs for app and Node.js
- Modern ES2023 target with ESNext modules
- Full type safety with `@types/leaflet`

## Development Notes

### Map Component Testing
When testing the Map component, Leaflet components are mocked to avoid DOM-related issues. The test file provides a good template for testing Vue-Leaflet integrations.

### Geographic Context
The application appears focused on the Luxembourg/Eastern France region based on map coordinates. This suggests it's intended for local sports club discovery in that area.

### Current State
- Basic map functionality is complete and tested
- Club model structure needs to be implemented
- No routing or state management currently in place
- Single marker implementation (ready for expansion to multiple clubs)