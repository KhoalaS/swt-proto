<script setup>
import { ref } from "vue";

const primary = ref(true);

const props = defineProps({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
});

const week = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

const zones = new Array(9).fill().map((_, i) => i + 1);
const error = ref(0);
const date = ref(getMinDate());
const time = ref("");
const dep = ref(1);
const dest = ref(1);

const validUntil = ref(null);

function getMinDate() {
  const date = new Date();
  return date
    .toLocaleDateString(undefined, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .split(".")
    .reverse()
    .join("-");
}

function formatPrice(price) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

function getDateString() {
  const today = new Date(date.value);
  return (
    week[today.getDay()] +
    " " +
    today.toLocaleDateString(undefined, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  );
}

function getValidDateString() {
  return (
    week[validUntil.value.getDay()] +
    " " +
    validUntil.value.toLocaleDateString(undefined, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  );
}

function formatTime(hours, minutes) {
  let t = "";
  console.log(hours < 9);
  if (hours < 9) {
    t += "0";
  }
  t += hours;
  t += ":";
  if (minutes < 9) {
    t += "0";
  }
  t += minutes;
  return t;
}

function submit() {
  if (time.value == "" || date.value == "") {
    error.value = 1;
    return;
  }
  const now = new Date();
  now.setHours(1, 0, 0, 0);
  if (now > new Date(date.value)) {
    error.value = 2;
    return;
  }
  error.value = 0;
  validUntil.value = getValidUntil();
  primary.value = false;
}

function getValidUntil() {
  const valid = new Date(date.value);
  const timeSplit = time.value.split(":");
  valid.setHours(timeSplit[0]);
  valid.setMinutes(timeSplit[1]);
  valid.setHours(valid.getHours() + 1);
  return valid;
}
</script>

<template>
  <main class="p-4">
    <div v-if="primary" class="flex flex-col gap-4">
      <p class="text-xl font-bold">{{ props.name }}</p>
      <div class="flex gap-8">
        <div class="flex gap-2 items-center">
          <p>von</p>
          <select v-model="dep">
            <option v-for="(zone, i) in zones">{{ zone }}</option>
          </select>
        </div>
        <font-awesome-icon icon="fa-solid fa-arrow-right"></font-awesome-icon>
        <div class="flex gap-2">
          <p>nach</p>
          <select v-model="dest">
            <option v-for="(zone, i) in zones">{{ zone }}</option>
          </select>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="flex flex-col">
          <label>Gültigkeitsdatum</label>
          <div class="border-2 border-blue rounded px-2 py-1">
            <input
              class="focus:outline-none w-full"
              type="date"
              v-model="date"
              :min="getMinDate()"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <label>Uhrzeit</label>
          <div class="border-2 border-blue rounded px-2 py-1">
            <input
              v-model="time"
              class="focus:outline-none w-full"
              type="time"
            />
          </div>
        </div>
      </div>
      <div>
        <label class="text-lg font-bold">Preis</label>
        <p>{{ formatPrice(props.price) }}</p>
      </div>
      <button
        @click="submit"
        class="hover:bg-dark-blue bg-blue text-white py-2 text-2xl font-bold rounded"
      >
        Weiter
      </button>
      <div class="flex justify-center">
        <p v-if="error == 1">Bitte Alle Felder ausfüllen</p>
        <p v-else-if="error == 2">ungültiges Datum</p>
      </div>
    </div>
    <div v-else class="flex flex-col gap-4">
      <p class="text-xl font-bold">{{ props.name }}</p>
      <div class="flex items-center gap-8">
        <p>von Zone {{ dep }}</p>
        <font-awesome-icon icon="fa-solid fa-arrow-right"></font-awesome-icon>
        <p>nach Zone {{ dest }}</p>
      </div>
      <div class="flex gap-4 flex-col">
        <div class="flex gap-4">
          <label>gültig ab&nbsp;</label>
          <p>{{ getDateString() }}</p>
          <p>{{ time }}</p>
        </div>
        <div class="flex gap-4">
          <label>gültig bis</label>
          <p>
            {{ getValidDateString() }}
          </p>
          <p>
            {{ formatTime(validUntil.getHours(), validUntil.getMinutes()) }}
          </p>
        </div>
      </div>
      <div>
        <label class="text-lg font-bold">Preis</label>
        <p>{{ formatPrice(props.price) }}</p>
      </div>
      <div class="flex justify-between">
        <button
          @click="primary = true"
          class="w-1/3 border-2 border-black py-2 text-2xl rounded"
        >
          Ändern
        </button>
        <button
          @click=""
          class="w-1/3 hover:bg-dark-blue bg-blue text-white py-2 text-2xl font-bold rounded"
        >
          Buchen
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
