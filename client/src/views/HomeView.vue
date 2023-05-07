<template>
  <div>
    <Cart :showCart="showCart" :cart="cart" :loading="loadingCart" :error="cartError"/>
    <TopHeader @toggle-cart="toggleCart"/>
    <StartHeroVue />
    <p v-if="loadingProducts">Loading products...</p>
    <p v-if="productError">{{ productError.message }}</p>
    <div v-if="products">
      <!-- <ProductList :products="products" @add-to-cart="addToCart(products)"/> -->
      <ProductList :products="products" @load-cart="getCart()"/>
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
const { cart, cartError, loadingCart } = storeToRefs(useCartStore());
const { getProducts } = useProductStore();
const { getCart } = useCartStore();

getProducts();
getCart();

</script>

<script>
// const URL = import.meta.env.VUE_BASE_URL || 'http://localhost:3005';

export default {
  components: {
    TopHeader,
    Cart,
    ProductList
  },
  // provide() {
  //   return {
  //     newAdd: this.newAdd,
  //   }
  // },
  data() {
    return {
      showCart: false,
      cart: {},
      loadingCart: false,
    }
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    },
    async handleAddToCart(productId, optionId) {
      console.log('handle add to cart', productId, optionId)
      // this.cart = {}
      // this.loadingCart = true
      
      // try {
      //   const response = await fetch(`${URL}/add-to-cart`, {
      //     method: 'POST',
      //     // headers: {'Content-Type': 'application/json'},
      //     body: JSON.stringify(product)
      //   })
      //   const data = await response.json()
      //   // this.cart = [...this.cart, data]
      //   console.log('trying to add cart', data)
      // } catch (error) {
      //   this.cartError = error
      // } finally {
      //   this.loadingCart = false
      // }
    },
  }
}
</script>