<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
const pw = ref("");
const pwRepeat = ref("");
const showEyeIcon = ref(false);
const showPassword = ref(false);

function getPwLength(password) {
  showEyeIcon.value = password.length > 0;
}
</script>

<template>
  <main class="p-4">
    <p class="text-2xl mb-4 font-bold">Persönliche Daten</p>
    <div class="flex justify-start gap-8 mb-4">
      <div class="flex flex-col">
        <p class="font-bold text-lg">Anrede</p>
        <p class="font-bold text-lg">Vorname, Nachname</p>
        <p class="font-bold text-lg">E-Mail</p>
      </div>
      <div class="flex flex-col">
        <p class="text-lg">Herr</p>
        <p class="text-lg">Max Musterman</p>
        <p class="text-lg">maxmuster@mail.de</p>
      </div>
    </div>
    <div class="flex justify-between">
      <button
        class="w-fit p-2 border-2 border-black hover:bg-green-200 bg-white text-black text-2xl rounded"
      >
        Ändern
      </button>
      <button
        class="w-fit p-2 font-bold hover:bg-dark-blue bg-blue text-white text-2xl rounded"
      >
        Bestätigen
      </button>
    </div>
  </main>
</template>

<style scoped></style>
