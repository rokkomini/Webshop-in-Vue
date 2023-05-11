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
    Show product details

    <p>{{ slug }}</p>
    <p>{{ this.productStore.product.name }}</p>
  
    <ProductCard :product="this.productStore.product" />
  </div>
</template>



<script>
import TopHeader from '../components/Header/TopHeader.vue';
import Cart from '../components/Cart/Cart.vue';
import ProductCard from '../components/Product/ProductCard.vue';
import { useProductStore } from '../stores/getProducts';
import { useCartStore } from '../stores/cart';
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
    ProductCard,
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
    console.log('Product detail view is now created')
    this.cartStore.getCart();
    this.productStore.getProduct(this.slug);
    return this.productItem = this.productStore.product;

  },
  mounted() {
    console.log('Product detail view is now mounted')   
  }
}
</script>