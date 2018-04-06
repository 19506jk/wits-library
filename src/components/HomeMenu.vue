<template>
<div class="home-menu">
  <el-row>
    <el-button type="primary" @click="onAddBook">Add a Book</el-button>
  </el-row>
  <el-row>
    <el-button type="primary" @click="onBookList">Book List</el-button>
  </el-row>
  <el-row>
    <el-button type="primary">Checkout a Book</el-button>
  </el-row>
  <el-row>
    <el-button type="primary">Return a Book</el-button>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'HomeMenu',
  methods: {
    onAddBook() {
      this.$router.push('/add-book');
    },
    onBookList() {
      this.$router.push('/book-list');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-row {
    margin-bottom: 15px;
  }
</style>
