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
  date: {
    type: String,
  },
  valid: {
    type: Object,
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
    <div
      class="p-2 border-2 border-green rounded-lg hover:bg-light-blue hover:cursor-pointer hover:border-dark-blue ease-in duration-75"
    >
      <p class="font-bold">
        {{ props.name + ", Preisstufe " + props.level }}
      </p>
      <div class="flex gap-2 items-center">
        <p>{{ props.dep }}</p>
        <font-awesome-icon
          icon="fa-solid fa-arrow-right"
          class="dark:text-gray"
        ></font-awesome-icon>
        <p>{{ props.dest }}</p>
      </div>

      <div class="flex gap-4">
        <p>gültig ab&nbsp;</p>
        <p>{{ props.valid[0].date }}</p>
        <p>{{ props.valid[0].time }}</p>
      </div>

      <div class="flex gap-4">
        <p>gültig bis</p>
        <p>{{ props.valid[1].date }}</p>
        <p>{{ props.valid[1].time }}</p>
      </div>
      <p class="font-bold">für {{ formatPrice(props.price) }}</p>
    </div>
  </div>
</template>
