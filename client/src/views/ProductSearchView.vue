<template>
  <div>    
    <div id="overlay" @click="closeCart"></div>
      <Cart 
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
      <h1>Search results for: {{ query }}</h1> 
      <ProductList v-if="query" :products="this.productStore.products" />
  </div>
</template>

<script>
import TopHeader from '../components/Header/TopHeader.vue';
import Cart from '../components/Cart/Cart.vue';
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
    Cart,
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
      console.log('got query? ', query)
      this.productStore.getSearchResults(query)
    },
  },
  async created() {
    console.log('Product detail view is now created')
    this.cartStore.getCart();
    console.log('query: ', this.query)
    this.productStore.getSearchResults(this.query);
  },
}
</script>