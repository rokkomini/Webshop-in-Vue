<template>
  <Transition>
    <div :class="[showCart ? 'show' : 'hide', 'side-cart']">
        <p v-if="error">{{ error.message }}</p>
        <div class="flex end">
          <font-awesome-icon icon="fa-solid fa-xmark" @click="$emit('close-cart')"/>
        </div>
      <div v-if="cart">
        <div v-for="product in cart.products" :key="product.optionId">
          <CartItem 
            :cartItem="product"
            :flexRow="true" 
            @remove-one="removeOne" 
            @add-one="addOne" 
            @delete-item="deleteItem"
          />
        </div>
      </div>

      <div class="flex column cart-wrapper">
        <div class="flex column end" v-if="quantity > 0">
          <table>
            <tr>
              <td>Quantity:</td>
              <th>{{ quantity }}</th>
            </tr>
            <tr>
              <td>Total:</td>
              <th>{{ cart.total }} kr</th>
            </tr>
          </table>
        </div>
        <div v-if="quantity > 0" class="flex-row center cart-buttons">
          <RouterLink class="button primary" to="/checkout">Gå till kassan</RouterLink>
          <button class="button" @click="$emit('delete-cart')">Delete Cart</button>
        </div>
        <div v-if="quantity < 1">
          No items in cart
        </div>
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
    error: String,
    quantity: Number,
  },
  components: { CartItem },
  data() {
    return {
      productCount: 0,
    }
  },
  methods: {
    countItems(products) {
      const countProd = products?.map((prod) => prod.quantity).reduce((a, b) => a + b, 0);
      return this.productCount = countProd;
    },
    removeOne(id) {
      this.$emit('remove-one', id);
    },
    addOne(id) {
      this.$emit('add-one', id);
    },
    deleteItem(id) {
      this.$emit('delete-item', id);
    },
    deleteCart() {
      this.$emit('delete-cart');
    },
  },

}
</script>