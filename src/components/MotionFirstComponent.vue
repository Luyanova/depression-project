
<!-- fichier test -->
<script>
import { onMounted } from 'vue';
import { animate } from 'motion';

export default {
  setup() {
    onMounted(() => {
      // Lancer l'animation de scale et d'opacité dès que le DOM est monté
      animate('.box', {
        opacity: [0, 1],        // L'élément passe de 0 à 1 en opacité
        scale: [0.5, 1],        // L'élément passe d'une échelle de 0.5 à 1
        duration: 1,            // Durée de l'animation en secondes
        easing: 'easeInOut'     // Courbe d'accélération/décélération
      });
    });
  }
};
</script>

<template>
  <!-- Élément avec classe .box -->
  <div class="box w-8 h-8 bg-slate-800"></div>
</template>

<style scoped>
/* Assurez-vous que l'élément commence avec opacity: 0 et scale: 0.5 */
.box {
  opacity: 0;        /* Valeur initiale d'opacité */
  transform: scale(0.5); /* Valeur initiale de l'échelle */
  transition: opacity 1s ease-in-out, transform 1s ease-in-out; /* Transition CSS optionnelle */
}
</style>
