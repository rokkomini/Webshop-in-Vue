<template>
  <div>
    <div class="flex cart-item">
      <div class="flex item-info">
        <div><img src="../../assets/images/products/512355/138542-1-512355-003_pack_a.jpg" alt="bild"></div>
        <div>
          <p>Ljushållare</p>
          <p>Färg: Vit</p>
          <p>40 kr</p>
        </div>
      </div>
      <div class="item-management">
        <div>
          <button>-</button> 1 <button>+</button>
        </div>
        <p>Totalpris för antal</p>
      </div>
    </div>
    
    <div>
      <p>Antal produkter i varukorg</p>
      <p>Totalpris varukorg</p>
      <button @click="goToCart">Gå till kassan</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CartItem',
  props: {
    product: {
      type: Object,
    }
  },
  methods: {
    goToCart() {
      console.log('go to cart');
    },
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
}
</style>