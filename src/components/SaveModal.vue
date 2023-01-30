<script setup>
import { inject } from "vue";
const { closeSave } = inject("closeSave");
</script>
<template>
  <Teleport to="body">
    <div
      @click="closeSave"
      class="fixed top-0 z-30 w-full h-full bg-black-trans"
    ></div>

    <div
      class="flex flex-col gap-6 justify-between p-2 fixed z-40 top-[40%] left-1/2 h-fit w-[320px] ml-[-160px] bg-white border-4 border-blue rounded-lg"
    >
      <div class="flex justify-between">
        <p class="text-lg font-bold">Änderungen speichern</p>
        <font-awesome-icon
          @click="closeSave"
          title="Schließen"
          class="hover:cursor-pointer"
          icon="fa-solid fa-xmark"
        ></font-awesome-icon>
      </div>
      <p>Wollen sie die Änderungen speichern?</p>
      <div class="flex justify-between">
        <button
          @click="closeSave"
          class="px-2 py-1 bg-blue text-white rounded hover:bg-dark-blue"
        >
          <RouterLink to="/admin"> Bestätigen </RouterLink>
        </button>

        <button
          @click="closeSave"
          class="px-2 py-1 border-2 border-black rounded hover:bg-light-blue"
        >
          Abbrechen
        </button>
      </div>
    </div>
  </Teleport>
</template>
