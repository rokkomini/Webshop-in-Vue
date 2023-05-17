<template>
  <div class="flex product-details-wrapper">
    <h1 class="show-medium"> {{ product.name }} </h1>
    <h1 class="show-small"> {{ product.name }} </h1>
    <div class="product-img" v-if="!selectedOption || product.options.size.length > 0">
      <img :src="product.mainImage?.url" :alt="product.mainImage?.alt">
    </div>

    <div v-if="selectedOption">
      <div v-for="option in product.options.color" v-bind:key="option._id" class="product-img">
        <img v-if="option._id == selectedOption" :src="option.image.url" :alt="option.image.alt">
      </div>
    </div>

    <div class="product-summary">
      <h1 class="show-large"> {{ product.name }} </h1>
      <p>By: {{ product.brand }}</p>
      <p> {{ product.description }}</p>
      <h3>{{ product.price }} kr</h3>
      
      <div v-if="product.options?.color.length > 0">
        <h4>Choose color</h4>
        <div class="flex-row radio-options">
          <div v-for="option in product.options.color" v-bind:key="option._id">
              <label :for="option._id">
                <input type="radio" :id="option._id" :value="option._id" v-model="selectedOption" />
                <img :src="option.image.url" :alt="option.image.alt" class="svg-icon">
              </label>
          </div>
        </div>
      </div>

      <div v-if="product.options?.size.length > 0">
        <h4>Choose size</h4>
        <div class="flex-row radio-options">
          <div v-for="option in product.options.size" v-bind:key="option.id">
              <label :for="option._id">
                <input type="radio" :id="option._id" :value="option" v-model="selectedOption" />
                <h5>{{ option }}</h5>
              </label>
          </div>
        </div>
      </div>

      <button class="button primary" @click="addToCart">Buy</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ProductDetailsCard',
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

      this.$emit('add-to-cart', newAdd)
    }
  },
}
</script>

