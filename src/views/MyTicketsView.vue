<script setup>
import { ref, provide } from "vue";
import TicketTile from "../components/TicketTile.vue";

const qrCodeClicked = ref(false);
const qrCodeHover = ref(null);

provide("clickCode", { clickCode });

function clickCode(imageData) {
  qrCodeHover.value.getContext("2d").putImageData(imageData, 0, 0);
  qrCodeClicked.value = true;
}

function close() {
  qrCodeClicked.value = false;
}

function getInvalidDate() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  date.setHours(date.getHours() - 2);
  return date;
}

function getValidDate() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(date.getHours() - Math.ceil(Math.random() * 6));
  return date;
}
</script>

<template>
  <div
    @click="close"
    v-show="qrCodeClicked"
    class="hover:cursor-zoom-out flex justify-center z-10 fixed top-31 left-0 w-full h-full bg-black-trans"
  >
    <div class="w-4/5 m-16">
      <canvas
        class="w-full"
        height="256"
        width="256"
        ref="qrCodeHover"
      ></canvas>
    </div>
  </div>
  <main class="p-4">
    <TicketTile
      dep="Porta Nigra"
      dest="Kohlenstraße"
      :date="getValidDate()"
      :is-valid="true"
    ></TicketTile>
    <TicketTile
      dep="Universität"
      dest="Treveris"
      :date="getInvalidDate()"
      :is-valid="false"
    ></TicketTile>
  </main>
</template>

<style scoped></style>
