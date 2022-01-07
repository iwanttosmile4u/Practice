<template>
  <div class="app">
    <Header />
    <task-form @add="addTask" />
    <task-list :tasks="tasks" />
  </div>
</template>

<script>
import Header from './Header.vue';
import TaskForm from './TaskForm.vue';
import TaskList from './TaskList.vue';
export default {
  components: {
    Header,
    TaskForm,
    TaskList
  },
  data() {
    return {
      tasks: [
        { id: 1, body: 'Complited hometasks' },
        { id: 2, body: 'Read book' },
        { id: 3, body: 'Go to the walk' }
      ]
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

body {
  min-width: 1280px;
  background: whitesmoke;
}
</style>
