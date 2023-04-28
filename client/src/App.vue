<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopHeader from './components/Header/TopHeader.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div>
    <TopHeader />
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
      <RouterView />
      <Footer />
  </div>
</template>
