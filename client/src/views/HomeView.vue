<template>
  <div>
    <Cart 
      :showCart="showCart" 
      :cart="cart" 
      :error="cartError" 
      :quantity="quantity"
      @remove-one="removeQuantity($event)"
      @add-one="addQuantity($event)"/>
    <TopHeader @toggle-cart="toggleCart" :showCartButton="showCartButton" :quantity="quantity"/>
    <StartHeroVue />
    <p v-if="productError">{{ productError.message }}</p>
    <div v-if="products">
      <!-- <ProductList :products="products" @add-to-cart="addToCart(products)"/> -->
      <ProductList :products="products" @load-cart="getCart()"/>
    </div>
  </div>
</template>

<script setup>
import TopHeader from '../components/Header/TopHeader.vue';
import Cart from '../components/Cart/Cart.vue';
import StartHeroVue from '../components/StartHero.vue';
import ProductList from '../components/Product/ProductList.vue';
// import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProductStore } from '../stores/getProducts';
import { useCartStore } from '../stores/cart';


const { products, productError } = storeToRefs(useProductStore());
const { cart, quantity, cartError } = storeToRefs(useCartStore());
const { getProducts } = useProductStore();
const { getCart, removeQuantity, addQuantity } = useCartStore();

getProducts();
getCart();

console.log('quantity', quantity)
console.log('cart', cart)

</script>

<script>

export default {
  components: {
    TopHeader,
    Cart,
    ProductList
  },
  data() {
    return {
      showCart: false,
      cart: {},
      loadingCart: false,
      showCartButton: true,
    }
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    },
  }
}
</script>