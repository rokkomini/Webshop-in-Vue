<template>
    <div class="product-card-wrapper">
      <div class="product-img" v-if="!selectedColor">
        <img :src="product.mainImage.url" :alt="product.mainImage.alt">
      </div>

      <div v-for="option in product.options.color" v-bind:key="option._id" class="product-img" >
        <img v-if="option._id == selectedColor" :src="option.image.url" :alt="option.image.alt">
      </div>

      <div class="product-info">
        <p>Name: {{ product.name }}</p>
        <p>Brand: {{ product.brand }}</p>

          <select v-model="selectedSize" v-if="product.options.size.length > 0">
            <option v-for="option in product.options.size" :value="option.value" v-bind:key="option.id" :option="option">
              {{ option.name }}
            </option>
          </select>

          <!-- <select v-model="selectedColor" v-if="product.options.color.length > 0">
            <option v-for="option in product.options.color" :value="option" v-bind:key="option.id">
              {{ option.name }} 
            </option>
          </select> -->

          <select v-if="product.options.color.length > 0" @change="updateProductColor($event)">
            <option disabled selected>Please select one</option>
            <option v-for="option in product.options.color" :value="option._id" v-bind:key="option._id">
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
    value: {
      type: String,
      default: ''
    } 
  },
  data() {
    return {
      selectedColor: null,
      setImage: null,
    }
  },
  methods: {
    updateProductColor (event) {
      this.selectedColor = event.target.value;
    },
  },
}

</script>

<style lang="scss" scoped>
.product-card-wrapper {
  height: auto;
  width: 300px;
  border: 2px solid black;

  .product-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product-info {
    padding: 10px;
  }
}
</style>