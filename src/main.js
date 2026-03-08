import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config'
import router from './router'


// Styles PrimeVue
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
//import tailwind css
import './styles/tailwind.css';

createApp(App)
  .use(router)
  .use(PrimeVue)
  .mount('#app')