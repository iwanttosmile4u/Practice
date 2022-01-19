<template>
  <div class="product-list">
    <h1>Tables</h1>
    <my-input v-model="searchText"></my-input>
    <search @search="searchProducts" />
    <ul class="list-default flex">
      <li v-for="(product, index) in products" :key="index">
        <product-card
          :title="product.title"
          :price="product.price"
          :img-url="product.imgUrl"
          :count="product.count"
          @addToBasket="addToBasket(index)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Search from './Search.vue';
import MyInput from './MyInput.vue';
import ProductCard from './ProductCard.vue';
export default {
  name: 'ProductList',
  components: { ProductCard, MyInput, Search },
  data() {
    return {
      searchText: '',
      products: [
        {
          title: 'Table Jim',
          price: 19999,
          imgUrl:
            'https://hoff.ru/upload/iblock/8c9/8c989500ee8639b9e3aa267b1888b4af.jpg',
          count: 30
        },
        {
          title: 'Table Monako',
          price: 17199,
          imgUrl:
            'https://hoff.ru/upload/iblock/af2/af2d37161f217d4f489373be7da4a7a0.jpg',
          count: 20
        },
        {
          title: 'TableMD 768',
          price: 10999,
          imgUrl:
            'https://hoff.ru/upload/iblock/1cc/1ccb33b50e3e9cfa08629bf455e41855.jpg',
          count: 23
        }
      ]
    };
  },
  methods: {
    addToBasket(index) {
      console.log(index);
    },
    searchProducts(searchText) {
      console.log('Загрузить товары: ' + searchText);
    }
  }
};
</script>
