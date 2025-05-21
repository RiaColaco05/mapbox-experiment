<template>
    <div ref="mapContainer" class="map-container"></div>
  </template>
  
  <script>
  import mapboxgl from 'mapbox-gl'
  
  export default {
    name: 'MapboxMap',

    mounted() {
      mapboxgl.accessToken = 'pk.eyJ1IjoiYnBhY2h1Y2EiLCJhIjoiY2lxbGNwaXdmMDAweGZxbmg5OGx2YWo5aSJ9.zda7KLJF3TH84UU6OhW16w'
      this.map = new mapboxgl.Map({
        container: this.$refs.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [0, 0],
        zoom: 2
      })


    }
  }
  </script>
  
  <style scoped>
  .map-container {
    width: 100%;
    height: 100vh;
  }
  </style>
  