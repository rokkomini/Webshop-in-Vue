<template>
  <div class="flex space-between">
      <ProductCard 
        v-for="product in products" 
        :key="product._id" 
        :product="product" 
        @add-to-cart="this.$emit('add-to-cart', $event)"
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
  emits: ['add-to-cart'],
}
</script>