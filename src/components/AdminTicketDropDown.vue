<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  versions: {
    type: Array[Object],
    required: true,
  },
  extra: {
    type: Array[Object],
    required: false,
  },
});

const open = ref(false);

function click() {
  open.value = !open.value;
}

function formatPrice(price) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

function getFullName(prefix) {
  return props.title + " " + prefix;
}
</script>

<template>
  <main class="">
    <div @click="click" class="flex items-center gap-2 hover:cursor-pointer">
      <div>
        <font-awesome-icon
          icon="fa-solid fa-caret-right"
          :rotation="open ? '90' : '0'"
          class="ease-in duration-200 dark:text-gray"
        />
      </div>

      <p class="text-2xl">{{ props.title }}s</p>
    </div>
    <div
      :class="
        open
          ? 'max-h-[640px] w-full overflow-hidden duration-500 ease-in'
          : 'max-h-0 w-full overflow-hidden duration-500 ease-out'
      "
    >
      <div class="flex flex-col gap-1">
        <div v-for="(type, i) in props.versions">
          <RouterLink
            :to="{
              name: 'Ticket Buchen',
              params: { name: getFullName(type.name), price: type.price },
            }"
          >
            <div
              class="p-2 border-2 border-green rounded-lg hover:bg-light-blue hover:cursor-pointer hover:border-dark-blue ease-in duration-75"
            >
              <p>
                {{ props.title + " " + type.name }}
              </p>
              <p>
                ab {{ formatPrice(type.price) }}
                {{ type.disclaimer }}
              </p>
            </div>
          </RouterLink>
        </div>

        <div
          v-if="extra"
          v-for="(type, i) in props.extra"
          class="p-2 border-2 border-green rounded-lg hover:bg-light-blue hover:cursor-pointer hover:border-dark-blue ease-in duration-75"
        >
          <RouterLink
            :to="{
              name: 'Ticket Buchen',
              params: { name: type.name, price: type.price },
            }"
          >
            <p>
              {{ type.name }}
            </p>
            <p>ab {{ formatPrice(type.price) }}</p>
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style scopde>
p {
  white-space: nowrap;
}
</style>
