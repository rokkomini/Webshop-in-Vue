<template>
  <div class="flex space-between">
      <ProductCard 
        v-for="product in products" 
        :key="product._id" 
        :product="product" 
        @load-cart="$emit('load-cart')"
      />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      default: () => [],
    }
  },
  components: {
    ProductCard
  },
  emits: ['add-to-cart', 'load-cart'],
}
</script>