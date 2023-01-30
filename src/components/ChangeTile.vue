<script setup>
const props = defineProps({
  change: {
    type: Object,
    required: true,
  },
});


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
      <p class="font-bold">Variante: {{ props.change.name }}</p>
      <p>Preisstufe: {{ props.change.level }}</p>
      <div class="flex items-center gap-2">
        <p>Preis:</p>
        <p>{{ props.change.og.euro + "," + props.change.og.cent + "€" }}</p>
        <font-awesome-icon icon="fa-solid fa-arrow-right"></font-awesome-icon>
        <p>{{ getFormatPrice() }}</p>
      </div>
    </div>
  </div>
</template>
