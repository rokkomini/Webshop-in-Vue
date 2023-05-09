<template>
  <div>
      <RouterView />
      <ShopFooter />
  </div>
</template>

<script>
// import { RouterLink, RouterView } from 'vue-router'
import ShopFooter from './components/ShopFooter.vue';

export default { 
  components: {
    ShopFooter,
  },
}
</script>
