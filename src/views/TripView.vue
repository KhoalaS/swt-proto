<script setup>
import { ref, onMounted } from "vue";
import iconUrl from "../assets/marker.svg";
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
let m = null;

const pins = [
  { name: "Trier, Porta Nigra", coords: "6.64275,49.75918" },
  {
    name: "Kürenz, Kohlenstraße",
    coords: "6.68507,49.75097",
  },
];

onMounted(() => {
  m = L.map(map.value).setView([49.75667, 6.64139], 13);
  L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
    {
      maxZoom: 19,
      minZoom: 10,
      attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    }
  ).addTo(m);

  var myIcon = L.icon({
    iconUrl: iconUrl,
    iconAnchor: [12, 41],
    iconSize: [25, 41],
    popupAnchor: [0, -30],
  });

  pins.forEach((elem, i) => {
    const coords = elem.coords.split(",");
    const marker = L.marker([coords[1], coords[0]], { icon: myIcon })
      .addTo(m)
      .bindPopup(
        `<p>${
          elem.name
        }</p><div class="flex justify-center gap-4 my-2"><button class="rounded px-1 py-[2px] border-2 border-green">${
          i == 0 ? "Start" : "Ziel"
        }</button></div>`
      );
  });

  m.on("zoom", () => {
    console.log(m.getZoom());
    //TODO Marker einbinden ab ZoomLevel X
  });
});
function zoomTo(index) {
  let coords = pins[index].coords.split(",");
  m.setView([coords[1], coords[0]], 13);
}
</script>

<template>
  <main class="p-4">
    <div class="z-0" ref="map" id="map"></div>
    <div class="h-[2px] bg-dark-blue my-4 rounded"></div>
    <div class="flex flex-col text-lg">
      <p>
        Start:
        <a @click="zoomTo(0)" class="text-blue hover:cursor-pointer">{{
          props.dep
        }}</a>
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
        Ziel:
        <a @click="zoomTo(1)" class="text-blue hover:cursor-pointer">{{
          props.dest
        }}</a>
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
