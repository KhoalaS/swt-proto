<script setup>
import DatePicker from "./DatePicker.vue";
import { ref, provide } from "vue";

const date = ref(new Date());
const dep = ref("");
const dest = ref("");
provide("date", date);

function swap() {
  if (dep.value != dest.value) {
    const temp = dep.value;
    dep.value = dest.value;
    dest.value = temp;
  }
}
</script>

<template>
  <div class="flex flex-row items-center w-full gap-4">
    <div class="flex flex-col gap-2 w-full">
      <div>
        <label>von</label>
        <div
          class="flex flex-row justify-between border-2 border-blue rounded p-1"
        >
          <input
            type="text"
            placeholder="Ort/Haltestelle/Straße"
            class="px-2 py-1 focus:outline-none w-full"
            v-model="dep"
          />
          <button title="aktuelle Position">
            <font-awesome-icon icon="fa-solid fa-crosshairs" />
          </button>
        </div>
      </div>
      <div>
        <label>nach</label>
        <div class="border-2 border-blue rounded p-1">
          <input
            type="text"
            placeholder="Ort/Haltestelle/Straße"
            class="px-2 py-1 focus:outline-none w-full"
            v-model="dest"
          />
        </div>
      </div>
    </div>
    <div class="flex items-center mt-6">
      <button title="vertauschen" @click="swap">
        <font-awesome-icon icon="fa-solid fa-right-left" rotation="90" />
      </button>
    </div>
  </div>
  <DatePicker></DatePicker>
</template>

<style scoped></style>
