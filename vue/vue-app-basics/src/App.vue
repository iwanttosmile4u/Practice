<template>
  <div id="app">
    <my-component></my-component>
    <user-card></user-card>
    <search-card></search-card>
    <cat-card></cat-card>
    <product-list></product-list>
  </div>
</template>

<script>
import MyComponent from './components/MyComponent.vue';
import UserCard from './components/UserCard.vue';
import SearchCard from './components/SearchCard.vue';
import CatCard from './components/CatCard.vue';
import ProductList from './components/ProductList.vue';
export default {
  name: 'App',
  components: { MyComponent, UserCard, SearchCard, CatCard, ProductList }
};
</script>

<style></style>
