<template>
  <div>
    <task-item v-for="task in tasks" :task="task" :key="task.id" />
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';
export default {
  components: { TaskItem },
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss"></style>
