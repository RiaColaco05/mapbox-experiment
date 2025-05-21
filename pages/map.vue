<template>
    <client-only>
      <MglMap
        :accessToken="accessToken"
        :center="[0, 0]"
        :zoom="2"
        :mapStyle="mapStyle"
        style="width: 100%; height: 100vh"
      />
    </client-only>
  </template>
  
  <script>

  // example
  // https://codesandbox.io/p/sandbox/mapbox-vue-xpmi0l?file=%2Fsrc%2FApp.vue
  import mapboxgl from 'mapbox-gl'
  
  export default {
    head() {
        return {
            link: [{
                href: "https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css",
                rel: "stylesheet"
            }]
        }
    },
    data() {
      return {
        mapboxGl: mapboxgl,
        mapStyle: "mapbox://styles/mapbox/streets-v11",
        accessToken: 'pk.eyJ1IjoiYnBhY2h1Y2EiLCJhIjoiY2lxbGNwaXdmMDAweGZxbmg5OGx2YWo5aSJ9.zda7KLJF3TH84UU6OhW16w'
      }
    }
  }
  </script>
  