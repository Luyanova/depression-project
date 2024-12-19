<template>
  <div class="scroller-container flex relative w-full">
    <ul
      class="scroller flex py-1 text-9xl gap-8 whitespace-nowrap font-medium will-change-transform text-white mix-blend-difference"
      ref="scroller"
    >
      <li>TRISTESSE</li>
      <li>PERSISTENTE</li>
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
