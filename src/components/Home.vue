<template>
  <div class="home">
    <div class="signed-in" v-if="isAuthenticated">
      <div class="title-message"> Welcome to WITS Library </div>
      <el-button type="primary" v-on:click="logout">Sign Out</el-button>
    </div>
    <div v-else>
      <button v-on:click="signin">Sign in with Google</button>
    </div>
  </div>
</template>

<script>
import { getStitchClient } from '../lib/stitch-client';

export default {
  name: 'Home',
  computed: {
    isAuthenticated() {
      return getStitchClient().isAuthenticated();
    },
  },
  methods: {
    logout() {
      return getStitchClient().logout().then(() => {
        location.reload();
      });
    },
    signin() {
      return getStitchClient().authenticate('google');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
.title-message {
  font-size: 30px;
  margin-bottom: 30px;
}
</style>
