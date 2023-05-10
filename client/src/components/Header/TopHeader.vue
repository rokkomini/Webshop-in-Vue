<template>
  <section class="flex top-header-wrapper">
    <RouterLink to="/">Home</RouterLink>
    <div class="top-icons">
      <font-awesome-icon icon="fa-brands fa-instagram" />
    </div>
    <div>Sökruta?</div>
    <div>En logga?</div>
    <div v-show="showCartButton">
      
      <!-- <button class="button secondary" @click="$event => $emit('toggle-cart')">Öppna varukorg</button> -->
      <font-awesome-icon  icon="fa-solid fa-cart-shopping" @click="$event => $emit('toggle-cart')" class="font-awesome"/>
      <span @click="$event => $emit('toggle-cart')" class="badge">{{ quantity }}</span>
      </div>
  </section>
</template>

<script>
export default {
  name: 'TopHeader',
  props: {
    showCartButton: Boolean,
    cart: Object,
    quantity: Number,
  },

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
  height: 40px;
  align-items: center;
  padding: 20px;

  span {
    cursor: pointer;
  }
}

.badge {
  background-color: pink;
  border-radius: 50%;
  text-align: center;
  display: inline-block;
  height: 25px;
  width: 25px;
  // font-size: 12px;
  background: pink;
  color: #fff;
  // padding: 0 5px;
  vertical-align: top;
  margin-left: -10px;
  // padding: 5px;
  border-radius: 50%;
}

  // font-size:12px;
  // color: #fff;
  // background: red;
  // border-radius:50%;
  // padding: 0 5px;
  // position:relative;
  // left:-8px;
  // top:-10px;
  // opacity:0.9;

.top-icons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #f5f5f5;
}

.fa-cart-shopping {
  font-size: 1.5rem;
  color: #F9F9F9;
  cursor: pointer;
}
</style>