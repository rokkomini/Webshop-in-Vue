<template>
  <div>
    <table>
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.productName }}</td>
        <td>{{ product.quantity }}</td>
        <td>{{ product.price }}</td>
      </tr>
      <tr>
        <th></th>
        <th>Total</th>
        <th> {{ total }} kr</th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CartSummary',
  props: {
    products: {
      type: Object,
    },
    total: Number,
  },
}
</script>