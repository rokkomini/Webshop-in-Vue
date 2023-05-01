<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopHeader from './components/Header/TopHeader.vue';
import ShopFooter from './components/ShopFooter.vue';
import Cart from './components/Cart.vue';
</script>

<template>
  <div>
    <!-- <div v-show="showCart"> -->
      <Cart :showCart="showCart"/>
    <!-- </div> -->
    <TopHeader @toggle-cart="toggleCart"/>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
      <RouterView />
      <ShopFooter />
  </div>
</template>

<script>

export default { 
  components: {
    TopHeader,
    ShopFooter,
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
      console.log('click toggle cart', this.showCart);
    }
  },
}
</script>
