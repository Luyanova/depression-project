<template>
  <div>
    <!-- Bouton Menu -->
    <button
      ref="menuButton"
      @click="toggleMenu"
      class="fixed text-2xl bg-orange-500 text-white py-1 px-4 ml-8 mt-6 z-50"
    >
      Menu
    </button>

    <!-- Barre de navigation -->
    <div
    class="shadow-2xl"
      :class="['fixed top-0 right-0 flex flex-col justify-end bg-gray-700 h-screen w-1/3 capitalize text-2xl text-white py-8 px-12 transition-transform duration-500 z-40', { 'translate-x-0': active, 'translate-x-full': !active }]"
    >
      <div class="flex flex-col justify-between h-1/2">
        <a href="#" class="flex justify-end hover:underline">Accueil</a>
        <ul class="flex flex-col gap-8">
          <li class="flex justify-end hover:underline"><a href="#">À Propos</a></li>
          <li class="flex justify-end hover:underline"><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      active: false, // État pour savoir si le menu est ouvert
      lastScrollY: 0, // Dernière position du scroll
      hasAnimated: false, // Bloque les animations répétées
    };
  },
  methods: {
    toggleMenu() {
      this.active = !this.active; // Alterne entre ouvert et fermé
    },
    animateMenuButton() {
      if (!this.hasAnimated) {
        this.hasAnimated = true; // Bloque les animations répétées
        gsap.to(this.$refs.menuButton, {
          x: 0, // Amène le bouton à sa position visible
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            this.hasAnimated = false; // Réinitialise après l'animation
          },
        });
      }
    },
    resetMenuButton() {
      if (!this.hasAnimated) {
        this.hasAnimated = true; // Bloque les animations répétées
        gsap.to(this.$refs.menuButton, {
          x: -200, // Retourne le bouton à sa position hors écran
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            this.hasAnimated = false; // Réinitialise après l'animation
          },
        });
      }
    },
  },
  mounted() {
    // Position initiale du bouton hors de l'écran
    gsap.set(this.$refs.menuButton, { x: -200 });

    // Gestion du défilement
    window.addEventListener("scroll", () => {
      // Si on défile vers le bas et que le scroll dépasse 400px, l'animation démarre
      if (window.scrollY > 400 && window.scrollY > this.lastScrollY) {
        this.animateMenuButton();
      }
      // Si on défile vers le haut et que le scroll est en dessous de 400px, le bouton revient à sa position initiale
      else if (window.scrollY < 400 && window.scrollY < this.lastScrollY) {
        this.resetMenuButton();
      }

      // Met à jour la dernière position de scroll
      this.lastScrollY = window.scrollY;
    });
  },
};
</script>

<style>
/* Par défaut, la barre est décalée hors de l'écran */
.translate-x-full {
  transform: translateX(100%);
}

/* Lorsque le menu est actif, il revient à sa place */
.translate-x-0 {
  transform: translateX(0);
}
</style>
