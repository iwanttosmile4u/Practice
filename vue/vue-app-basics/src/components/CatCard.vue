<template>
  <div class="container">
    <div class="flex">
      <div class="img-wrapper">
        <img v-if="isCatVisible" src="../assets/images/cat.jpg" />
        <p v-else>Cat will return soon</p>
      </div>
      <div class="controls">
        <h1>Cat</h1>
        <button @click="isCatVisible = !isCatVisible">Show / hide</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'catCard',
  data() {
    return {
      isCatVisible: true
    };
  }
};
</script>

<style scoped></style>
