<template>
  <section class="top-header-wrapper">
    HEADER
    <div class="top-icons">
      <font-awesome-icon icon="fa-brands fa-instagram" />
    </div>
    <div>Sökruta?</div>
    <div>En logga?</div>
    <div>
      <button @click="$event => $emit('toggle-cart')">Öppna varukorg</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TopHeader',
  // methods: {
  //   toggleCart() {
  //     console.log('open cart');
  //   }
  // },

  emits: ['toggle-cart']
}
</script>

<style lang="scss" scoped>
.top-header-wrapper {
  background-color: aqua;
  display: flex;
}
.top-icons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #f5f5f5;
}
</style>