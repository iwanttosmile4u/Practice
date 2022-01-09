<template>
  <div class="app">
    <Header />
    <task-form @add="addTask" />
    <task-list :tasks="tasks" :updateCheckbox="updateCheckbox" />
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
        { id: 11, body: 'Complited hometasks', checked: true },
        { id: 223, body: 'Read book', checked: true },
        { id: 34455, body: 'Go to the walk', checked: false }
      ]
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
    },
    updateCheckbox(id) {
      const index = this.tasks.findIndex((task) => task.id === id);
      this.tasks[index].checked = !this.tasks[index].checked;
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
