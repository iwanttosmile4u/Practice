<template>
  <label>
    <input type="checkbox" :checked="checked" @change="onCheck" />
    {{ body }}
  </label>
</template>

<script>
export default {
  name: 'my-checkbox',
  props: {
    checked: {
      type: Boolean,
      default: () => false
    },
    onCheck: {
      type: Function,
      default: () => {}
    },
    body: {
      type: String
    }
  }
};
</script>

<style lang="scss"></style>
