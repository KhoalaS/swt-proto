<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
const pw = ref("");
const pwRepeat = ref("");
const showEyeIcon = ref(false);
const showPassword = ref(false);

function getPwLength(password) {
  showEyeIcon.value = password.length > 0;
}
</script>

<template>
  <main class="p-4">
    <div class="flex flex-col">
      <div class="flex flex-col w-full justify-center mb-2">
        <label>Anrede</label>
        <select class="w-full text-xl px-2 py-1 border-2 border-blue rounded">
          <option>Herr</option>
          <option>Frau</option>
          <option>Keine Angabe</option>
        </select>
      </div>
      <div class="flex justify-start gap-8 mb-2">
        <div class="flex flex-col w-1/2">
          <label>Vorname</label>
          <div class="flex items-center border-2 border-blue rounded p-1">
            <input
              autocomplete="given-name"
              class="px-2 py-1 w-full focus:outline-none"
              type="text"
            />
          </div>
        </div>

        <div class="flex flex-col w-1/2">
          <label>Nachname </label>
          <div class="flex items-center border-2 border-blue rounded p-1">
            <input
              autocomplete="family-name"
              class="px-2 py-1 w-full focus:outline-none"
              type="text"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col w-full mb-8">
        <label>E-Mail Adresse</label>
        <div class="border-2 border-blue rounded p-1">
          <input
            autocomplete="email"
            class="px-2 py-1 w-full focus:outline-none"
            type="email"
          />
        </div>
      </div>
      <div class="flex flex-col w-full mb-2">
        <label>Passwort</label>
        <div class="flex items-center border-2 border-blue rounded p-1">
          <input
            autocomplete="new-password"
            class="px-2 py-1 w-full focus:outline-none"
            :type="showPassword ? 'text' : 'password'"
            v-model="pw"
            @input="getPwLength(pw)"
          />
          <font-awesome-icon
            :class="showEyeIcon ? 'px-1 hover:cursor-pointer' : 'px-1 hidden'"
            :icon="showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
            @click="showPassword = !showPassword"
          />
        </div>
      </div>
      <div class="flex flex-col w-full mb-4">
        <label>Passwort wiederholen</label>
        <div class="flex items-center border-2 border-blue rounded p-1">
          <input
            autocomplete="new-password"
            class="px-2 py-1 w-full focus:outline-none"
            :type="showPassword ? 'text' : 'password'"
            v-model="pwRepeat"
            @input="getPwLength(pwRepeat)"
          />
          <font-awesome-icon
            :class="showEyeIcon ? 'px-1 hover:cursor-pointer' : 'px-1 hidden'"
            :icon="showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
            @click="showPassword = !showPassword"
          />
        </div>
      </div>

      <RouterLink to="/createprofile">
        <div
          class="hover:bg-dark-blue bg-blue text-white py-2 text-2xl font-bold rounded my-4 text-center"
        >
          Registrieren
        </div>
      </RouterLink>

      <p>
        Indem du auf „Registrieren“ klickst, stimmst du unseren
        <a class="underline text-blue cursor-pointer">Nutzungsbedingungen</a>
        zu. In unserer
        <a class="underline text-blue cursor-pointer">Datenschutzrichtlinie</a>
        erfährst du, wie wir deine Daten erfassen, verwenden und teilen. Unsere
        <a class="underline text-blue cursor-pointer">Cookie-Richtlinie</a>
        erklärt, wie wir Cookies und ähnliche Technologien verwenden.
      </p>
    </div>
  </main>
</template>

<style scoped></style>
