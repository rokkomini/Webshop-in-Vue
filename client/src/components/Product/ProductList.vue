<template>
  <div>
    Product List
    <div v-for="product in products" :key="product.id">
      <ProductCard @add-to-cart="onClick()" :product="product"/>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
    }
  },
  components: {
    ProductCard
  },
  methods: {
    onClick() {
      console.log('clicked buy button');
    }
  }
}

</script>