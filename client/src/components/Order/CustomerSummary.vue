<template>
  <div class="yellow-wrapper">
    Delivery address:
    <p>{{ customer.name }}</p>
    <p>{{ customer.address}} </p>
    <p>{{ customer.email }}</p>
    <p>{{ customer.phone }}</p>  
  </div>
</template>

<script>
export default {
  name: 'CustomerSummary',
  props: {
    customer: Object,
  }
}
</script>

<style lang="scss" scoped>
.yellow-wrapper {
  padding: 1rem;
  border: 1px solid black;
}
</style>