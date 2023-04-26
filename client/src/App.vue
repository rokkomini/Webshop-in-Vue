<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopHeader from './components/Header/TopHeader.vue';
</script>

<template>
  <div>
    <TopHeader />
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
      <RouterView />
  </div>
</template>
