<template>
  <div>
    <TopHeader :showCartButton="false"/>
    <h1>Checkout view</h1>
      <!-- <p>{{ cart }}</p> -->
    
    <div class="flex checkout-wrapper">  
      <CheckoutConfirmation :showModal="this.showConfirmation"/>    
      <CheckoutSummary 
        :cart="this.cartStore.cart" 
        :error="this.cartStore.cartError"
        :quantity="this.cartStore.quantity"
        @remove-one="this.cartStore.removeQuantity($event)" 
        @add-one="this.cartStore.addQuantity($event)"/>

        <div v-show="loadingOrder" class="loading checkout">
      </div>
      <CheckoutForm @submit-order="this.checkoutStore.saveOrder($event, this.cartStore.cart), onSubmit()"/>
      <!-- <CheckoutForm @submit-order="submitOrder"/> -->
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cart';
import CheckoutForm from '../components/Checkout/CheckoutForm.vue';
import CheckoutSummary from '../components/Checkout/CheckoutSummary.vue';
import TopHeader from '../components/Header/TopHeader.vue';
import { useCheckoutStore } from '../stores/checkout';
import CheckoutConfirmation from '../components/Checkout/CheckoutConfirmation.vue';

export default {
  components: {
    TopHeader,
    CheckoutForm, 
    CheckoutSummary,
    CheckoutConfirmation,
  },
  setup() {
    const cartStore  = useCartStore();
    const checkoutStore = useCheckoutStore();
    // const { removeQuantity, addQuantity } = useCartStore();
    // const { cart, cartError } = useCartStore();
    // return { cartStore, cart, cartError }
    return { cartStore, checkoutStore }
  },
  data() {
    return {
      currentCart: undefined,
      showCart: false,
      loadingCart: false,
      order: {},
      loadingOrder: false,
      orderError: null,
      showConfirmation: false,
    }
  },
  methods: {
    async onSubmit() {
      console.log('testing SUBMIIIIT')
      this.loadingOrder = true;
      setTimeout(() => {
        this.loadingOrder = false;
        this.cartStore.cart = {}
        this.showConfirmation = true;
        // this.$router.push({ name: 'OrderConfirmation' })
      }, 1500);

    },
      
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
  align-items: center;

  .loading.checkout{
    // position: absolute;
    margin: 0 auto;
    // left: 50%;
    // right: 50%;
    height: 200px;
    width: 200px;
    overflow: visible;
    z-index: 10;
  }


}
</style>