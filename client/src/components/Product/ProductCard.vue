<template>
    <div class="product-card-wrapper">
      <div class="product-img" v-if="!selectedOption">
        <img :src="product.mainImage.url" :alt="product.mainImage.alt">
      </div>

      <div v-for="option in product.options.color" v-bind:key="option._id" class="product-img" >
        <img v-if="option._id == selectedOption" :src="option.image.url" :alt="option.image.alt">
      </div>

      <div class="product-info">
        <p>Name: {{ product.name }}</p>
        <p>Brand: {{ product.brand }}</p>
        <p>Price: {{ product.price }} kr</p>
        <p>Color id: {{ selectedOption}}</p>

          <select v-if="product.options.size.length > 0" @change="updateOption($event)">
            <option v-for="option in product.options.size" :value="option.value" v-bind:key="option.id" :option="option">
              {{ option.name }}
            </option>
          </select>

          <select v-if="product.options.color.length > 0" @change="updateOption($event)">
            <option disabled selected>Please select one</option>
            <option v-for="option in product.options.color" :value="option._id" v-bind:key="option._id">
              {{ option.name }}
            </option>
          </select>

        <button @click="$emit('add-to-cart', product.id)" :optionData="selectedOption">Buy</button>
        <!-- <button @click="addToCart">Buy</button> -->
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
    },
    optionData: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectedOption: null,
      setImage: null,
    }
  },
  methods: {
    updateOption (event) {
      return this.selectedOption = event.target.value;
    },
    // addToCart() {
    //   console.log('add-to-cart', this.product.name, this.selectedOption);
    // }
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
    padding: 15px;
  }
}
</style>