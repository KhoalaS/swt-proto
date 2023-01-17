<script setup>
import TicketDropDown from "../components/TicketDropDown.vue";

const single = [
  { name: "", price: 2.2, disclaimer: "" },
  { name: "ermäßigt", price: 1.4, disclaimer: "" },
  { name: "Sparkarte", price: 1.7, disclaimer: "" },
  { name: "BahnCard", price: 1.7, disclaimer: "" },
];
const day = [
  { name: "Single", price: 6.1, disclaimer: "" },
  { name: "Gruppe", price: 11.6, disclaimer: "" },
];
const mobile = [
  { name: "Woche", price: 20.2, disclaimer: "" },
  { name: "Monat", price: 70.8, disclaimer: "" },
  { name: "Jahr", price: 59, disclaimer: "pro Monat" },
  { name: "Jobticket", price: 66, disclaimer: "pro Monat" },
];
const region = [
  {
    name: "(/+ Lux)",
    price: 25,
    disclaimer: "",
  },
];

const extra = [
  {
    name: "4-FahrtenTicket",
    price: 6.6,
    disclaimer: "",
  },
];
</script>
<template>
  <main class="p-4 h-full sm:w-full min-w-fit">
    <div
      class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-start sm:gap-8"
    >
      <TicketDropDown
        title="EinzelTicket"
        :versions="single"
        :extra="extra"
      ></TicketDropDown>
      <TicketDropDown title="TagesTicket" :versions="day"></TicketDropDown>
      <TicketDropDown title="MobilTicket" :versions="mobile"></TicketDropDown>
      <TicketDropDown
        title="Rheinland-Pfalz-Ticket"
        :versions="region"
      ></TicketDropDown>
    </div>
  </main>
</template>

<style scoped></style>
