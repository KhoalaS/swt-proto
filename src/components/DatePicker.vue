<script setup>
import { ref, inject } from "vue";

// model var
const date = inject("date");
const time_v = ref(getTimeString());
const check = ref(1);

// view var
const date_v = ref(getDateString());

function radioClick() {
  check.value = (check.value + 1) % 2;
}

function getDateString() {
  return date.value.toLocaleDateString(undefined, {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
}

function getTimeString() {
  return date.value.toLocaleTimeString("de-DE", {
    hour: "numeric",
    minute: "numeric",
  });
}

function advanceDate(dir) {
  date.value.setDate(date.value.getDate() + dir);
  date_v.value = getDateString();
}

function advanceTime(dir) {
  const s = time_v.value.split(":");
  let add = Number(s[0]) + dir;
  if (add == 24) {
    add = 0;
  } else if (add == -1) {
    add = 23;
  }
  time_v.value = String(add) + ":00";
  if (add < 10) {
    time_v.value = "0" + time_v.value;
  }
}
</script>

<template>
  <div class="flex flex-col mt-6 gap-2">
    <div class="flex gap-4 justify-between">
      <div
        class="flex items-center w-full justify-between border-2 border-blue rounded p-1"
      >
        <button @click="advanceDate(-1)">
          <font-awesome-icon
            icon="fa-solid fa-arrow-left"
            class="dark:text-gray"
          />
        </button>
        <input v-model="date_v" type="text" class="focus:outline-none w-1/2" />
        <button @click="advanceDate(+1)">
          <font-awesome-icon
            icon="fa-solid fa-arrow-right"
            class="dark:text-gray"
          />
        </button>
      </div>
      <div class="flex items-center">
        <font-awesome-icon
          icon="fa-solid fa-calendar-days"
          class="dark:text-gray"
        />
      </div>
    </div>
    <div class="flex gap-4 justify-between">
      <div
        class="flex items-center justify-between w-full border-2 border-blue rounded p-1"
      >
        <button @click="advanceTime(-1)">
          <font-awesome-icon
            icon="fa-solid fa-arrow-left"
            class="dark:text-gray"
          />
        </button>
        <input v-model="time_v" type="text" class="focus:outline-none w-1/2" />
        <button @click="advanceTime(+1)">
          <font-awesome-icon
            icon="fa-solid fa-arrow-right"
            class="dark:text-gray"
          />
        </button>
      </div>
      <div class="flex gap-4">
        <div class="flex gap-1 items-center">
          <input type="radio" :checked="check" @click="radioClick()" />
          <label>Ab</label>
        </div>
        <div class="flex gap-1 items-center">
          <input type="radio" :checked="!check" @click="radioClick()" />
          <label>An</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  text-align: center;
}
</style>
