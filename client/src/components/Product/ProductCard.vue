<template>
    <div class="product-card-wrapper">
      <h1>Product card</h1>
      <div class="product-info">
        <p>Name: {{ product.name }}</p>
        <p>Brand: {{ product.brand }}</p>
        <button @click="$event => $emit('test')">Buy</button>
      </div>
    </div>
</template>

<script>

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
    }
  }
}

</script>