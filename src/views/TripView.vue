<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  time: {
    type: String,
  },
  dep: {
    type: String,
  },
  dest: {
    type: String,
  },
});

const map = ref(null);
const date = new Date(props.time);
date.setHours(14);
date.setMinutes(39);

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
    <div class="z-0" ref="map" id="map"></div>
    <div class="h-[2px] bg-dark-blue my-4 rounded"></div>
    <div class="flex flex-col text-lg">
      <p>
        Start: <a class="text-blue hover:cursor-pointer">{{ props.dep }}</a>
      </p>
      <p>Linie 3</p>
      <p>Richtung Weidengraben</p>
      <p>
        geplante Zeit:
        {{
          date.toLocaleString(undefined, {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })
        }}
      </p>
      <p class="font-bold">
        Echtzeit:
        {{
          date.toLocaleString(undefined, {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })
        }}
      </p>
      <p>
        Ziel: <a class="text-blue hover:cursor-pointer">{{ props.dest }}</a>
      </p>
    </div>
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
