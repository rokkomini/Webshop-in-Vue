<template>
  <div>
    <transition>
      <div v-if="order" v-show="showModal" class="modal-mask">
        hello modal
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
            <div class="modal-footer">
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

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {}

.modal-container {
  width: 500px;
  height: 100%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.button {
  // float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>