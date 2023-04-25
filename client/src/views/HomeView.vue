<template>
  <div>
    <StartHeroVue />
    <p v-if="loading">Loading posts...</p>
    <p v-if="error">{{ error.message }}</p>
    <div v-if="products">
      <ProductList :products="products" />
    </div>
  </div>
</template>

<script setup>
import StartHeroVue from '../components/StartHero.vue';
import ProductList from '../components/Product/ProductList.vue';
// import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProductStore } from '../stores/getProducts';


const { products, loading, error } = storeToRefs(useProductStore());
const { getProducts } = useProductStore();

getProducts();
</script>