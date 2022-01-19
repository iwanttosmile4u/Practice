<template>
  <div class="search flex">
    <input type="text" class="search" v-model="searchText" />
    <button type="button" @click="$emit('search', searchText)">Find</button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchText: ''
    };
  }
};
</script>

<style scoped></style>
