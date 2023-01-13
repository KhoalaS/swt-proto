<script setup>
const props = defineProps({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  dep: {
    type: String,
  },
  dest: {
    type: String,
  },
  level: {
    type: String,
  },
  time: {
    type: String,
  },
  line: {
    type: String,
  },
});

function formatPrice(price) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}
</script>
<template>
  <div>
    <div class="p-2 border-2 border-green rounded-lg">
      <p class="font-bold">
        {{ props.name + ", Preisstufe " + props.level }}
      </p>
      <p>
        <font-awesome-icon icon="fa-solid fa-bus-simple" />
        Linie
        {{ props.line }}
      </p>
      <div class="flex gap-2 items-center">
        <p>{{ props.dep }}</p>
        <font-awesome-icon icon="fa-solid fa-arrow-right"></font-awesome-icon>
        <p>{{ props.dest }}</p>
      </div>

      <div class="flex gap-4">
        <p>{{ props.time }}</p>
      </div>

      <button class="hover:bg-light-blue ease-in duration-100 font-bold border border-blue px-2 py-1 rounded">
        erneut kaufen für {{ formatPrice(props.price) }}
      </button>
    </div>
  </div>
</template>
