<script setup>
import TicketHistoryTile from "../components/TicketHistoryTile.vue";
const from = [
  {
    date: "Mo 19.12.22",
    time: "12:31",
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
      <TicketHistoryTile
        name="EinzelTicket"
        level="2"
        :price="3.1"
        dep="Trier-City"
        dest="Trier-Nord"
        :valid="from"
      ></TicketHistoryTile>
      <TicketHistoryTile
        name="EinzelTicket"
        level="3"
        :price="4.2"
        dep="Igel"
        dest="Trier-City"
        :valid="from1"
      ></TicketHistoryTile>
    </div>
  </main>
</template>
<style></style>
