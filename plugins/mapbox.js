import Vue from 'vue'
import * as VueMapbox from 'vue-mapbox'
import mapboxgl from 'mapbox-gl'

Vue.component('MglMap', VueMapbox.MglMap)
Vue.component('MglMarker', VueMapbox.MglMarker)

Vue.prototype.$mapbox = mapboxgl