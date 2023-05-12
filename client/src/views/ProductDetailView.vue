<template>
  <div>
    <div id="overlay" @click="closeCart"></div>
    <Cart 
      :showCart="showCart" 
      :cart="this.cartStore.cart" 
      :error="this.cartStore.cartError" 
      :quantity="this.cartStore.quantity"
      @remove-one="this.cartStore.removeQuantity($event)"
      @add-one="this.cartStore.addQuantity($event)"/>
      <TopHeader @toggle-cart="toggleCart" :showCartButton="showCartButton" :quantity="this.cartStore.quantity"/>
    <div class="flex page-wrapper">
      <ProductDetailsCard v-if="productItem" :product="this.productStore.product" @load-cart="this.cartStore.getCart"/>
    </div>
  </div>
</template>

<script>
import TopHeader from '../components/Header/TopHeader.vue';
import Cart from '../components/Cart/Cart.vue';
// import ProductCard from '../components/Product/ProductCard.vue';
import { useProductStore } from '../stores/getProducts';
import { useCartStore } from '../stores/cart';
import ProductDetailsCard from '../components/Product/ProductDetailsCard.vue';

export default {
  data() {
    return {
      showCart: false,
      cart: {},
      loadingCart: false,
      productItem: {},
      showCartButton: true,
    }
  },
  components: {
    TopHeader,
    Cart,
    // ProductCard,
    ProductDetailsCard,
  },
  setup() {
    const productStore = useProductStore();
    const cartStore = useCartStore();
    return { productStore, cartStore }
  },
  props: ['slug'],
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
      if (this.showCart) {
        document.getElementById("overlay").style.display = "block";
      } else {
        document.getElementById("overlay").style.display = "none";
      }
    },
    closeCart() {
      this.showCart = false;
      document.getElementById("overlay").style.display = "none";
    },
  },
  async created() {
    this.cartStore.getCart();
    this.productStore.getProduct(this.slug);
    return this.productItem = this.productStore.product;

  },
}
</script>

<style lang="scss" scoped>
.flex.page-wrapper {
  justify-content: center;
}
</style>