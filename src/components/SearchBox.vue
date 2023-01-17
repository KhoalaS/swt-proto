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

function changed() {
  console.log("value changed");
}
</script>

<template>
  <div class="lg:w-1/3 flex flex-col">
    <div class="flex flex-row items-center w-full gap-4">
      <div class="flex flex-col gap-2 w-full">
        <div>
          <label>von</label>
          <div
            class="flex flex-row justify-between border-2 border-blue rounded p-1"
          >
            <input
              id="departure"
              type="text"
              placeholder="Ort/Haltestelle/Straße"
              class="px-2 py-1 focus:outline-none w-full"
              v-model="dep"
              @input="changed"
            />
            <div
              title="aktuelle Position"
              class="flex place-items-center hover:cursor-pointer"
            >
              <font-awesome-icon
                icon="fa-solid fa-crosshairs"
                class="dark:text-gray"
              />
            </div>
          </div>
        </div>
        <div>
          <label>nach</label>
          <div class="border-2 border-blue rounded p-1">
            <input
              id="destination"
              type="text"
              placeholder="Ort/Haltestelle/Straße"
              class="px-2 py-1 focus:outline-none w-full"
              v-model="dest"
            />
          </div>
        </div>
      </div>
      <div class="flex items-center mt-6">
        <div title="vertauschen" @click="swap" class="hover:cursor-pointer">
          <font-awesome-icon
            icon="fa-solid fa-right-left"
            rotation="90"
            class="dark:text-gray"
          />
        </div>
      </div>
    </div>
    <DatePicker></DatePicker>
    <div class="flex justify-center">
      <button
        class="w-full hover:bg-dark-blue bg-blue text-white py-2 text-2xl font-bold rounded my-4"
      >
        Suchen
      </button>
    </div>
  </div>
</template>

<style scoped></style>
