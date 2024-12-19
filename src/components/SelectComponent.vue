<template>
    <div class="flex flex-col justify-center items-center text-bleu-999 text-5xl">
      
      <div class="sticky top-1/2 left-1/2 z-10">
        <div class="flex gap-2 items-center justify-center">
          <p class="text-bleu-999">JE SUIS : </p>
          <ul class="text-gris-150">
            <li class="active">Triste</li>
            <li>Overbooké</li>
            <li>Seul</li>
            <li>Apatique</li>
          </ul>
        </div>
      </div>
  
      <div class="flex flex-col justify-center items-center">
        <img src="@/assets/img/selectImg1.png" alt="Image 1" class="my-2">
        <img src="@/assets/img/selectImg2.png" alt="Image 2" class="my-2">
        <img src="@/assets/img/selectImg3.png" alt="Image 3" class="my-2">
        <img src="@/assets/img/selectImg4.png" alt="Image 4" class="my-2">
      </div>
    </div>
  </template>
  
  <style>
    .active {
      color: #54bdeb;
    }
  </style>
  
  <script>
    import { gsap } from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
  
    gsap.registerPlugin(ScrollTrigger);
  
    export default {
      mounted() {
        const listItems = document.querySelectorAll("ul.text-gris-150 li");
        
        ScrollTrigger.create({
          trigger: "ul.text-gris-150",
          start: "top center", 
          end: "bottom center", 
          scrub: true, 
          markers: false, 
          onUpdate: ({ progress }) => {
          
            const activeIndex = Math.floor(progress * (listItems.length - 1));
            listItems.forEach((item, index) => {
              if (index === activeIndex) {
                item.classList.add("active");
              } else {
                item.classList.remove("active");
              }
            });
          },
        });
      }
    }
  </script>
  