<script setup>
import QRious from "qrious";
import { ref, onMounted, inject } from "vue";

const qrCode = ref(null);
const { clickCode } = inject("clickCode");

const props = defineProps({
  dep: {
    type: String,
  },
  dest: {
    type: String,
  },
  date: {
    type: Date,
  },
  isValid: {
    type: Boolean,
  },
});

onMounted(() => {
  new QRious({
    foreground: "#005498",
    size: 256,
    element: qrCode.value,
    value: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  });
});

function clickQr() {
  clickCode(qrCode.value.getContext("2d").getImageData(0, 0, 256, 256));
}

function getDisplayDate() {
  return props.date.toLocaleString(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getSerDate() {
  return props.date.toLocaleDateString().split(".").reverse().join("-");
}
</script>

<template>
  <div class="border-4 border-green py-4 mx-4 mb-4">
    <div class="flex flex-col items-center">
      <p class="text-3xl">Einzelticket</p>
      <div>
        <canvas
          class="hover:cursor-zoom-in"
          @click="clickQr"
          ref="qrCode"
        ></canvas>
        <div
          v-if="!props.isValid"
          class="z-1 flex items-center justify-center absolute w-[256px] h-[256px] top-0 bg-black-trans"
        >
          <p class="text-3xl font-bold text-white">ungültig</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center gap-2">
      <p class="text-xl whitespace-nowrap">von {{ props.dep }}</p>
      <font-awesome-icon icon="fa-solid fa-right-long" rotation="90" class="dark:text-gray" />
      <p class="block text-xl whitespace-nowrap">
        nach <a>{{ props.dest }}</a>
      </p>
      <p class="text-xl font-bold whitespace-nowrap">
        Gültig bis: {{ getDisplayDate() }}
      </p>
      <RouterLink
        :to="{
          name: 'Reiseplanung',
          params: {
            time: getSerDate(),
            dep: props.dep,
            dest: props.dest,
          },
        }"
        class="text-xl underline text-blue"
        >Reiseplan</RouterLink
      >
    </div>
  </div>
</template>

<style scoped></style>
