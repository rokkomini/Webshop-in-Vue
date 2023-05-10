import { defineStore } from 'pinia'

const URL = 'http://localhost:3005/cart';

export const useCartStore = defineStore({ 
  id: 'cart',

  state: () => ({
    cart: undefined,
    quantity: 0,
    loadingCart: false,
    cartError: null
  }),

  actions: { 
    async getCart() { 
      this.cart = []
      this.loadingCart = true
      this.quantity = 0
      try {
        // const response = await fetch(`${URL}/get-cart`)
        // const data = await response
        // return this.cart = data
        this.cart = await fetch(`${URL}/get-cart`)
          .then((res) => res.json())
          this.quantity = this.cart.products?.map((item) => item.quantity).reduce((acc, item) => acc + item, 0)
      } catch {
        this.cartError = 'error fetching cart'
      } finally {
        this.loadingCart = false
      }
      // this.quantity = this.cart.products?.reduce((acc, item) => acc + item.quantity, 0)
    },

    async removeQuantity(cartItem) {
      // console.log('cart store, remove quantity: ', cartItem)
      // this.cart = undefined
      this.loadingCart = true
      console.log('cart store, remove quantity: ', this.cart)
      try {
        await fetch(`${URL}/remove-quantity`, {
          method: 'PATCH',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify({ cartItem }) 
        })
        // const data = await response.json()
        // console.log('..this.cart', data)
        // this.cart = [...this.cart, data]
        this.getCart()
        
        
      } catch (error) {
        this.cartError = error
      } finally {
        this.loadingCart = false
      }
    },
    async addQuantity(cartItem) {
      console.log('cart store, add quantity: ', cartItem)
      // this.cart = undefined
      this.loadingCart = true

      try {
        await fetch(`${URL}/add-quantity`, {
          method: 'PATCH',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify({ cartItem })
        })
        this.getCart()
        // const data = await response.json()
        // console.log('trying to add quantity', data)
        // // this.getCart
        // return this.cart = [...data]
        
      } catch (error) {
        this.cartError = error
      } finally {
        this.loadingCart = false
      }
    },

    async addToCart(product) {
      console.log('cart store, product: ', product)
      this.cart = {}
      this.loadingCart = true
      
      try {
        const response = await fetch(`${URL}/add-to-cart`, {
          method: 'POST',
          // headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(product)
        })
        const data = await response.json()
        // this.cart = [...this.cart, data]
        console.log('trying to add cart', data)
      } catch (error) {
        this.cartError = error
      } finally {
        this.loadingCart = false
      }
    },

    async countItems() { 

    }
  }
})