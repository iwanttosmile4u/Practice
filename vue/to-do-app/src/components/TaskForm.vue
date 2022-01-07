<template>
  <div class="form">
    <h3 class="form__title">Create your task:</h3>
    <my-input v-model.trim="task.body" />
    <my-button @click="addTask" :disabled="!task.body.length"
      >Add task</my-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {
        body: ''
      }
    };
  },
  methods: {
    addTask() {
      this.$emit('add', this.task);
      this.task = {
        body: ''
      };
    }
  }
};
</script>

<style lang="scss">
.form {
  padding: 20px;
  &__title {
    color: rgb(145, 143, 143);
    margin-bottom: 20px;
  }
}
</style>
