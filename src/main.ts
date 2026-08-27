import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import '@/style/index.css';
import '@/style/typo.css';

createApp(App).use(router).mount('#app');
