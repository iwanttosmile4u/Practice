<template>
  <div class="root">
    <label>
      Enter your email:
      <input
        type="email"
        :value="email"
        @input="emailInput($event.target.value)"
      />
    </label>
    <label>
      Enter your password:
      <input
        type="password"
        :value="password"
        @input="passwordInput($event.target.value)"
      />
    </label>
    <div class="counter">
      <button @click="increaseValue">+</button>
      <input type="number" :value="counter" />
      <button @click="decreaseValue">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      email: 'example@email.ua',
      password: '12345678',
      counter: 1,
      minValue: 1
    };
  },
  methods: {
    emailInput(value) {
      this.email = value;
    },
    passwordInput(value) {
      this.password = value;
    },
    increaseValue() {
      if (this.counter >= this.minValue) {
        this.counter++;
      }
    },
    decreaseValue() {
      if (this.counter < this.minValue) {
        alert('Counting stopped!');
      } else {
        this.counter--;
      }
    }
  }
};
</script>

<style scoped>
.counter {
  margin-top: 30px;
}
</style>
