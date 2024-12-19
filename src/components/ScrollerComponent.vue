<template>
<div class="scroller-container flex relative w-full">
        <ul
          class="scroller flex py-1 text-2xl gap-2 whitespace-nowrap will-change-transform"
          ref="scroller"
        >
          <li>Fatigue</li>
          <li>-</li>
          <li>Anxiété</li>
          <li>-</li>
          <li>Fatigue</li>
          <li>-</li>
          <li>Vide</li>
          <li>-</li>
          <li>Estime de soi</li>
          <li>-</li>
        </ul>
      </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const scroller = ref(null);

    onMounted(() => {
      const list = scroller.value;
      const listWidth = list.scrollWidth;

      
      const numberOfClones = Math.ceil(window.innerWidth / listWidth) + 1;
      for (let i = 0; i < numberOfClones; i++) {
        const clone = list.cloneNode(true);
        list.appendChild(clone);
      }

      let offset = 0;

      function animate() {
        offset -= 0.3; 
        if (Math.abs(offset) >= listWidth) {
          offset = 0;
        }
        list.style.transform = `translateX(${offset}px)`;
        requestAnimationFrame(animate);
      }

      animate();
    });

    return { scroller };
  },
};
</script>

<style>
.scroller-container {
  height: auto;
}

.scroller {
  display: flex;
  align-items: center;

  white-space: nowrap;
}

.scroller li {
  display: inline-block;
}


</style>