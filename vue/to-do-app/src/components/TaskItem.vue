<template>
  <div class="task">
    <!-- <input type="checkbox" id="scales" name="scales" checked />
    <label for="scales">{{ post.body }}</label> -->
    <p>New task: {{ task.body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.task {
  padding: 15px;
  border: 3px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
