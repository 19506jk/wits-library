// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import {
  Button,
  Row,
  Form,
  FormItem,
  Input,
  Table,
  TableColumn,
} from 'element-ui';

import App from './App';
import router from './router';
import { initializeStitch } from './lib/stitch-client';

import HomeMenu from './components/HomeMenu';
import BackNavigation from './components/BackNavigation';

Vue.config.productionTip = false;

// initialize Stitch client
initializeStitch().then(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
  });
});

Vue.use(Button);
Vue.use(Row);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);

Vue.component('home-menu', HomeMenu);
Vue.component('back-navigation', BackNavigation);
