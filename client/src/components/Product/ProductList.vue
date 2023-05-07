<template>
  <div class="flex">
    <!-- <div v-for="product in products" :key="product.id"> -->
      <!-- <ProductCard :product="product" @add-to-cart="addToCart"/> -->
      <!-- <ProductCard :product="product"  @add-to-cart="addToCart"/> -->
      <!-- <ProductCard v-for="product in products" :key="product._id" :product="product"  @add-to-cart="$emit('add-to-cart', $event)"/> -->
      <ProductCard v-for="product in products" :key="product._id" :product="product" @load-cart="$emit('load-cart')"/>
    <!-- </div> -->
    <p v-for="product in products" :key="product.id">{{ product._id }}</p>
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
  // data() {
  //   return {
  //     selectedOption: null,
  //     productId: null,
  //   }
  // },
  emits: ['add-to-cart'],
  // methods: {
  //   addToCart(event) {
  //     // console.log('prod list, clicked to buy product: ', event)
  //     this.$emit('add-to-cart ', event);
  //   },
  // },
  // computed: {
  //   addToCart(value) {
  //     console.log('productlist, clicked to buy product: ', value);
  //     return this.$emit('add-to-cart', value);
  //   }
  // }
}

</script>