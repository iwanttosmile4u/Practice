<template>
  <div class="input">
    <input
      :value="modelValue"
      @input="updateInput"
      type="text"
      placeholder="Write what do you want to do..."
      class="input__content"
    />
  </div>
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
};
</script>

<style lang="scss">
.input {
  width: 50%;
  &__content {
    padding: 15px 20px;
    border: 2px solid rgb(22, 211, 201);
    border-radius: 8px;
    width: 100%;

    &::placeholder {
      color: slategray;
      font-style: italic;
      font-size: 14px;
    }
  }
}
</style>
