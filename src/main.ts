import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './locales/i18n-config';
import BootstrapVue3 from 'bootstrap-vue-3';

//#region styles
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import './assets/styles/app.scss';
//#endregion styles

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(BootstrapVue3)
  .mount('#app');
