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
      console.log('customerEmail in store', customerEmail)
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
        console.log('this.order', this.order)
      }
    },

    async saveOrder(customer, cart) {
      this.order = undefined
      this.loadingOrder = true
      // console.log('store: customer', customer, 'cart', cart)
      try {
        await fetch(`${URL}/save-order`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify({ customer, cart }) 
        })
        // this.order = await fetch(`${URL}/get-order`)
        //   .then((res) => res.json())
      } catch (error) {
        this.orderError = error
      } finally {
        this.loadingOrder = false
      }
    }
  },
})