<template>
  <div class="flex">
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
  emits: ['add-to-cart'],
}
</script>

<style lang="scss" scoped>
.flex {
  justify-content: space-between;
}
</style>