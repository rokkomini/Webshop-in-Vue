<template>
    <div v-for="product in products" :key="product.id">
      <ProductCard @add-to-cart="$emit('add-to-cart', product)" :product="product"/>
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
    addToCart(product) {
      console.log('clicked to buy product: ', product);
    },
  }
}

</script>