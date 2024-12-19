<template>
    <div class="flex flex-col text-gris-400 py-36 px-32 gap-16">
      <p class="text-5xl indent-12">
        <span ref="highlight" class="highlight">S’il vous plaît</span> les gars concentrez vous sur vos problèmes je n’ai pas besoin d’être 
        <span ref="highlight" class="highlight">aidez</span>, chacun à ses propres problèmes. <span ref="highlight" class="highlight">Moi</span> je m’en sors très bien.
      </p>
      <img
        src="@/assets/img/textEffectImg1.png"
        alt="Banner 1"
        class="w-5/6 h-full hidden":class="{ active: currentImageIndexTextEffect === 0 }"
      />
      <img
        src="@/assets/img/textEffectImg2.png"
        alt="Banner 1"
        class="w-5/6 h-full hidden":class="{ active: currentImageIndexTextEffect === 1 }"
      />
      <img
        src="@/assets/img/textEffectImg3.png"
        alt="Banner 1"
        class="w-5/6 h-full hidden":class="{ active: currentImageIndexTextEffect === 2 }"
      />
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, onUnmounted } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  
  gsap.registerPlugin(ScrollTrigger);
  
  // Références pour GSAP
  const highlights = ref([]);
  
  // Gestion de l'index d'image actif
  const currentImageIndexTextEffect = ref(0);
  let intervalId = null;
  
  onMounted(() => {
    // Texte avec GSAP
    highlights.value = document.querySelectorAll(".highlight");
  
    if (!highlights.value.length) {
      console.error("Aucun mot mis en surbrillance trouvé. Vérifiez votre template.");
      return;
    }
  
    highlights.value.forEach((el) => {
      gsap.to(el, {
        color: "#54bdeb",
        scrollTrigger: {
          trigger: el,
          start: "top 45%",
          end: "top 15%",
          scrub: true,
        },
      });
    });
  
    // Animation cyclique des images
    intervalId = setInterval(() => {
      currentImageIndexTextEffect.value = (currentImageIndexTextEffect.value + 1) % 3;
    }, 3000);
  });
  
  onUnmounted(() => {
    if (intervalId) clearInterval(intervalId);
  });
  </script>
  
  <style>
.active {
    display: block;
}

  .highlight {
    transition: color 0.3s ease; /* Effet de transition par défaut */
  }
  </style>
  