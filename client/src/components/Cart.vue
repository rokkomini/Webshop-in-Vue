<template>
  <Transition name="cart">
    <div :class="[showCart ? 'show' : 'hide', 'side-cart']" >
      Hello, this is the cart
    </div>


  </Transition>
</template>

<script>
export default {
  props: {
    showCart: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.side-cart {
  position: fixed;
  top: 0;
  // left: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  z-index: 999;
  // transition: transform 0.5s ease-in-out;
  // transform: translateX(100%);

  &.show {
    transition: .5s ease;
    // transform: translateX(100%);
    
  }

  &.hide {
    transition:  1s ease;
    // transform: translateX(0);
    right: -100%;
    
  }
}



// .cart-enter-active,
// .cart-leave-active {
//   transition: opacity 0.5s ease;
//   transform: translateX(-100%);
// }

// .cart-enter-from,
// .cart-leave-to {
//   opacity: 0;
//   transform: translateX(-100%);
// }
</style>