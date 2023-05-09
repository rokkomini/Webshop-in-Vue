<template>
  <div>
    Checkout summary
    <!-- <CartItem /> -->
    <p v-if="error">{{ error.message }}</p>
      <div v-if="cart">
        <div v-for="product in cart.products" :key="product.optionId">
          <CartItem :cartItem="product" @remove-one="removeOne" @add-one="addOne"/>
        </div>
      </div>

      <div v-if="cart">
        <p>Antal varor: {{ productCount }}</p>
        <p>Antal varor countItems(cart): {{ countItems(cart.products) }}</p>
        <p>Totalpris varukorg: {{ cart.total }} kr</p>
      </div>
  </div>
</template>

<script>
import CartItem from '../Cart/CartItem.vue';

export default {
  props: {
      showCart: Boolean,
      cart: {
        type: Object,
      },
      error: Object,
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