<template>
  <Transition>
    <div :class="[showCart ? 'show' : 'hide', 'side-cart']" >
      <CartItem />
    </div>
  </Transition>
</template>

<script>
import CartItem from './Cart/CartItem.vue';
export default {
    props: {
        showCart: Boolean,
    },
    components: { CartItem }
}
</script>

<style lang="scss" scoped>
.side-cart {
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  z-index: 999;

  &.show {
    transition: .5s ease;
    
  }
  &.hide {
    transition:  1s ease;
    right: -100%;
  }
}
</style>