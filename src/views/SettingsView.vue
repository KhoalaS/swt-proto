<script setup>
import DropDown from "../components/DropDown.vue";
const routes = ["Routenplanung", "Meine Tickets", "Tickets", "Verlauf"];
const langs = ["🇩🇪 Deutsch", "🇬🇧 Englisch"];
</script>
<template>
  <main class="p-4">
    <div class="flex flex-col">
      <div class="text-xl bg-green text-white px-2 py-1">
        <p>Ticket</p>
      </div>
      <div class="flex mx-4 border-b-2 h-16 items-center">
        <div class="flex w-full justify-between text-lg">
          <p>Ticket automatisch als Foto sichern</p>
          <input type="checkbox" class="mx-4" />
        </div>
      </div>

      <div class="last:border-none flex mx-4 border-b-2 h-16 items-center">
        <div class="flex w-full justify-between text-lg">
          <p>Ticket automatisch an E-Mail senden</p>
          <input type="checkbox" class="mx-4" />
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="text-xl bg-green text-white px-2 py-1">
        <p>Reiseplan</p>
      </div>
      <div class="flex mx-4 h-16 items-center">
        <div class="flex w-full justify-between text-lg">
          <p>E-Mail Benachrichtigung bei Verspätung</p>
          <input type="checkbox" class="mx-4" />
        </div>
      </div>
    </div>

    <div class="flex flex-col">
      <div class="text-xl bg-green text-white px-2 py-1">
        <p>Sonstige</p>
      </div>
      <div class="flex mx-4 border-b-2 h-16 items-center">
        <div class="flex w-full justify-between text-lg">
          <p>Startseite</p>
          <select class="bg-blue text-white p-1 rounded hover:cursor-pointer">
            <option v-for="(route, i) in routes">{{ route }}</option>
          </select>
        </div>
      </div>
      <div class="last:border-none flex mx-4 border-b-2 h-16 items-center">
        <div class="flex w-full justify-between text-lg">
          <p>Verlauf löschen</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="text-xl bg-green text-white px-2 py-1">
        <p>Sprache</p>
      </div>
      <div class="flex mx-4 h-16 items-center">
        <div class="flex w-full justify-between text-lg">
          <p>Sprache</p>
          <select class="bg-blue text-white p-1 rounded hover:cursor-pointer">
            <option v-for="(lang, i) in langs">{{ lang }}</option>
          </select>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
[type="checkbox"]:hover {
  cursor: pointer;
}
</style>
