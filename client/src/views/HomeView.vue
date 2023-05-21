<template>
  <div>
    <div id="overlay" @click="closeCart"></div>
    <CartDrawer 
      :showCart="showCart" 
      :cart="cart" 
      :error="cartError" 
      :quantity="quantity"
      @remove-one="removeQuantity($event)"
      @add-one="addQuantity($event)"
      @close-cart="closeCart"
      @delete-cart="deleteCart"
      @delete-item="deleteCartItem($event)"
    />    
    <TopHeader 
      @toggle-cart="toggleCart" 
      :showCartButton="showCartButton" 
      :quantity="quantity"
    />
    <StartHeroVue />
    <div class="width-wrapper home-view">
      <p v-if="productError">{{ productError.message }}</p>
      <div v-if="products">
        <ProductList :products="products" @add-to-cart="addToCart($event)"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopHeader from '../components/Header/TopHeader.vue';
import CartDrawer from '../components/Cart/CartDrawer.vue';
import StartHeroVue from '../components/StartHero.vue';
import ProductList from '../components/Product/ProductList.vue';
import { storeToRefs } from 'pinia'
import { useProductStore } from '../stores/getProducts';
import { useCartStore } from '../stores/cart';

const { products, productError } = storeToRefs(useProductStore());
const { cart, quantity, cartError } = storeToRefs(useCartStore());
const { getProducts } = useProductStore();
const { getCart, addToCart, removeQuantity, addQuantity, deleteCart, deleteCartItem } = useCartStore();

getProducts();
getCart();
</script>

<script>
export default {
  components: {
    TopHeader,
    CartDrawer,
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
      if (this.showCart) {
        document.getElementById("overlay").style.display = "block";
      } else {
        document.getElementById("overlay").style.display = "none";
      }
    },
    closeCart() {
      this.showCart = false;
      document.getElementById("overlay").style.display = "none";
    },   
  }
}
</script>