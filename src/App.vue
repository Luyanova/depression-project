<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ComponentHeader from './components/HeaderComponent.vue';
import BurgerMenuComponent from './components/BurgerMenuComponent.vue';
import FirstSectionComponent from './components/FirstSectionComponent.vue';
import HorizontalScrollComponent from './components/HorizontalScrollComponent.vue';
import TextEffectComponent from './components/TextEffectComponent.vue';
import SwitchImageComponent from './components/SwitchImageComponent.vue';
import SelectComponent from './components/SelectComponent.vue';
import BannerComponent from './components/BannerComponent.vue';
import IsolementComponent from './components/IsolementComponent.vue';
import InputComponent from './components/InputComponent.vue';
import NumberComponent from './components/NumberComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import InvisibleComponent from './components/InvisibleComponent.vue';

 



gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to('.first-section', {
    y: -100, 
    ease: "power1.out", 
    scrollTrigger: {
      trigger: '.first-section',
      start: 'top bottom',
      end: 'top top',
      scrub: 1, 
    },
  });
});

</script>

<template>
  <BurgerMenuComponent />
  <div id="section1">
  <ComponentHeader />
</div>
  <FirstSectionComponent class="first-section" />
  
  <!-- corriger la position du scroller et cg=hanger le sens de défilemnt + revoir un peu la mise en page -->
  <HorizontalScrollComponent />

  <div class="h-full pt-96">
  <TextEffectComponent />
</div>


<div class="pt-96" id="section2">
<SwitchImageComponent />
<!-- Pour cette section le switch devrait se faire en cropant l'image pas en la rétrécissant -->
</div>

<div class="pt-96 pb-96 ">
<SelectComponent />
<!-- Pour cette section, la classe active aurait dû être changé en même temps que le défilement d'image, et la position fixe sur le milieu gauche et le terme "active" devrait se placer devant les ":" dans une verison future -->
</div>

<div class="pt-96 overflow-hidden">
<BannerComponent />
</div>


<div class="pb-96" id="section3">
  <IsolementComponent />
</div>

<div class="pt-96">
  <!-- Centrer le défilement des textes pour que la zone de texte reste dans les têtes -->
  <InputComponent />
</div>

<div class="pt-96">
  <InvisibleComponent />
</div>

<div> 
  <NumberComponent />
</div>



<div>
  <FooterComponent />
</div>


<!-- corriger l'utilisation du son -->


  <audio id="sound1" src="./assets/sons/Gens Groupe.mp3"></audio>
  <audio id="sound2" src="./assets/sons/Gens Groupe.mp3"></audio>
  <audio id="sound3" src="./assets/sons/Gens Groupe.mp3"></audio>
  

</template>

<style scoped>

.first-section {
  position: relative;
}
</style>

<script>

document.addEventListener("scroll", () => {

    const triggerOffsets = [
      { id: 'section1', sound: 'sound1' },
      { id: 'section2', sound: 'sound2' }, 
      { id: 'section3', sound: 'sound3' }  
    ];
  
  
    triggerOffsets.forEach(({ id, sound }) => {
      
      const div = document.getElementById(id);

      const audio = document.getElementById(sound);
  
      const rect = div.getBoundingClientRect();
  

      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
    
        if (audio.paused) {
          audio.currentTime = 0; 
          audio.play(); 
        }
      } else {
        
        audio.pause(); 
        audio.currentTime = 0; 
      }
    });
  });
  
</script>
