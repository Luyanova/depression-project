import './assets/css/main.css';
import './assets/css/style.css';
import './assets/js/mainGsap';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import gsapPlugin from './plugins/gsapPlugin';


// import router from './router'

const app = createApp(App);

app.use(createPinia());
app.use(gsapPlugin); // Register GSAP plugin
// app.use(router)

app.mount('#app');
