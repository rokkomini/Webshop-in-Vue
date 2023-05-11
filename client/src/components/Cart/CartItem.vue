<template>
  <div>
    <div class="flex cart-item">
      <div class="flex item-info">
        <div>
          <img :src="cartItem.image.url" :alt="cartItem.image.alt">
        </div>
        <div>
          <p>{{ cartItem.productName }}</p>
          <p>{{ cartItem.price / cartItem.quantity }}</p>
        </div>
      </div>
      <div class="item-management">
        <div>
          <button class="button secondary" @click="removeOne">-</button> 
            {{ cartItem.quantity }} 
          <button class="button secondary" @click="addOne">+</button>
        </div>
        <p>Totalpris: {{ cartItem.price }}</p>
      </div>
    </div>
    
  </div>

</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'CartItem',
  props: {
    cartItem: {
      type: Object,
    },
  },
  methods: {
    removeOne() {
      console.log('remove item (cartItem), id: ', this.cartItem._id)
      this.$emit('remove-one', this.cartItem._id);
    },
    addOne() {
      console.log('add item (cartItem), id: ', this.cartItem._id)
      this.$emit('add-one', this.cartItem._id);}
  }
}
</script>

<style lang="scss" scoped>
.cart-item {
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #000;

  img {
    width: 100px;
    height: 100px;
  }

  .button.secondary{
    padding: 3px 10px;
    font-size: 20px;
  }
}
</style>