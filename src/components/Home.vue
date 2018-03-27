<template>
  <div class="hello">
    <div class="signed-in" v-if="isAuthenticated">
      <div> Welcome to WITS Library </div>
      <button v-on:click="logout">Sign Out</button>
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
