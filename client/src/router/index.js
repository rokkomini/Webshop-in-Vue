import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import OrderConfirmationView from '../views/OrderConfirmationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products/:slug',
      name: 'ProductDetail',
      component: ProductDetailView,
      props: true
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: CheckoutView,
    },
    {
      path: '/order-confirmation',
      name: 'OrderConfirmation',
      component: OrderConfirmationView,
    }

  ]
})

export default router
