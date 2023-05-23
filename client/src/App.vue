<template>
  <div>
      <RouterView />
      <ShopFooter />
  </div>
</template>

<script>
import ShopFooter from './components/footer/ShopFooter.vue';

export default { 
  components: {
    ShopFooter,
  },
}
</script>
