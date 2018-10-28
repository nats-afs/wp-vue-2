import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueFire from 'vuefire';
import App from './App.vue';

import VueLazyLoad from 'vue-lazyload'
import VueTouch from 'vue-touch'

// import ErrorPage from 'vue-error-page'
import { store } from './store/store';
import { routes } from './routes';

Vue.use(VueRouter);
// Vue.use(VueFire)

Vue.use(VueLazyLoad)
Vue.use(VueTouch, { name: 'v-touch' })

const router = new VueRouter({
  mode: 'history',
  routes
});

const app = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
