<template>
  <div>
    <transition>
      <div v-if="order" v-show="showModal" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <h2>
                Thanks for your order, {{ order.customer.name }}!
              </h2>
              <p>A confirmation will be sent to your email shortly,
                please review your order below.
              </p>
            </div>
            <h3>Order number: {{ order._id }}</h3>
            <div class="modal-body">
              <CartSummary :products="order.cart.products" :total="order.cart.total"/>
              <div>             
                <CustomerSummary :customer="order.customer"/>
              </div>
            </div>
            <div class="flex center modal-footer">
              <button class="button primary" @click="$emit('close')">
                Got it!
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import CartSummary from './CartSummary.vue';
import CustomerSummary from './CustomerSummary.vue';

export default {
  name: 'OrderConfirmation',
  components: {
    CartSummary,
    CustomerSummary,
  },
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    order: {
      type: Object,
    },
  },
}
</script>