<template>
  <el-table class="book-table" :data="books">
    <el-table-column
      prop="name"
      label="Name">
    </el-table-column>
    <el-table-column
      prop="author"
      label="Author">
    </el-table-column>
  </el-table>
</template>

<script>
import { getBooks } from '../lib/api-service';

export default {
  data() {
    return {
      books: [],
    };
  },
  created() {
    getBooks()
      .then(data => console.log(data))
      .catch(ex => console.log(ex));
  },
};
</script>

<style scoped>
  .book-table {
    width: 100%;
  }
</style>
