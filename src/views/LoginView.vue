<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
const pw = ref("");
const showEyeIcon = ref(false);
const showPassword = ref(false);

function getPwLength() {
  showEyeIcon.value = pw.value.length > 0;
}
</script>

<template>
  <main class="p-4 sm:w-[450px] sm:flex sm:mx-auto">
    <div class="flex flex-col w-full">
      <label>E-Mail Adresse</label>
      <div class="border-2 border-blue rounded p-1">
        <input
          autocomplete="email"
          class="px-2 py-1 w-full focus:outline-none"
          type="email"
        />
      </div>
      <div class="flex flex-col w-full mt-4">
        <label>Passwort</label>
        <div class="flex items-center border-2 border-blue rounded p-1">
          <input
            autocomplete="new-password"
            class="px-2 py-1 w-full focus:outline-none"
            :type="showPassword ? 'text' : 'password'"
            v-model="pw"
            @input="getPwLength"
          />
          <font-awesome-icon
            :class="
              showEyeIcon
                ? 'px-1 hover:cursor-pointer dark:text-gray'
                : 'px-1 hidden dark:text-gray'
            "
            :icon="showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
            @click="showPassword = !showPassword"
          />
        </div>
        <a class="underline text-blue hover:cursor-pointer"
          >Passwort vergessen</a
        >
      </div>

      <button
        class="hover:bg-dark-blue bg-blue text-white py-2 text-2xl font-bold rounded my-4"
      >
        Anmelden
      </button>

      <p class="block whitespace-normal">
        Durch meine Anmeldung genehmige ich die
        <a class="text-blue hover:cursor-pointer hover:underline"
          >Datenschutzrichtlinien</a
        >
        und
        <a class="text-blue hover:cursor-pointer hover:underline"
          >Nutzungsbedingungen</a
        >
        von Vrt.
      </p>
      <div class="flex flex-col my-4 gap-4">
        <div class="flex justify-center items-center">
          <div class="h-0.5 w-full bg-dark-blue mr-4"></div>
          <p class="whitespace-nowrap">Oder anmelden per</p>
          <div class="h-0.5 w-full bg-dark-blue ml-4"></div>
        </div>
        <div class="flex justify-between">
          <div class="flex flex-col items-center">
            <div
              class="hover:cursor-pointer hover:bg-gray border-2 border-black dark:border-blue w-16 h-16 rounded-xl flex items-center justify-center"
            >
              <font-awesome-icon
                icon="fa-brands fa-twitter"
                size="xl"
                inverse
                style="--fa-inverse: #1d9bf0"
              />
            </div>
            <p>Twitter</p>
          </div>
          <div class="flex flex-col items-center">
            <div
              class="hover:cursor-pointer hover:bg-gray border-2 border-black dark:border-blue w-16 h-16 rounded-xl flex items-center justify-center"
            >
              <font-awesome-icon icon="fa-brands fa-google" size="xl" />
            </div>
            <p>Google</p>
          </div>
          <div class="flex flex-col items-center">
            <div
              class="hover:cursor-pointer hover:bg-gray border-2 border-black dark:border-blue w-16 h-16 rounded-xl flex items-center justify-center"
            >
              <font-awesome-icon
                icon="fa-brands fa-facebook"
                size="xl"
                inverse
                style="--fa-inverse: #1877f2"
              />
            </div>
            <p>Facebook</p>
          </div>
          <div class="flex flex-col items-center">
            <div
              class="hover:cursor-pointer hover:bg-gray border-2 border-black dark:border-blue w-16 h-16 rounded-xl flex items-center justify-center"
            >
              <font-awesome-icon
                icon="fa-brands fa-apple"
                size="xl"
                inverse
                style="--fa-inverse: black"
              />
            </div>
            <p>Apple</p>
          </div>
        </div>
      </div>

      <p class="text-lg mt-4 text-center">Noch kein Konto?</p>

      <button
        class="bg-green hover:bg-dark-green py-2 text-2xl rounded my-4 text-center"
      >
        <RouterLink to="/register"> Jetzt Registrieren </RouterLink>
      </button>
    </div>
  </main>
</template>

<style scoped></style>
