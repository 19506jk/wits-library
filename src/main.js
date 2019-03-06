// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import {
  Aside,
  Button,
  Container,
  Form,
  FormItem,
  Input,
  Main,
  Row,
  Table,
  TableColumn,
  Menu,
  MenuItem,
} from 'element-ui';

import App from './App';
import router from './router';
import { initializeStitchClient } from './lib/stitch-client';

import HomeMenu from './components/HomeMenu';
import NavMenu from './components/NavMenu';

Vue.config.productionTip = false;

initializeStitchClient();

Vue.use(Button);
Vue.use(Row);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Container);
Vue.use(Menu);
Vue.use(MenuItem);

Vue.component('home-menu', HomeMenu);
Vue.component('nav-menu', NavMenu);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
