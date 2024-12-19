<!-- fichier test -->
<script>
import { onMounted } from "vue";

import { animateGreen, animatePurple, animateBlue } from "../assets/js/mainGsap";

export default {
  setup() {
    onMounted(() => {
      
      animateGreen(".green");
      animatePurple(".purple");
      animateBlue(".blue");
    });
  },
};
</script>

<template>
  <div>
  <p class="bg-red-700 flex underline">Hello world</p>
  <div class="box gradient-green green"></div>
  <div class="box gradient-purple purple"></div>
  <div class="box gradient-blue blue"></div>
</div>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  margin: 20px;
}

.gradient-green {
  background: linear-gradient(to right, #32cd32, #00ff00);
}

.gradient-purple {
  background: linear-gradient(to right, #8a2be2, #800080);
}

.gradient-blue {
  background: linear-gradient(to right, #0000ff, #1e90ff);
}
</style>
