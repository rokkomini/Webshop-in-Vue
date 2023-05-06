<template>
  <div>
    <div class="flex cart-item">
      <div class="flex item-info">
        <div>
          <!-- <img src="../../assets/images/products/512355/138542-1-512355-003_pack_a.jpg" alt="bild"> -->
          <img :src="cartItem.image.url" :alt="cartItem.image.alt">
        </div>
        <div>
          <p>{{ cartItem.productName }}</p>
          <p>{{ cartItem.price / cartItem.quantity }}</p>
        </div>
      </div>
      <div class="item-management">
        <div>
          <button>-</button> {{ cartItem.quantity }} <button>+</button>
        </div>
        <p>Totalpris: {{ cartItem.price }}</p>
      </div>
    </div>
    
  </div>

</template>

<script>

export default {
  name: 'CartItem',
  props: {
    cartItem: {
      type: Object,
    },
  },
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
}
</style>