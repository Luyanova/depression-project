<template>
    <div class="relative h-screen">
      <img
        src="@/assets/img/switchImg2.png"
        alt="Banner 2"
        class="absolute w-screen h-screen"
      />
      <img
        src="@/assets/img/switchImg1.png"
        alt="Banner 1"
        class="absolute w-screen h-screen"
        ref="switchImg" 
      />
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  
  gsap.registerPlugin(ScrollTrigger);
  
  const switchImg = ref(null);
  
  onMounted(() => {
    gsap.to(switchImg.value, {
      width: "0vw", 
      scrollTrigger: {
        trigger: switchImg.value, 
        start: "top center",
        end: "bottom center", 
        scrub: true, 
      },
    });
  });
  </script>
  
  <style>
  img {
    transition: width 0.5s ease-out;
  }
  </style>
  