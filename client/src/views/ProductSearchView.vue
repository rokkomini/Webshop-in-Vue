<template>
  <div>    
    <div id="overlay" @click="closeCart"></div>
      <CartDrawer 
        :showCart="showCart" 
        :cart="this.cartStore.cart" 
        :error="this.cartStore.cartError" 
        :quantity="this.cartStore.quantity"
        @remove-one="this.cartStore.removeQuantity($event)"
        @add-one="this.cartStore.addQuantity($event)"
      />
      <TopHeader 
        @toggle-cart="toggleCart" 
        :showCartButton="showCartButton" 
        :quantity="this.cartStore.quantity"
        @search-query="searchProducts($event)"
      />
      <div class="width-wrapper">
        <h1>Search results for: {{ query }}</h1>
        <div class="flex">
          <ProductList v-if="query" :products="this.productStore.products" />
        </div>
      </div>
  </div>
</template>

<script>
import TopHeader from '../components/Header/TopHeader.vue';
import CartDrawer from '../components/Cart/CartDrawer.vue';
// import ProductCard from '../components/Product/ProductCard.vue';
import { useProductStore } from '../stores/getProducts';
import { useCartStore } from '../stores/cart';
import ProductList from '../components/Product/ProductList.vue';
export default {
  name: 'ProductSearch',
  data() {
    return {
      showCart: false,
      cart: {},
      loadingCart: false,
      productItem: {},
      showCartButton: true,
      newQuery: '',
    }
  },
  components: {
    TopHeader,
    CartDrawer,
    ProductList,
  },
  setup() {
    const productStore = useProductStore();
    const cartStore = useCartStore();
    return { productStore, cartStore }
  },
  props: ['query'],
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
    searchProducts(query) {
      this.productStore.getSearchResults(query)
    },
  },
  async created() {
    this.cartStore.getCart();
    this.productStore.getSearchResults(this.query);
  },
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  
  padding-bottom: 30px;
h1 {
  color: #808080;
}
  .flex {
    justify-content: center;
  }
}
</style>