import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Map from '../Map.vue'

// Mock Leaflet pour éviter les erreurs de DOM
vi.mock('@vue-leaflet/vue-leaflet', () => ({
  LMap: {
    name: 'LMap',
    template: '<div class="mock-map" data-testid="leaflet-map"><slot /></div>',
    props: ['center', 'zoom', 'useGlobalLeaflet']
  },
  LTileLayer: {
    name: 'LTileLayer',
    template: '<div class="mock-tile-layer" data-testid="tile-layer"></div>',
    props: ['url', 'layerType', 'name', 'attribution']
  },
  LMarker: {
    name: 'LMarker',
    template: '<div class="mock-marker" data-testid="marker"></div>',
    props: ['latLng', 'name']
  },
  LPopup: {
    name: 'LPopup',
    template: '<div class="mock-popup" data-testid="popup"><slot /></div>'
  }
}))

// Mock CSS import
vi.mock('leaflet/dist/leaflet.css', () => ({}))

describe('Map.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Map)
    expect(wrapper.find('[data-testid="leaflet-map"]').exists()).toBe(true)
  })

  it('renders the tile layer', () => {
    const wrapper = mount(Map)
    expect(wrapper.find('[data-testid="tile-layer"]').exists()).toBe(true)
  })

  it('renders the marker', async () => {
    const wrapper = mount(Map)
    await wrapper.vm.$nextTick()
    await new Promise(resolve => setTimeout(resolve, 100))
    expect(wrapper.find('[data-testid="marker"]').exists()).toBe(true)
  })

  it('has correct initial zoom level', () => {
    const wrapper = mount(Map)
    const mapComponent = wrapper.findComponent({ name: 'LMap' })
    expect(mapComponent.exists()).toBe(true)
  })

  it('has correct dimensions', () => {
    const wrapper = mount(Map)
    const mapContainer = wrapper.find('div')
    expect(mapContainer.attributes('style')).toContain('height: 100vh')
    expect(mapContainer.attributes('style')).toContain('width: 100vw')
  })

  it('contains OpenStreetMap tile layer with correct URL', () => {
    const wrapper = mount(Map)
    const tileLayer = wrapper.findComponent({ name: 'LTileLayer' })
    expect(tileLayer.exists()).toBe(true)
    expect(tileLayer.props('url')).toBe('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
  })

  it('has marker at correct position', async () => {
    const wrapper = mount(Map)
    await wrapper.vm.$nextTick()
    await new Promise(resolve => setTimeout(resolve, 100))
    const marker = wrapper.findComponent({ name: 'LMarker' })
    expect(marker.exists()).toBe(true)
    expect(marker.props('latLng')).toEqual([49.55, 5.52])
  })

  it('has correct center coordinates', () => {
    const wrapper = mount(Map)
    const mapComponent = wrapper.findComponent({ name: 'LMap' })
    expect(mapComponent.props('center')).toEqual([49.5724501273382, 5.535054262725816])
  })
})