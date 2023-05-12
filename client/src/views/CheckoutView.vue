<template>
  <div>
    <div id="overlay"></div>
    <TopHeader :showCartButton="false" />
    
    <div class="page-wrapper">
      <h1>Checkout your order</h1>
      <div class="flex">
        <div v-show="loadingOrder" class="loading checkout">
        </div>
        <OrderConfirmation
          v-if="showConfirmation"
          :showModal="this.showConfirmation"
          @close="closeConfirmation"
          :order="this.checkoutStore.order"
          />
        <CheckoutSummary
          :cart="this.cartStore.cart"
          :error="this.cartStore.cartError"
          :quantity="this.cartStore.quantity"
          @remove-one="this.cartStore.removeQuantity($event)"
          @add-one="this.cartStore.addQuantity($event)"
        />
        <CheckoutForm
          @submit-order="this.checkoutStore.saveOrder($event, this.cartStore.cart)"
          @get-order="this.checkoutStore.getOrder($event)"
          @show-confirmation="onSubmit()"
        />
        </div>
      </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cart';
import CheckoutForm from '../components/Checkout/CheckoutForm.vue';
import CheckoutSummary from '../components/Checkout/CheckoutSummary.vue';
import TopHeader from '../components/Header/TopHeader.vue';
import { useCheckoutStore } from '../stores/checkout';
import OrderConfirmation from '../components/Order/OrderConfirmation.vue';

export default {
  components: {
    TopHeader,
    CheckoutForm,
    CheckoutSummary,
    OrderConfirmation,
  },
  setup() {
    const cartStore = useCartStore();
    const checkoutStore = useCheckoutStore();
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
      this.loadingOrder = true;
      document.getElementById("overlay").style.display = "block";
      setTimeout(() => {
        this.loadingOrder = false;
        this.cartStore.getCart();
        this.showConfirmation = true;
        document.getElementById("overlay").style.display = "none";
      }, 1500);
    },
    closeConfirmation() {
      this.showConfirmation = false;
      this.$router.push({ name: 'home' })
    },
  },
  async created() {
    this.cartStore.getCart();
  },
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  padding: 30px; 

  .flex {
    align-items: center;
    justify-content: space-between;
  }

  .loading.checkout {
    height: 200px;
    width: 200px;
  }
}
</style>