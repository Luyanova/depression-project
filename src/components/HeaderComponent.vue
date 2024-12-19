<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import scrollerComponent from "./ScrollerComponent.vue";

// Gestion de l'index de l'image
const currentImageIndex = ref(0);
let intervalId = null;

onMounted(() => {
  // Rotation des images toutes les 3 secondes
  intervalId = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % 3;
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
  <div class="flex w-full h-screen bg-fixed">
    <!-- Images -->
    <img
      src="@/assets/img/imgHeader1.png"
      alt="Banner 1"
      class="w-full h-full object-cover"
      :class="{ active: currentImageIndex === 0 }"
    />
    <img
      src="@/assets/img/imgHeader2.png"
      alt="Banner 2"
      class="w-full h-full object-cover"
      :class="{ active: currentImageIndex === 1 }"
    />
    <img
      src="@/assets/img/imgHeader3.png"
      alt="Banner 3"
      class="w-full h-full object-cover"
      :class="{ active: currentImageIndex === 2 }"
    />

    <div
      class="absolute top-0 left-0 flex flex-col w-screen text-white text-xl justify-end h-full overflow-hidden"
    >
      <nav
        class="flex w-screen justify-between px-8 pt-6 absolute top-0 left-0"
      >
        <a href="#" class="hover:text-orange-500 hover:underline">Accueil</a>
        <div class="flex gap-4">
          <a href="#" class="hover:text-orange-500 hover:underline">À Propos</a>
          <a href="#" class="hover:text-orange-500 hover:underline">Contact</a>
        </div>
      </nav>

      <scrollerComponent />
    </div>
  </div>
</template>

<style>
.object-cover {
  display: none;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.object-cover.active {
  display: block;
  opacity: 1;
}
</style>
