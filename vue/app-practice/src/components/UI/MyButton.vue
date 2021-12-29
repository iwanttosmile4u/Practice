<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
};
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: teal;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}
</style>
