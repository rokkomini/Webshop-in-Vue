<template>
  <div class="product-card-wrapper">
    <div class="product-img" v-if="!selectedOption">
      <img :src="product.mainImage.url" :alt="product.mainImage.alt">
    </div>

    <div v-for="option in product.options.color" v-bind:key="option._id" class="product-img">
      <img v-if="option._id == selectedOption" :src="option.image.url" :alt="option.image.alt">
    </div>

    <div class="product-info">
      <p>Name: {{ product.name }}</p>
      <p>Brand: {{ product.brand }}</p>
      <p>Price: {{ product.price }} kr</p>
      <p>Color id: {{ selectedOption }}</p>

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

      <button @click="addToCart">Buy</button>
    </div>
  </div>
</template>

<script>
const URL = 'http://localhost:3005'

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
    option: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectedOption: null,
      setImage: null,
      loadingCart: false,  
    }
  },
  methods: {
    updateOption(event) {
      return this.selectedOption = event.target.value;
    },
    async addToCart(e) {
      e.preventDefault();
      if (!this.selectedOption) {
        alert('Please select a color')
        return
      }

      const newAdd = {
        productId: this.product._id,
        optionId: this.selectedOption,
      }

      console.log('new add', newAdd)
      console.log('URL', URL)

      try {
        const response = await fetch(`${URL}/cart/add-to-cart`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newAdd)
        })
        const data = await response.json()
        console.log('trying to add cart', data)
      } catch (error) {
        console.log('error')
      } finally {
        this.loadingCart = false
      }
      this.$emit('load-cart')
    }
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