<script setup>
import { inject } from "vue";

const props = defineProps({
  change: {
    type: Object,
    required: true,
  },
});

const { revertChange, jumpToChange } = inject("changeTileFunc");

console.log(props.change.val);
function isDifferent() {
  let c = props.change.val.cent;
  if (c.length == 1) {
    c += "0";
  }
  return !(
    props.change.og.cent == c && props.change.og.euro == props.change.val.euro
  );
}

function getFormatPrice() {
  const n = props.change.val.euro + "." + props.change.val.cent;
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(n);
}
</script>

<template>
  <div v-if="isDifferent() == true" class="w-fit border-2 border-blue rounded">
    <div class="flex flex-col m-2">
      <div class="flex justify-between gap-2">
        <p class="font-bold">Variante: {{ props.change.name }}</p>
        <div class="hover:cursor-pointer border-2 border-red-500 rounded items-center px-1" @click="revertChange(props.change)">
          <font-awesome-icon icon="fa-solid fa-rotate-left" />
        </div>
      </div>
      <p>Preisstufe: {{ props.change.level + 1 }}</p>
      <div class="flex items-center gap-2">
        <p>Preis:</p>
        <p>{{ props.change.og.euro + "," + props.change.og.cent + "€" }}</p>
        <font-awesome-icon icon="fa-solid fa-arrow-right"></font-awesome-icon>
        <p>{{ getFormatPrice() }}</p>
      </div>
      <p
        @click="jumpToChange(props.change.active, props.change.level)"
        title="Anzeigen"
        class="text-center underline hover:cursor-pointer text-blue"
      >
        Anzeigen
      </p>
    </div>
  </div>
</template>
