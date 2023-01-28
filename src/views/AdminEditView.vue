<script setup>
// selection/dislpay all tickets in flex row
import { ref, watch, reactive } from "vue";
import Ticket from "../assets/Ticket.jpg";
import ChangeTile from "../components/ChangeTile.vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

const single = [
  {
    name: "Erwachsene",
    price: 2.2,
    disclaimer: "",
    prices: [2.2, 3.1, 4.2, 5.2, 6.4, 7.9, 9.2, 10.6, 12.4, 13.3],
  },
  {
    name: "ermäßigt",
    price: 1.4,
    disclaimer: "",
    prices: [1.4, 1.9, 2.7, 3.5, 4.2, 5.1, 6.0, 6.9, 8.0, 8.6],
  },
  {
    name: "Sparkarte",
    price: 1.7,
    disclaimer: "",
    prices: [1.7, 2.4, 3.2, 3.9, 4.8, 6.0, 6.9, 8.0, 9.3, 10.0],
  },
  {
    name: "BahnCard",
    price: 1.7,
    disclaimer: "",
    prices: [1.7, 2.4, 3.2, 3.9, 4.8, 6.0, 6.9, 8.0, 9.3, 10.0],
  },
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
    prices: [6.6, 9.3],
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

const p = selection.value[0].prices[0].toString().split(".");
let c = "00";
if (p.length == 2) {
  if (p[1].length == 1) {
    c = p[1] + "0";
  }
}

const price = reactive({ euro: p[0], cent: c.toString() });
const changes = ref(new Map());

// ---- addVariant Modal only ----
const addName = ref("");
const dupeName = ref(false);

let levels = reactive(new Array(0));
levels.push({ euro: "0", cent: "00" });
const levelAmount = ref(1);
watch(levelAmount, (newVal, oldVal) => {
  const diff = newVal - oldVal;
  if (diff > 0) {
    for (let i = 0; i < diff; i++) {
      levels.push({ euro: "0", cent: "00" });
    }
  } else {
    /*for (let i = 0; i < diff * -1; i++) {
      levels = levels.slice(0, -1);
    }*/
  }
});

// -------------------------------

watch(zoneNo, (newVal, _) => {
  const index = Number.parseInt(newVal) - 1;
  const p = selection.value[activeIndex.value].prices[index]
    .toString()
    .split(".");
  price.euro = p[0];
  if (p.length >= 2) {
    price.cent = p[1].length == 1 ? p[1] + "0" : p[1];
  } else {
    price.cent = "00";
  }
});

function clickTile(index) {
  activeIndex.value = index;
  zoneNo.value = "1";
  const p = selection.value[activeIndex.value].prices[0].toString().split(".");

  price.euro = p[0];
  if (p.length >= 2) {
    price.cent = p[1].length == 1 ? p[1] + "0" : p[1];
  } else {
    price.cent = "00";
  }
}

function addVariant() {
  addOpen.value = true;
}

//probably have to change this to a normal @input
watch(price, (newVal) => {
  const pattern = RegExp("[0-9]*");
  if (!pattern.test(newVal.cent)) {
    price.cent = price.cent.slice(-1);
    return;
  }
  if (!pattern.test(newVal.euro)) {
    price.euro = price.euro.slice(-1);
    return;
  }
  changePrice(newVal);
});

function changePrice(newVal) {
  const index = Number(zoneNo.value) - 1;
  console.log(index);
  if (changes.value.has(`${activeIndex.value}|${index}`)) {
    console.log(changes.value);
    const change = changes.value.get(`${activeIndex.value}|${index}`);
    change.val = {
      euro: newVal.euro.length == 0 ? "0" : newVal.euro,
      cent: newVal.cent.length == 0 ? "00" : newVal.cent,
    };
    changes.value.set(`${activeIndex.value}|${index}`, change);
  } else {
    const ogSplit = selection.value[activeIndex.value].prices[index]
      .toString()
      .split(".");
    console.log(ogSplit);
    const ogEuro = ogSplit[0];
    let ogCent = "";
    if (ogSplit.length == 1) {
      ogCent = "00";
    } else {
      ogCent = ogSplit[1].length == 1 ? ogSplit[1] + "0" : ogSplit[1];
    }
    const change = {
      og: { euro: ogEuro, cent: ogCent },
      val: {
        euro: newVal.euro.length == 0 ? "0" : newVal.euro,
        cent: newVal.cent.length == 0 ? "00" : newVal.cent,
      },
      type: hashName[props.type],
      name: selection.value[activeIndex.value].name,
      level: index + 1,
      active: activeIndex.value,
    };
    changes.value.set(`${activeIndex.value}|${index}`, change);
    console.log(changes.value);
  }
  selection.value[activeIndex.value].prices[index] = Number(
    `${newVal.euro}.${newVal.cent}`
  );
}

function centFocusOut() {
  if (price.cent.length == 1) {
    price.cent = price.cent + "0";
  } else if (price.cent.length == 0) {
    price.cent = "00";
  }
}

function euroFocusOut() {
  if (price.euro.length == 0) {
    price.euro = 0;
  }
}

function checkInput(e, index, type) {
  console.log(e.data);
  console.log(index);

  const pattern = RegExp("^[0-9]$");
  if (!pattern.test(e.data)) {
    if (type == "euro") {
      console.log(levels[index]);
      levels[index].euro = levels[index].euro.toString().replace(e.data, "");
      console.log(levels);
    } else {
      levels[index].cent = levels[index].cent.toString().replace(e.data, "");
    }
  }
}

function isDupeName() {
  let flag = false;
  selection.value.forEach((elem) => {
    if (elem.name == addName.value) {
      console.log("dupe");
      dupeName.value = true;
      flag = true;
    }
  });
  if (!flag) {
    dupeName.value = false;
  }
}
function submitVariant() {
  if (dupeName.value) return;
  
}
function closeEdit() {
  levels = [{ euro: "0", cent: "00" }];
  levelAmount.value = 1;
  dupeName.value = false;
  addName.value = "";

  addOpen.value = false;
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="addOpen"
      @click="closeEdit"
      class="fixed top-0 z-20 w-full h-full bg-black-trans"
    ></div>

    <div
      v-if="addOpen"
      id="modal"
      class="p-2 fixed z-40 top-1/4 left-1/2 h-3/5 w-[300px] ml-[-150px] bg-white border-4 border-blue rounded"
    >
      <div class="flex justify-between">
        <p class="text-lg font-bold">Variante Hinzufügen</p>
        <font-awesome-icon
          @click="closeEdit"
          title="Schließen"
          class="hover:cursor-pointer"
          icon="fa-solid fa-xmark"
        ></font-awesome-icon>
      </div>
      <div class="h-full flex flex-col justify-between">
        <div class="flex flex-col">
          <label>Name</label>
          <div class="border-2 border-blue rounded">
            <input
              @input="isDupeName"
              v-model="addName"
              class="px-2 py-1 w-full focus:outline-none"
            />
          </div>
          <div v-if="dupeName" class="flex my-1 text-blue gap-1">
            ⚠️
            <p class="underline">Variante existiert bereits</p>
          </div>
          <div v-else class="opacity-0 my-1">placeholder</div>

          <label class="">Anzahl Preisstufen: {{ levelAmount }}</label>
          <input
            v-model="levelAmount"
            class="mb-2"
            type="range"
            min="1"
            max="10"
          />
          <label class="text mt-4">Preise</label>

          <div class="overflow-scroll h-[320px]">
            <div
              v-for="(item, i) in levels.slice(0, levelAmount)"
              class="flex w-full items-end justify-between border-b-2 mb-4 pb-1 last:border-none"
            >
              <div class="flex">
                <p>Stufe</p>
                <div class="flex w-6 justify-end">{{ i + 1 }}:</div>
              </div>
              <div class="flex mr-2 items-center">
                <input
                  v-model="levels[i].euro"
                  @input="(e) => checkInput(e, i, 'euro')"
                  type="text"
                  maxlength="2"
                  class="text-center w-8 border-2 border-black rounded focus:outline-none"
                />
                ,
                <input
                  v-model="item.cent"
                  @input="(e) => checkInput(e, i, 'cent')"
                  type="text"
                  maxlength="2"
                  class="text-center w-8 border-2 border-black rounded focus:outline-none"
                />
                €
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between mb-8 mx-1">
          <button
            @click="submitVariant"
            title="Bestätigen"
            class="h-8 bg-blue text-white py-1 px-2 rounded hover:bg-dark-blue"
          >
            Bestätigen
          </button>
          <button
            @click="closeEdit"
            title="Abbrechen"
            class="h-8 py-1 px-2 border-2 border-black rounded hover:bg-light-blue"
          >
            Abbrechen
          </button>
        </div>
      </div>
    </div>
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
    <div class="flex flex-col">
      <p class="text-4xl mb-4 mt-12">Änderungen</p>
      <div class="flex">
        <ChangeTile
          v-for="(k, i) in changes.keys()"
          :change="changes.get(k)"
        ></ChangeTile>
      </div>
    </div>
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
        class="w-[58px] relative left-[280px] top-[264px] text-3xl border-2 border-black rounded"
      >
        <option v-for="(elem, i) in selection[activeIndex].prices.length">
          {{ selection[activeIndex].prices.length - i }}
        </option>
      </select>
      <input
        v-model="price.cent"
        @focusout="centFocusOut"
        maxlength="2"
        type="text"
        class="rounded text-center relative top-[262px] left-[402px] w-[48px] h-[56px] text-3xl bg-white border-2 border-black"
      />
      <input
        v-model="price.euro"
        @focusout="euroFocusOut"
        maxlength="2"
        class="rounded text-center relative top-[262px] left-[296px] w-[48px] h-[56px] text-3xl bg-white border-2 border-black"
      />
    </div>
  </main>
</template>
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}
</style>
