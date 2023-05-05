<script>
import CartItem from './Cart/CartItem.vue';
import { nextTick } from 'vue'

export default {
    props: {
      showCart: Boolean,
      cart: {
        type: Object,
      },
      loading: Boolean,
      error: Object,
    },
    components: { CartItem },
    data() {
      return {
        productCount: null,
      }
    },
    methods: {
      countItems(cart){
        cart.products.forEach(product => {
          return this.productCount += product.quantity;
        });
        nextTick(() => {
          console.log('productCount: ', this.productCount)
        })
      }
    },
    beforeMount() {
      this.countItems(this.cart);
    },
    // mounted() {
    //   this.countItems(this.cart);
    // }
  
}
</script>

<template>
  <Transition>
    <div :class="[showCart ? 'show' : 'hide', 'side-cart']" >
      <p v-if="loading">Loading cart</p>
      <p v-if="error">{{ error.message }}</p>
      <div v-if="cart">
        <div v-for="product in cart.products" :key="product.optionId">
          <CartItem :cartItem="product"/>
        </div>
        <div v-for="product in cart.products" :key="product.optionId">
          <p>{{ product.productName }}</p>
        </div>
        <div>
        <p>Antal varor: {{ productCount }}</p>
        <p>Totalpris varukorg: {{ cart.total }} kr</p>
        <button @click="goToCart">Gå till kassan</button>
            </div>
      </div>
      <!-- <div v-for="item in cartProducts" :key="item.id">
        <p :product="item">Cart:{{ item }}</p>
      </div> -->
      


    </div>
  </Transition>
</template>



<style lang="scss" scoped>
.side-cart {
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  z-index: 999;

  &.show {
    transition: .5s ease;
  }
  &.hide {
    transition:  1s ease;
    right: -100%;
  }
}
</style>