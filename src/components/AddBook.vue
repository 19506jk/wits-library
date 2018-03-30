<template>
<div class="add-book">
  <el-form label-width="120px">
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
</div>
</template>

<script>
import { getStitchClient } from '../lib/stitch-client';

export default {
  name: 'AddBook',
  created() {
    getStitchClient().userProfile().then((data) => {
      this.userData = data;
    });
  },
  data() {
    return {
      userData: null,
      addBookForm: {
        bookName: '',
        isbn: '',
        author: '',
      },
    };
  },
  methods: {
    resetForm() {
      this.addBookForm = {
        bookName: '',
        isbn: '',
        author: '',
      };
    },
    submitForm() {

    },
  },
};
</script>

<style scoped>
  .add-book {
    margin-left: 100px;
    margin-right: 100px;
  }
</style>
