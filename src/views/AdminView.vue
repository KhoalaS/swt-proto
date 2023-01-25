<script setup>
import AdminTicketDropDown from "../components/AdminTicketDropDown.vue";
import { RouterLink } from "vue-router";

// embedding context unknown
</script>

<template>
  <main class="p-4">
    <div class="flex justify-center">
      <div class="flex flex-col gap-2 w-1/3">
        <p class="text-3xl">🎫 Tickets</p>
        <div class="h-[2px] rounded-lg my-2 bg-blue"></div>
        <RouterLink
          class="text-xl border-2 border-green rounded py-1 px-2 hover:bg-light-blue hover:border-dark-blue ease-in duration-75"
          :to="{ name: 'Edit', params: { type: 'single' } }"
          >EinzelTicket</RouterLink
        >
        <RouterLink
          class="text-xl border-2 border-green rounded py-1 px-2 hover:bg-light-blue hover:border-dark-blue ease-in duration-75"
          :to="{ name: 'Edit', params: { type: 'day' } }"
          >TagesTicket</RouterLink
        >
        <RouterLink
          class="text-xl border-2 border-green rounded py-1 px-2 hover:bg-light-blue hover:border-dark-blue ease-in duration-75"
          :to="{ name: 'Edit', params: { type: 'mobile' } }"
          >MobilTicket</RouterLink
        >
        <RouterLink
          class="text-xl border-2 border-green rounded py-1 px-2 hover:bg-light-blue hover:border-dark-blue ease-in duration-75"
          :to="{ name: 'Edit', params: { type: 'region' } }"
          >Rheinland-Pfalz-Ticket</RouterLink
        >
      </div>
    </div>
  </main>
</template>

<style scoped></style>
