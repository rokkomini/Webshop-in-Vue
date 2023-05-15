import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import ProductSearchView from '../views/ProductSearchView.vue'

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
      path: '/products/:query',
      name: 'ProductSearch',
      component: ProductSearchView,
      props: true
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: CheckoutView,
    },
  ]
})

export default router
