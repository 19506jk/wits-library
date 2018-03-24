<template>
  <div class="hello">
    <button v-on:click="signIn">Sign in with Google</button>
  </div>
</template>

<script>
import { StitchClientFactory } from 'mongodb-stitch';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  created() {
    StitchClientFactory.create('wit-lib-ixdpn').then((client) => {
      this.stitchClient = client;
    });
  },
  methods: {
    signIn() {
      this.stitchClient.authenticate('google', 'http://localhost:8081/');
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
