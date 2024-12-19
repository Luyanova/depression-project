<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const animatedNumber = ref(0);

onMounted(() => {
  gsap.to(animatedNumber, {
    value: 280, 
    duration: 2, 
    scrollTrigger: {
      trigger: ".animated-text", 
      start: "top 85%", 
      end: "top 50%", 
      scrub: true, 
    },
    onUpdate: () => {
   
      animatedNumber.value = Math.round(animatedNumber.value);
    },
  });
});
</script>

<template>
  <div class="flex items-end px-8 text-bleu-999 w-screen h-screen mb-48">
    <p class="text-5xl animated-text">
      Dans le monde 
      <span class="text-9xl">{{ animatedNumber }}</span> 
      Millions de personnes souffrent de 
      <span class="underline">dépressions</span>
    </p>
  </div>
</template>

