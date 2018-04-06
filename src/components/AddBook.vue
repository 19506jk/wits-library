<template>
<div class="add-book">
  <div class="navigation">
    <el-button @click="navigateBack">Back</el-button>
  </div>
  <el-form label-width="120px" :label-position="labelPosition">
    <el-form-item label="Book Name">
      <el-input v-model="addBookForm.bookName"></el-input>
    </el-form-item>
    <el-form-item label="Author">
      <el-input v-model="addBookForm.author"></el-input>
    </el-form-item>
    <el-form-item label="ISBN">
      <el-input v-model="addBookForm.isbn"></el-input>
    </el-form-item>
    <el-form-item label="Amazon Link">
      <el-input v-model="addBookForm.amazonLink"></el-input>
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
import { addBook } from '../lib/api-service';

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
      labelPosition: 'left',
      addBookForm: {
        bookName: '',
        isbn: '',
        author: '',
        amazonLink: '',
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
      addBook(this.addBookForm)
        .then(data => console.log(data))
        .catch(ex => console.log(ex));
    },
    navigateBack() {
      this.$router.go(-1);
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

  .navigation {
    margin-bottom: 30px;
    text-align: left;
  }
</style>
