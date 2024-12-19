<template>
  <div class="scroll-container bg-white h-screen">
    <div class="flex w-full py-36 px-8 gap-5 h-screen">
      <!-- Section gauche -->
      <AnimatedScroll animationClass="animation-left">
        <div class="flex flex-col w-1/2 gap-16 pb-8" id="leftDivFirstSection">
          <h1 class="text-7xl text-bleu-999 font-semibold">
            <span>Lueur</span><br />
            <span>vacillante</span>
          </h1>
          <p class="indent-12 text-xl">
            Parfois, le moral flanche, les journées semblent plus longues et les couleurs s'estompent doucement. Il arrive à tout le monde de se sentir dépassé, vidé ou simplement perdu sans trop savoir pourquoi.
          </p>
        </div>
      </AnimatedScroll>

      <!-- Section droite -->
    
        <div class="flex flex-col w-full" id="rightDivFirstSection">
          <div class="flex w-full h-full relative">
            <!-- Images -->
            <img
              src="@/assets/img/firstSectionImg1.png"
              alt="Banner 1"
              class="absolute w-full h-full object-cover"
              :class="{ active: currentImageIndexFirstSection === 0 }"
            />
            <img
              src="@/assets/img/firstSectionImg2.png"
              alt="Banner 2"
              class="absolute w-full h-full object-cover"
              :class="{ active: currentImageIndexFirstSection === 1 }"
            />
            <img
              src="@/assets/img/firstSectionImg3.png"
              alt="Banner 3"
              class="absolute w-full h-full object-cover"
              :class="{ active: currentImageIndexFirstSection === 2 }"
            />
          </div>
        </div>

    </div>
  </div>
</template>

<script setup>
import AnimatedScroll from "./AnimatedScroll.vue";
import { ref, onMounted, onUnmounted } from "vue";

const currentImageIndexFirstSection = ref(0);
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentImageIndexFirstSection.value =
      (currentImageIndexFirstSection.value + 1) % 3;
  }, 3000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style>
.scroll-container {
  overflow: hidden;
}
</style>
