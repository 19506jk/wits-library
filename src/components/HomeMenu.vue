<template>
<div class="home-menu">
  <el-row>
    <el-button type="primary" @click="onAddBook">Add a Book</el-button>
  </el-row>
  <el-row>
    <el-button type="primary" @click="onBookList">Book List</el-button>
  </el-row>
  <el-row>
    <el-button type="primary" @click="onBookManagement">Book Management</el-button>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'HomeMenu',

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-menu {
    text-align: center;
  }
  .el-row {
    margin-bottom: 15px;
  }
</style>
