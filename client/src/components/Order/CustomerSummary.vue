<template>
  <div class="pink-wrapper customer-box">
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