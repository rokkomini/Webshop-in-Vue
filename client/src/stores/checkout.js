import { defineStore } from 'pinia'

const URL = 'http://localhost:3005/checkout';

export const useCheckoutStore = defineStore({ 
  id: 'checkout',

  state: () => ({
    order: undefined,
    loadingOrder: false,
    orderError: null
  }),

  actions: {
    async getOrder(customerEmail) {
      this.order =  {}
      this.loadingOrder = true
      try {
        this.order = await fetch(`${URL}/get-order/${customerEmail}`, {
        })
          .then((res) => res.json())
      } catch {
        this.orderError = 'error fetching order'
      } finally {
        this.loadingOrder = false
      }
    },

    async saveOrder(customer, cart) {
      this.order = undefined
      this.loadingOrder = true
      try {
        const response = await fetch(`${URL}/save-order`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify({ customer, cart }) 
        })
        await response
        this.getOrder(customer.email)

        console.log('save order', this.order)
        // // .then((res) => res.json())
        // this.getOrder(customer.email)
      } catch (error) {
        this.orderError = error
      } finally {
        this.loadingOrder = false        
      }
    }
  },
})