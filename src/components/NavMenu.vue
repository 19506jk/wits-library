<template>
  <el-menu>
    <el-menu-item
      v-for="(item, index) in navItems"
      :index="index.toString()"
      :key="index"
      @click="item.action">
      <span>{{ item.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { getStitchClient } from '../lib/stitch-client';

export default {
  name: 'NavMenu',
  mounted() {
    getStitchClient().handleLoginResult()
      .then(() => {
        this.isLoggedIn = true;
      })
      .catch(() => {});
  },
  methods: {
    onAddBook() {
      this.$router.push('/add-book');
    },
    onBookList() {
      this.$router.push('/book-list');
    },
    onBookManagement() {
      this.$router.push('/book-management');
    },
    onSignin() {
      return getStitchClient().login();
    },
    onLogout() {
      return getStitchClient().logout().then(() => {
        location.reload();
      });
    },
  },
  computed: {
    navItems() {
      if (this.isLoggedIn) {
        return this.signedinItems;
      }
      return this.guestItems;
    },
  },
  data() {
    return {
      isLoggedIn: false,
      signedinItems: [
        {
          title: 'Add a Book',
          action: this.onAddBook,
        },
        {
          title: 'Book List',
          action: this.onBookList,
        },
        {
          title: 'Book Management',
          action: this.onBookManagement,
        },
        {
          title: 'Log Out',
          action: this.onLogout,
        },
      ],
      guestItems: [
        {
          title: 'Sign In',
          action: this.onSignin,
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
