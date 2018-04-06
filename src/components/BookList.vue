<template>
  <div class="book-list">
    <back-navigation></back-navigation>
    <el-table class="book-table" :data="books" v-if="books.length > 0">
      <el-table-column
        prop="name"
        label="Name">
      </el-table-column>
      <el-table-column
        prop="author"
        label="Author">
      </el-table-column>
    </el-table>
  </div>
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
      .then((res) => {
        if (res.data) {
          const books = res.data.map(book => ({
            name: book.name,
            author: book.author,
          }));
          this.books = books;
        }
      })
      .catch(ex => console.log(ex));
  },
};
</script>

<style scoped>
  .book-table {
    width: 100%;
  }
</style>
