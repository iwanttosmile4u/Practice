<template>
  <div>
    <h2>I will find you!</h2>
    <input type="text" @input="textInput($event.target.value)" />
    <p>
      Names: {{ names.length }}, coincidences: {{ getFilteredNames.length }}
    </p>
    <ul>
      <li v-for="(name, index) in names" :key="index">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'searchCard',
  data() {
    return {
      inputText: '',
      names: ['Piter', 'Tom', 'John', 'Robert', 'Ann', 'Kate']
    };
  },
  methods: {
    textInput(value) {
      this.inputText = value;
    }
  },
  computed: {
    getFilteredNames() {
      return this.names.filter((name) =>
        name.toLowerCase().includes(this.inputText.toLowerCase())
      );
    }
  }
};
</script>

<style scoped></style>
