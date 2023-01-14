<script setup>
import { onMounted, ref } from "vue";
import SearchBox from "../components/SearchBox.vue";
import pins from "../assets/stops.json";
import iconUrl from "../assets/marker.svg";

const map = ref(null);

onMounted(() => {
  const m = L.map(map.value).setView([49.75667, 6.64139], 15);
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

  pins.pins.forEach((elem) => {
    if (elem.type == "STOP") {
      const coords = elem.coords.split(",");
      const marker = L.marker([coords[1], coords[0]], { icon: myIcon })
        .addTo(m)
        .bindPopup(
          `<p>${elem.attrs[1].value}</p><div class="flex justify-between gap-4 my-2"><button onclick="` +
            `document.querySelector('.leaflet-popup-close-button').click();let dep = document.querySelector('#departure');dep.value='${elem.attrs[1].value}';dep.focus();dep.dispatchEvent(new Event('input'));` +
            '" class="rounded px-1 py-[2px] border-2 border-green">Von hier</button><button onclick="' +
            `document.querySelector('.leaflet-popup-close-button').click();let dest = document.querySelector('#destination');dest.value='${elem.attrs[1].value}';dest.focus();dest.dispatchEvent(new Event('input'));` +
            '" class="rounded px-1 py-[2px] border-2 border-blue">Hierhin</button></div>'
        );
    }
  });
  m.on("zoom", () => {
    console.log(m.getZoom());
    if (m.getZoom() < 15) {
      document.querySelector(".leaflet-marker-pane").style = "display:none;";
      document.querySelector(".leaflet-shadow-pane").style = "display:none;";
    }
    if (m.getZoom() >= 15) {
      document.querySelector(".leaflet-marker-pane").style = "";
      document.querySelector(".leaflet-shadow-pane").style = "";
    }
  });
});

function htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  console.log(document.baseURI);
  return template.content.firstChild;
}

function clicker() {
  console.log("cock");
}
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
