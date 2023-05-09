<template>
  <div>
    <TopHeader :showCartButton="false"/>
    <h1>Checkout view</h1>
      <!-- <p>{{ cart }}</p> -->
    <div class="flex checkout-wrapper">
      <CheckoutSummary 
        :cart="this.cartStore.cart" 
        :error="this.cartStore.cartError"
        @remove-one="this.cartStore.removeQuantity($event)" 
        @add-one="this.cartStore.addQuantity($event)"/>
      <CheckoutForm />
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cart';
import CheckoutForm from '../components/Checkout/CheckoutForm.vue';
import CheckoutSummary from '../components/Checkout/CheckoutSummary.vue';
import TopHeader from '../components/Header/TopHeader.vue';


export default {
  components: {
    TopHeader,
    CheckoutForm, 
    CheckoutSummary 
  },
  setup() {
    const cartStore  = useCartStore();
    // const { removeQuantity, addQuantity } = useCartStore();
    // const { cart, cartError } = useCartStore();
    // return { cartStore, cart, cartError }
    return { cartStore }
  },
  data() {
    return {
      currentCart: undefined,
      showCart: false,
      loadingCart: false,
    }
  },
  methods: {
    // toggleCart() {
    //   this.showCart = !this.showCart;
    // },
  },
  async created() {
    console.log('Checkout detail view is now created')
    console.log('Checkout view is now created')
    this.cartStore.getCart();
    // return console.log(this.cartStore) 
    
  },
}
</script>

<style lang="scss" scoped>
.checkout-wrapper {
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
}
</style>