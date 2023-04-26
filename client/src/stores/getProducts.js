import { defineStore } from 'pinia'

const URL = import.meta.env.VUE_BASE_URL || 'http://localhost:3005'

export const useProductStore = defineStore({
  id: 'products',

  state: () => ({
    products: [],
    product: null,
    loading: false,
    error: null
  }),

  actions: {
    async getProducts() {
      this.products = []
      this.loading = true
      try {
        this.products = await fetch(`${URL}/product`).then((res) => res.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },

    async getProduct(slug) {
      this.product = null
      this.loading = true
      try {
        this.product = await fetch(`${URL}/product/${slug}`).then((res) => res.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})
