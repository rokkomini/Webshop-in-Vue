<template>
  <div class="product-card-wrapper">
    <router-link :to="{ name: 'ProductDetail', params: { slug: product.slug } }">
      <div class="product-img" v-if="!selectedOption || product.options.size.length > 0">
        <img :src="product.mainImage.url" :alt="product.mainImage.alt">
      </div>

      <div v-if="product.options.color.length > 0">
        <div v-for="option in product.options.color" v-bind:key="option._id" class="product-img">
          <img v-if="option._id == selectedOption" :src="option.image.url" :alt="option.image.alt">
        </div>
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
          <option disabled selected>Please select one</option>
          <option v-for="option in product.options.size" :value="option._id" v-bind:key="option.id">
            {{ option.name }}
          </option>
        </select>

        <select v-if="product.options.color.length > 0" @change="updateOption($event)">
          <option disabled selected>Please select one</option>
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
    addToCart(e) {
      e.preventDefault();
      if (!this.selectedOption) {
        alert('Please select')
        return
      }

      const newAdd = {
        productId: this.product._id,
        optionId: this.selectedOption,
      }

      this.$emit('add-to-cart', newAdd)
    }
  },
}
</script>