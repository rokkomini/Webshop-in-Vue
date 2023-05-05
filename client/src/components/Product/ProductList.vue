<template>
  <div class="flex">
    <div v-for="product in products" :key="product.id">
      <!-- <ProductCard :product="product" @add-to-task="$emit('add-to-cart', product.id, selectedOption)"/> -->
      <ProductCard :product="product" @add-to-cart="'add-to-cart'"/>
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
  // data() {
  //   return {
  //     selectedOption: null,
  //   }
  // },
  emits: ['add-to-cart']
  // methods: {
  //   addToCart(product, selectedOption) {
  //     console.log('clicked to buy product: ', product, selectedOption);
  //   },
  // }
}

</script>