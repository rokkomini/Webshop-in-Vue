<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopHeader from './components/Header/TopHeader.vue';
import Footer from './components/Footer.vue';
import Cart from './components/Cart.vue';
</script>

<template>
  <div>
    <div v-show="showCart">
      <Cart/>
    </div>
    <TopHeader @toggle-cart="toggleCart"/>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
      <RouterView />
      <Footer />
  </div>
</template>

<script>

export default { 
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
