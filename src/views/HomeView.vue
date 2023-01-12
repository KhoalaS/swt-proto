<script setup>
import { onMounted, ref } from "vue";
import SearchBox from "../components/SearchBox.vue";
const map = ref(null);

onMounted(() => {
  const m = L.map(map.value).setView([49.75667, 6.64139], 14);
  L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
    {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    }
  ).addTo(m);
  m.on("zoom", () => {
    console.log(m.getZoom());
    //TODO Marker einbinden ab ZoomLevel X
  });
});
</script>

<template>
  <main class="p-4">
    <SearchBox></SearchBox>
    <div class="z-0" ref="map" id="map"></div>
  </main>
</template>

<style scoped>
#map {
  height: 420px;
}
@media (max-width: 1024px) {
  #map {
    height: 336px;
  }
}
</style>
