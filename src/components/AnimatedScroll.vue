<template>
  <div
    ref="animatedElement"
    class="animated-element"
    :class="['animated-element', { 'is-visible': isVisible }, animationClass]"
  >
    <slot></slot>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  props: {
    animationClass: {
      type: String,
      required: false,
      default: "",
    },
  },
  setup() {
    const animatedElement = ref(null);
    const isVisible = ref(false);

    onMounted(() => {
      // Observer Intersection pour animer les éléments
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              isVisible.value = true;
              observer.unobserve(entry.target); // Une fois visible, on arrête l'observation
            }
          });
        },
        { threshold: 0.5 }
      );

      if (animatedElement.value) {
        observer.observe(animatedElement.value);
      }
    });

    return { animatedElement, isVisible };
  },
};
</script>

<style scoped>
.animated-element {
  opacity: 0;
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

/* Animation depuis la gauche */
.animated-element.is-visible.animation-left {
  opacity: 1;
  transform: translateX(0);
}

.animation-left {
  transform: translateX(-100px);
}
</style>
