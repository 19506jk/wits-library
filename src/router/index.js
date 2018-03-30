import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import AddBook from '@/components/AddBook';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/add-book',
      name: 'Add Book',
      component: AddBook,
    },
  ],
});
