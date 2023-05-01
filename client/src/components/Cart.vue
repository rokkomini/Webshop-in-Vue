<template>
  <Transition>
    <div class="side-cart">
      Hello, this is the cart
    </div>
    <!-- <button v-b-toggle.sidebar-right>Toggle Sidebar</button>
    <sidebar id="sidebar-right" title="Sidebar" right shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </sidebar> -->


  </Transition>
</template>

<script>
// export default {
//   props: {
//     showCart: {
//       type: Boolean,
//       default: false,
//     }
//   },
// }
</script>

<style lang="scss" scoped>
.side-cart {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  z-index: 999;
  // transition: all 0.3s ease-in-out;
  // transform: translateX(100%);
}
</style>