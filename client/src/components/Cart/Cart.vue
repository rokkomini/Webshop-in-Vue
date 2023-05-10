<template>
  <Transition>
    <div :class="[showCart ? 'show' : 'hide', 'side-cart']" >
      <p v-if="error">{{ error.message }}</p>
      <div v-if="cart">
        <div v-for="product in cart.products" :key="product.optionId">
          <CartItem :cartItem="product" @remove-one="removeOne" @add-one="addOne"/>
        </div>
      </div>

      <div v-if="cart">
        <p>Antal varor: {{ productCount }}</p>
        <p>Antal varor countItems(cart): {{ quantity }}</p>
        <p>Totalpris varukorg: {{ cart.total }} kr</p>
        <RouterLink class="button primary" to="/checkout">Gå till kassan</RouterLink>
      </div>
      
    </div>
  </Transition>
</template>

<script>
import CartItem from './CartItem.vue';

export default {
    props: {
      showCart: Boolean,
      cart: {
        type: Object,
      },
      error: Object,
      quantity: Number,
    },
    components: { CartItem },
    data() {
      return {
        productCount: 0,
      }
    },
    methods: {
      countItems(products){
        const countProd = products?.map((prod) => prod.quantity).reduce((a, b) => a + b, 0);
        return this.productCount = countProd;
      },
      removeOne(id) {
        console.log('remove item (cart.vue), id: ', id)
        this.$emit('remove-one', id);
      },
      addOne(id) {
        this.$emit('add-one', id);
      }
    },
  
}
</script>

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