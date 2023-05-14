<template>
  <div class="product-card-wrapper">
    <router-link :to="{ name: 'ProductDetail', params: { slug: product.slug } }">
      <div class="product-img" v-if="!selectedOption">
        <img :src="product.mainImage.url" :alt="product.mainImage.alt">
      </div>
      <div v-for="option in product.options.color" v-bind:key="option._id" class="product-img">
        <img v-if="option._id == selectedOption" :src="option.image.url" :alt="option.image.alt">
      </div>
    </router-link>

    <div class="product-info">
      <div class="flex center">
        <p class="name">
          <router-link :to="{ name: 'ProductDetail', params: { slug: product.slug } }">
            {{ product.name }}
          </router-link>
        </p>
        <p class="brand">{{ product.brand }}</p>
      </div>


      <div class="flex column">

        <select v-if="product.options.size.length > 0" @change="updateOption($event)">
          <option v-for="option in product.options.size" :value="option.value" v-bind:key="option.id" :option="option">
            {{ option.name }}
          </option>
        </select>

        <select v-if="product.options.color.length > 0" @change="updateOption($event)">
          <option disabled selected>Please select one</option>
          <div :style="{ background: option.colorCode }"></div>
          <option v-for="option in product.options.color" :value="option._id" v-bind:key="option._id">
            {{ option.name }}
          </option>
        </select>
      </div>

      <div class="flex center">
        <p>{{ product.price }} kr</p>
        <button class="button" @click="addToCart">Add to cart</button>
      </div>
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

      try {
        const response = await fetch(`${URL}/cart/add-to-cart`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newAdd)
        })
        await response.json()
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