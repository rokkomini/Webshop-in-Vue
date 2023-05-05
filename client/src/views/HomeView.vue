<template>
  <div>
    <Cart :showCart="showCart" :cart="cart" :loading="loadingCart" :error="cartError"/>
    <TopHeader @toggle-cart="toggleCart"/>
    <StartHeroVue />
    <p v-if="loadingProducts">Loading products...</p>
    <p v-if="productError">{{ productError.message }}</p>
    <div v-if="products">
      <ProductList :products="products"/>
      <!-- <ProductList :products="products"/> -->
    </div>
  </div>
</template>

<script setup>
import TopHeader from '../components/Header/TopHeader.vue';
import Cart from '../components/Cart.vue';
import StartHeroVue from '../components/StartHero.vue';
import ProductList from '../components/Product/ProductList.vue';
// import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProductStore } from '../stores/getProducts';
import { useCartStore } from '../stores/cart';


const { products, loadingProducts, productError } = storeToRefs(useProductStore());
// const { loadingProducts } = storeToRefs(useProductStore());
// const { productError } = storeToRefs(useProductStore());
const { cart, cartError, loadingCart } = storeToRefs(useCartStore());
// const { cartError } = storeToRefs(useCartStore());
// const { loadingCart } = storeToRefs(useCartStore());
const { getProducts } = useProductStore();
const { getCart } = useCartStore();

getProducts();
getCart();

</script>

<script>
export default {
  components: {
    TopHeader,
    Cart,
  },
  data() {
    return {
      showCart: false,
    }
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    }
  },
  // mounted() {
  //   this.toggleCart()
  // }
}
</script>