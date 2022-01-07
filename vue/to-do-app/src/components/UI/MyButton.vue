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

<style lang="scss">
.btn {
  padding: 15px 20px;
  background: rgb(22, 211, 201);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background: whitesmoke;
    color: rgb(22, 211, 201);
    border: 2px solid rgb(22, 211, 201);
  }
}
</style>
