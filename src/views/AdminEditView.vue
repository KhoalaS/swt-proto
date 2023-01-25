<script setup>
// selection/dislpay all tickets in flex row
import { ref, watch } from "vue";
import Ticket from "../assets/Ticket.jpg";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

const single = [
  { name: "Erwachsene", price: 2.2, disclaimer: "" },
  { name: "ermäßigt", price: 1.4, disclaimer: "" },
  { name: "Sparkarte", price: 1.7, disclaimer: "" },
  { name: "BahnCard", price: 1.7, disclaimer: "" },
];
const day = [
  { name: "Single", price: 6.1, disclaimer: "" },
  { name: "Gruppe", price: 11.6, disclaimer: "" },
];
const mobile = [
  { name: "Woche", price: 20.2, disclaimer: "" },
  { name: "Monat", price: 70.8, disclaimer: "" },
  { name: "Jahr", price: 59, disclaimer: "pro Monat" },
  { name: "Jobticket", price: 66, disclaimer: "pro Monat" },
];
const region = [
  {
    name: "(/+ Lux)",
    price: 25,
    disclaimer: "",
  },
];

const extra = [
  {
    name: "4-FahrtenTicket",
    price: 6.6,
    disclaimer: "",
  },
];

const hashMap = {
  single: single,
  day: day,
  mobile: mobile,
  region: region,
};

const hashName = {
  single: "EinzelTicket",
  day: "TagesTicket",
  mobile: "MobilTicket",
  region: "Rheinland-Pfalz-Ticket",
};


const selection = ref(hashMap[props.type]);
if (props.type == "single") {
  selection.value = single.concat(extra);
}

const activeIndex = ref(0);

const addOpen = ref(false);
const zoneNo = ref("1");
const euro = ref("2");
const cent = ref("20");

watch(zoneNo, (newVal, _) => {
  console.log(newVal);
  const index = Number.parseInt(newVal) - 1;
  const p = hashPrices[props.type][index].split(",");
  euro.value = p[0];
  cent.value = p[1];
});

function clickTile(index) {
  activeIndex.value = index;
}

function addVariant() {
  addOpen.value = true;
}

function centInput() {
  const pattern = RegExp("[0-9]+");
  if (!pattern.test(cent.value)) {
    cent.value = cent.value.slice(0, -1);
  }
  changePrice();
}

function euroInput() {
  const pattern = RegExp("[0-9]+");
  if (!pattern.test(cent.value)) {
    cent.value = cent.value.slice(0, -1);
  }
  changePrice();
}

function changePrice() {
  const index = Number(zoneNo.value) - 1;
  hashPrices[props.type][index] = `${euro.value},${cent.value}`;
}
</script>
<template>
  <Teleport to="body">
    <div
      v-if="addOpen"
      id="modal"
      class="fixed z-40 top-1/4 left-1/2 h-1/2 w-[300px] ml-[150px] bg-black"
    ></div>
  </Teleport>
  <main class="p-4 h-full">
    <p class="text-4xl mb-4">Variante</p>
    <div class="flex gap-2 flex-wrap">
      <div
        @click="clickTile(i)"
        v-for="(item, i) in selection"
        :class="
          activeIndex == i
            ? 'border-2 border-blue rounded py-1 px-2 hover:cursor-pointer text-white bg-blue'
            : 'border-2 border-blue rounded py-1 px-2 hover:cursor-pointer'
        "
      >
        {{ hashName[props.type] + " " + item.name }}
      </div>
      <div
        @click="addVariant"
        class="flex bg-green hover:bg-dark-green rounded px-4 py-1 items-center hover:cursor-pointer"
        title="Hinzufügen"
      >
        <font-awesome-icon
          class="m-auto"
          icon="fa-solid fa-plus"
          inverse
          size="xl"
        />
      </div>
    </div>
    <div class="text-4xl mb-4 mt-12">Änderungen</div>
    <div
      class="border-2 h-[450px] w-[600px] border-black mx-auto my-4 rounded bg-ticket bg-contain"
    >
      <div
        type="text"
        class="relative left-[72px] top-[64px] text-4xl w-fit bg-white px-1 rounded border-2 border-black"
      >
        {{ hashName[props.type] }}
      </div>
      <div
        type="text"
        class="relative left-[72px] top-[72px] text-4xl w-fit bg-white px-1 rounded border-2 border-black"
      >
        {{ selection[activeIndex].name }}
      </div>
      <select
        v-model="zoneNo"
        class="relative left-[280px] top-[264px] text-3xl border-2 border-black rounded"
      >
        <option
          v-for="(elem, i) in new Array(10).fill(0).map((item, i) => {
            i + 1;
          })"
        >
          {{ i + 1 }}
        </option>
      </select>
      <input
        v-model="cent"
        maxlength="2"
        @input="centInput"
        class="text-center relative top-[262px] left-[402px] w-[48px] h-[56px] text-3xl bg-white border-2 border-black"
      />
      <input
        v-model="euro"
        maxlength="2"
        @input="euroInput"
        class="text-center relative top-[262px] left-[296px] w-[48px] h-[56px] text-3xl bg-white border-2 border-black"
      />
    </div>
  </main>
</template>
