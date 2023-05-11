<template>
  <section class="flex blue-wrapper">
    <div class="flex left-header">
      <RouterLink to="/"><font-awesome-icon icon="fa-solid fa-house" /></RouterLink>
      <div>Sökruta?</div>
    </div>
    <div>En logga?</div>
    <div class="flex">
      <div v-show="showCartButton">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" @click="$event => $emit('toggle-cart')"
          class="font-awesome" />
        <span @click="$event => $emit('toggle-cart')" class="badge pink-wrapper">
          <div>{{ quantity }}</div>
        </span>
      </div>
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
  emits: ['toggle-cart']
}
</script>

<style lang="scss" scoped>
.blue-wrapper {
  height: 40px;
  align-items: center;
  padding: 20px;
  justify-content: space-between;

  span {
    cursor: pointer;
  }

  .left-header {
    gap: 20px;
  }
}

.badge {
  // background-color: pink;
  border-radius: 50%;
  text-align: center;
  display: inline-block;
  height: 25px;
  width: 25px;
  // background: pink;
  // color: #fff;
  vertical-align: top;
  margin-left: -10px;
  border-radius: 50%;

  p {
    margin: 0;
  }
}


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