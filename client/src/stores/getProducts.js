import { defineStore } from 'pinia'

const URL = `${import.meta.env.VITE_API_KEY}`

export const useProductStore = defineStore({
  id: 'products',

  state: () => ({
    products: [],
    product: {},
    slug: null,
    loadingProducts: false,
    productError: null
  }),

  actions: {
    async getProducts() {
      this.products = []
      this.loadingProducts = true
      try {
        this.products = await fetch(`${URL}/product`).then((res) => res.json())
      } catch (error) {
        this.productError = error
      } finally {
        this.loadingProducts = false
      }
    },

    async getProduct(slug) {
      this.product = {}
      this.loadingProducts = true
      try {
        this.product = await fetch(`${URL}/product/${slug}`).then((res) => res.json())
      } catch (error) {
        this.productError = error
      } finally {
        this.loadingProducts = false
      }
    },

    async getSearchResults(query) {
      this.products = []
      this.loadingProducts = true
      try {
        this.products = await fetch(`${URL}/product/search/${query}`).then((res) => res.json())
      } catch (error) {
        this.productError = error
      } finally {
        this.loadingProducts = false
      }
    }
  }
})
