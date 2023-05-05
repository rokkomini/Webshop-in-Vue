import { defineStore } from 'pinia'

const URL = 'http://localhost:3005/cart';

export const useCartStore = defineStore({ 
  id: 'cart',

  state: () => ({
    cart: {},
    loadingCart: false,
    cartError: null
  }),

  actions: { 
    async getCart() { 
      this.cart = {}
      this.loadingCart = true
      try {
        // const response = await fetch(`${URL}/get-cart`)
        // const data = await response
        // return this.cart = data
        this.cart = await fetch(`${URL}/get-cart`)
          .then((res) => res.json())
          .then(console.log('cart: ', URL))
      } catch {
        this.cartError = 'error fetching cart'
      } finally {
        this.loadingCart = false
      }
    },

    async addToCart(product, optionId) {
      try {
        const response = await fetch(`${URL}/add-to-cart`, {
          method: 'POST',
          // headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(product, optionId)
        })
        const data = await response.json()
        this.cart = [...this.cart, data]
      } catch (error) {
        this.cartError = error
      } finally {
        this.loadingCart = false
      }
    }
  }
})