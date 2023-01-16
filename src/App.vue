<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import { ref, provide } from "vue";

const open = ref(false);
const enableDarkmode = ref(false);
provide("darkMode", { darkMode, enableDarkmode });

function openNav() {
  open.value = !open.value;
}

const currentRoute = () => {
  return useRoute().name;
};

function darkMode() {
  if (enableDarkmode.value) {
    document.querySelector("body").style =
      "background: white; transition: none";
  } else {
    document.querySelector("body").style =
      "background: #181818;transition: none";
  }

  enableDarkmode.value = !enableDarkmode.value;
}
</script>

<template>
  <div :class="enableDarkmode ? 'dark' : ''">
    <div class="sticky top-0 z-10">
      <header class="p-2 bg-white dark:bg-dm-black">
        <RouterLink to="/">
          <img class="hover:cursor-pointer h-20" src="./assets/logo.svg" />
        </RouterLink>
      </header>
      <nav>
        <div class="h-10 bg bg-blue flex justify-start items-center p-2 gap-4">
          <div
            @click="openNav"
            class="flex items-center hover:bg-dark-blue hover:cursor-pointer"
          >
            <font-awesome-icon icon="fa-solid fa-bars" inverse size="xl" />
          </div>
          <p class="text-white text-lg font-bold">{{ currentRoute() }}</p>
        </div>
      </nav>
    </div>
    <div
      :class="
        open
          ? 'z-30 h-full w-1/2 fixed top-30 left-0 bg-dark-blue overflow-hidden duration-500 ease-out'
          : 'z-30 h-full w-0 fixed top-30 left-0 bg-dark-blue overflow-hidden duration-500 ease-out'
      "
    >
      <div class="flex flex-col items-start">
        <RouterLink
          @click="openNav"
          to="/"
          class="text-white flex flex-row w-full p-2"
        >
          <div class="w-full whitespace-nowrap">🗺️ Routenplanung</div>
        </RouterLink>
        <RouterLink
          @click="openNav"
          to="/login"
          class="text-white flex flex-row w-full p-2"
        >
          <div class="w-full whitespace-nowrap">👤 Login</div>
        </RouterLink>
        <RouterLink
          @click="openNav"
          to="/mytickets"
          class="text-white flex flex-row w-full p-2"
        >
          <div class="w-full whitespace-nowrap">🎫 Meine Tickets</div>
        </RouterLink>
        <RouterLink
          @click="openNav"
          to="/tickets"
          class="text-white flex flex-row w-full p-2"
        >
          <div class="w-full whitespace-nowrap">🎫 Tickets</div>
        </RouterLink>
        <RouterLink
          @click="openNav"
          to="/history"
          class="text-white flex flex-row w-full p-2"
        >
          <div class="w-full whitespace-nowrap">📜 Verlauf</div>
        </RouterLink>
        <RouterLink
          @click="openNav"
          to="/favourites"
          class="text-white flex flex-row w-full p-2"
        >
          <div class="w-full whitespace-nowrap">❤️ Favoriten</div>
        </RouterLink>
        <RouterLink
          @click="openNav"
          to="/settings"
          class="text-white flex flex-row w-full p-2"
        >
          <div class="w-full whitespace-nowrap">⚙️ Einstellungen</div>
        </RouterLink>
      </div>
    </div>
    <div
      @click="openNav"
      :class="
        open
          ? 'z-20 h-full w-full fixed top-30 left-0 bg-black opacity-50'
          : 'z-20 h-full w-0 fixed top-30 left-0 bg-black opacity-50'
      "
    ></div>

    <RouterView />
  </div>
</template>

<style scoped></style>
