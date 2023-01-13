<script setup>
import { ref } from "vue";
const props = defineProps({
  title: {
    type: String,
  },
});

const open = ref(false);
function click() {
  open.value = !open.value;
}
</script>

<template>
  <div @click="click" class="flex items-center gap-2 hover:cursor-pointer">
    <div>
      <font-awesome-icon
        icon="fa-solid fa-caret-right"
        :rotation="open ? '90' : '0'"
        class="ease-in duration-200"
      />
    </div>

    <p>{{ props.title }}</p>
  </div>
  <div
    :class="
      open
        ? 'max-h-[640px] w-full overflow-hidden duration-500 ease-in'
        : 'max-h-0 w-full overflow-hidden duration-500 ease-out'
    "
  >
    <slot name="content"></slot>
  </div>
</template>

<style></style>
