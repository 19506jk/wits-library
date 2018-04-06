import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import AddBook from '@/components/AddBook';
import { getStitchClient } from '../lib/stitch-client';

Vue.use(Router);

const router = new Router({
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

router.beforeEach((to, from, next) => {
  if (!getStitchClient().isAuthenticated() && to.path !== '/') {
    next('/');
  } else {
    next();
  }
});

export default router;
