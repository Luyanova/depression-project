<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Gestion de l'index de l'image
const currentImageIndexInput = ref(0);
const wordsList = ref([]); // Liste pour stocker les mots saisis
const newWord = ref(""); // Nouveau mot en cours de saisie
let intervalId = null;

// Fonction pour ajouter un mot
const addWord = () => {
  if (newWord.value.trim() !== "") {
    wordsList.value.push(newWord.value.trim()); // Ajout du mot dans la liste
    newWord.value = ""; // Réinitialisation du champ d'entrée
  }
};

onMounted(() => {
  // Rotation des images toutes les 3 secondes
  intervalId = setInterval(() => {
    currentImageIndexInput.value = (currentImageIndexInput.value + 1) % 3;
  }, 3000);
});

onUnmounted(() => {
  // Nettoyage de l'intervalle
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<template>
  <div class="flex flex-col w-full h-screen bg-fixed items-center">
    <!-- Champ d'entrée pour les mots -->
    <div class="mb-8 w-1/2 flex gap-4">
      <input
        type="text"
        v-model="newWord"
        placeholder="Entrez un mot"
        class="w-full p-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        @keyup.enter="addWord"
      />
      <button
        @click="addWord"
        class="px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Ajouter
      </button>
    </div>

    <!-- Images -->
    <div class="relative flex justify-center w-full h-full pt-24">
      <div
        class="mt-4 text-lg text-gray-700 flex gap-4 bg-white absolute left-1/2 top-1/4 max-w-72 flex-wrap p-2"
      >
        <!-- Liste des mots saisis -->

        <p v-for="(word, index) in wordsList" :key="index">{{ word }}</p>
      </div>

      <img
        src="@/assets/img/inputImg1.png"
        alt="Banner 1"
        class="hidden"
        :class="{ active: currentImageIndexInput === 0 }"
      />
      <img
        src="@/assets/img/inputImg2.png"
        alt="Banner 2"
        class="hidden"
        :class="{ active: currentImageIndexInput === 1 }"
      />
      <img
        src="@/assets/img/inputImg3.png"
        alt="Banner 3"
        class="hidden"
        :class="{ active: currentImageIndexInput === 2 }"
      />
    </div>
  </div>
</template>

<style>
.active {
  display: block;
  opacity: 1;
}
</style>
