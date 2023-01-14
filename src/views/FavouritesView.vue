<script setup>
import FavouriteTile from "../components/FavouriteTile.vue";
const from = [
  {
    date: "Mo",
    time: "16:05",
  },
  {
    date: "Mo 19.12.22",
    time: "13:31",
  },
];

const from1 = [
  {
    date: "Di 08.11.22",
    time: "18:02",
  },
  {
    date: "Di 08.11.22",
    time: "19:02",
  },
];
</script>
<template>
  <main class="p-4">
    <div class="flex flex-col gap-4">
      <FavouriteTile
        name="EinzelTicket"
        level="2"
        line="3"
        :price="3.1"
        dep="Tarforst, Universität"
        dest="Trier, Porta Nigra"
        time="Mo 12:05-12:22"
      ></FavouriteTile>
      <FavouriteTile
        name="EinzelTicket"
        level="4"
        line="8"
        :price="4.2"
        dep="Schweich, Brunnen"
        dest="Trier, Porta Nigra"
        time="Mi 14:38-15:17"
      ></FavouriteTile>
    </div>
  </main>
</template>
<style></style>
