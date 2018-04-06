<template>
  <div class="navigation">
    <el-button @click="navigateBack">Back</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    navigateBack() {
      this.$router.go(-1);
    },
  },
}
</script>

<style scoped>
  .navigation {
    margin-bottom: 30px;
    text-align: left;
  }
</style>
