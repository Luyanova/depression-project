<template>
  <div class="wrapper flex overflow-hidden pt-80">
    <div ref="scroller" class="horizontalScroller flex space-x-8">
      <img src="../assets/img/horizontalImg1.png" class="" alt="" />
      <div>
        <p class="text-2xl font-medium text-gris-600">Une lueur qui se perd.</p>
      </div>
      <img src="../assets/img/horizontalImg2.png" class="" alt="" />
      <div>
        <p class="text-2xl font-medium text-gris-600">
          Des pensées sont floues.
        </p>
      </div>
      <img src="../assets/img/horizontalImg3.png" class="" alt="" />
      <div>
        <p class="text-2xl font-medium text-gris-600">Esprit fragmenté.</p>
      </div>
      <img src="../assets/img/horizontalImg4.png" class="" alt="" />
      <img src="../assets/img/horizontalImg5.png" class="" alt="" />
      <div><p class="text-2xl font-medium text-gris-600">Nostalgie</p></div>
      <img src="../assets/img/horizontalImg6.png" class="" alt="" />
      <img src="../assets/img/horizontalImg7.png" class="" alt="" />
      <div><p class="text-2xl font-medium text-gris-600">Le vide.</p></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scroller = ref(null);

onMounted(() => {
  const horizontalScroller = scroller.value;

  if (!horizontalScroller) {
    console.error("L'élément scroller est null. Vérifiez votre template.");
    return;
  }

  const totalWidth = horizontalScroller.scrollWidth;

  gsap.to(horizontalScroller, {
    x: () => window.innerWidth - totalWidth,
    ease: "none",
    scrollTrigger: {
      trigger: horizontalScroller,
      start: "top 80%",
      end: () => `+=${totalWidth}`,
      pin: true,
      scrub: 1,
      pinSpacing: true,
    },
  });
});
</script>

<style>
.wrapper {
  position: relative;
}

.horizontalScroller {
  display: flex;
  height: 100%;
  width: max-content;
}
</style>
