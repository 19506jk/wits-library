<template>
<div class="add-book">
  <back-navigation v-if="!bookAdded"></back-navigation>
  <el-form label-width="120px" :label-position="labelPosition" v-if="!bookAdded">
    <el-form-item label="Book Name">
      <el-input v-model="addBookForm.bookName"></el-input>
    </el-form-item>
    <el-form-item label="Author">
      <el-input v-model="addBookForm.author"></el-input>
    </el-form-item>
    <el-form-item label="ISBN">
      <el-input v-model="addBookForm.isbn"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">Submit</el-button>
      <el-button @click="resetForm">Reset</el-button>
    </el-form-item>
  </el-form>
  <div v-else>
      <div class="success-text">Book added</div>
      <el-button @click="addNewBook">Add another book</el-button>
      <el-button @click="navigateBack">Back</el-button>
    </div>
</div>
</template>

<script>
import { addBook } from '../lib/api-service';

const form = {
  bookName: '',
  isbn: '',
  author: '',
  owner: null,
  history: [],
};

export default {
  name: 'AddBook',
  data() {
    return {
      labelPosition: 'left',
      addBookForm: {
        bookName: '',
        isbn: '',
        author: '',
        owner: null,
        history: [],
      },
      bookAdded: false,
    };
  },
  methods: {
    resetForm() {
      this.addBookForm = { ...form };
    },
    submitForm() {
      addBook(this.addBookForm)
        .then(() => {
          this.resetForm();
          this.bookAdded = true;
        })
        .catch(ex => console.log(ex));
    },
    addNewBook() {
      this.bookAdded = false;
    },
  },
};
</script>

<style scoped>
  .add-book {
    margin-left: auto;
    margin-right: auto;
    width: 700px;
  }

  .success-text {
    font-size: 28px;
    margin-bottom: 20px;
  }
</style>
