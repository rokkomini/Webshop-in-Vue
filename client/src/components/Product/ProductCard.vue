<template>
    <div class="product-card-wrapper">
      <h1>Product card</h1>
      <div class="product-info">
        <p>Name: {{ product.name }}</p>
        <p>Brand: {{ product.brand }}</p>

          <select v-model="selected" v-if="product.options.size.length > 0">
            <option v-for="option in product.options.size" :value="option.value" v-bind:key="option.id" :option="option">
              {{ option.name }}
            </option>
          </select>

          <select v-model="selected" v-if="product.options.color.length > 0">
            <option v-for="option in product.options.color" :value="option.value" v-bind:key="option.id" :option="option">
              {{ option.name }}
            </option>
          </select>

        <button @click="$event => $emit('add-to-cart', product)">Buy</button>
      </div>
    </div>
</template>

<script>

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
    },
  },
}

</script>