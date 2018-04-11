<template>
  <el-menu>
    <el-menu-item
      v-for="(item, index) in navItems"
      :index="index.toString()"
      :key="index"
      @click="item.action">
      <span>{{ item.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
  methods: {
    onAddBook() {
      this.$router.push('/add-book');
    },
    onBookList() {
      this.$router.push('/book-list');
    },
    onBookManagement() {
      this.$router.push('/book-management');
    },
  },
  data() {
    return {
      navItems: [
        {
          title: 'Add a Book',
          action: this.onAddBook,
        },
        {
          title: 'Book List',
          action: this.onBookList,
        },
        {
          title: 'Book Management',
          action: this.onBookManagement,
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
