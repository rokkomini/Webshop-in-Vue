import { defineStore } from 'pinia'

const URL = `${import.meta.env.VITE_API_KEY}/cart`

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
        this.cart = await fetch(`${URL}/get-cart`)
          .then((res) => res.json())
          this.quantity = this.cart.products?.map((item) => item.quantity).reduce((acc, item) => acc + item, 0)
      } catch {
        this.cartError = 'error fetching cart'
      } finally {
        this.loadingCart = false
      }
    },

    async removeQuantity(cartItem) {
      this.loadingCart = true
      try {
        await fetch(`${URL}/remove-quantity`, {
          method: 'PATCH',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify({ cartItem }) 
        })
        this.getCart()               
      } catch (error) {
        this.cartError = error
      } finally {
        this.loadingCart = false
      }
    },
    
    async addQuantity(cartItem) {
      this.loadingCart = true
      try {
        await fetch(`${URL}/add-quantity`, {
          method: 'PATCH',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify({ cartItem })
        })
        this.getCart()       
      } catch (error) {
        this.cartError = error
      } finally {
        this.loadingCart = false
      }
    },

    async addToCart(product) {
      this.cart = {}
      this.loadingCart = true      
      try {
        const response = await fetch(`${URL}/add-to-cart`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(product)
        })
        await response
        this.getCart()
      } catch (error) {
        this.cartError = error
      } finally {
        this.loadingCart = false
      }
    },

    async deleteCart() { 
      this.cart = {}
      this.loadingCart = true
      try {
        await fetch(`${URL}/delete-cart`, {
          method: 'DELETE',
        })
        this.getCart()
      } catch (error) {
        this.cartError = error
      } finally {
        this.loadingCart = false
      }
    },

    async deleteCartItem(cartItem) {
      this.loadingCart = true
      try {
        await fetch(`${URL}/delete-item`, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify( cartItem )
        })
        this.getCart()
      } catch (error) {
        this.cartError = error
      } finally {
        this.loadingCart = false
      }
    }
  }
})