<template>
  <div class="product-card">
    <img src="imgUrl" width="300px" />
    <div class="product-card-info">
      <h2>{{ title }}</h2>
      <p class="price">{{ price }}</p>
      <p class="count">Avilable: {{ count }}</p>
      <button type="button" @click="addToBsket">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    title: {
      type: String,
      validator(value) {
        return value.length < 20;
      }
    },
    price: {
      type: Number,
      required: true
    },
    imgUrl: String,
    count: {
      type: Number,
      default: 0
    }
  },
  methods: {
    addToBsket() {
      this.$emit('addToBasket');
    }
  }
};
</script>
