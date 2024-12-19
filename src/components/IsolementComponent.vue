<template>
    <div class="flex flex-col w-screen justify-center items-center">
      <p class="text-bleu-999 absolute w-fit font-medium text-3xl">Isolement</p>
      <img ref="image" src="../assets/img/isolementImg1.png" class="w-1/4" alt="">
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  
  gsap.registerPlugin(ScrollTrigger);
  
  const image = ref(null);
  
  onMounted(() => {
    gsap.fromTo(
      image.value, 
      {
        y: "100vh", 
        
      },
      {
        y: "0", 
       
        
        ease: "power1.out",
        scrollTrigger: {
          trigger: image.value, 
          start: "top 80%", 
          end: "center center", 
          scrub: true, 
        },
      }
    );
  });
  </script>
  
  <style scoped>
  
  img {
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
  </style>
  