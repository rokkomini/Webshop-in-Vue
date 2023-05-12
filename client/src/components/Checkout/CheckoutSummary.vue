<template>
  <div>
    <p v-if="error">{{ error.message }}</p>
      <div v-if="cart">
        <div v-for="product in cart.products" :key="product.optionId">
          <CartItem :cartItem="product" @remove-one="removeOne" @add-one="addOne"/>
        </div>
      </div>

      <div v-if="quantity > 0">
        <p>Quantity: {{ quantity }}</p>
        <p>{{ cart.total }} kr</p>
      </div>

      <div v-if="quantity < 1">
        No items in cart
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
      error: undefined,
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
        this.$emit('remove-one', id);
      },
      addOne(id) {
        this.$emit('add-one', id);
      }
    },
}
</script>