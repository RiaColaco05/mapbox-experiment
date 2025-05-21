<template>
  <div ref="mapContainer" class="map-container" />
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
  mounted() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnBhY2h1Y2EiLCJhIjoiY2lxbGNwaXdmMDAweGZxbmg5OGx2YWo5aSJ9.zda7KLJF3TH84UU6OhW16w'
    this.map = new mapboxgl.Map({
      container: this.$refs.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [0, 0],
      zoom: 2
      
    })

    this.map.on("load", () => {
        this.map.addControl(new mapboxgl.NavigationControl(), "top-right");
        this.map.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true,
            },
            trackUserLocation: true,
          }),
          "top-right"
        );
        this.map.addControl(
          new mapboxgl.ScaleControl({
            maxWidth: 100,
            unit: "metric",
          })
        );

        this.map.addSource('earthquakes', {
            type: 'geojson',
            // Use a URL for the value for the `data` property.
            data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson'
        });

        this.map.addLayer({
            'id': 'earthquakes-layer',
            'type': 'circle',
            'source': 'earthquakes',
            'paint': {
                'circle-radius': 4,
                'circle-stroke-width': 2,
                'circle-color': 'red',
                'circle-stroke-color': 'white'
            }
        });


          // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker()
        .setLngLat([12.554729, 55.70651])
        .addTo(this.map);

    // Create a default Marker, colored black, rotated 45 degrees.
    const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
        .setLngLat([12.65147, 55.608166])
        .addTo(this.map);

        // if (this.markers.length > 0) {
        //   this.resetMarkers();
        // }

        // if (this.currentFeatures) {
        //   this.updateMarkers();
        // }
      });
  }
}
</script>

<style>
.map-container {
  width: 100%;
  height: 100vh;
}
</style>
