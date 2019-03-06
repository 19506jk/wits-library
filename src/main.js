// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import App from './App';
import router from './router';
import { initializeStitchClient } from './lib/stitch-client';

import HomeMenu from './components/HomeMenu';
import NavMenu from './components/NavMenu';

Vue.config.productionTip = false;

initializeStitchClient();

Vue.use(ElementUI);

Vue.component('home-menu', HomeMenu);
Vue.component('nav-menu', NavMenu);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
});
