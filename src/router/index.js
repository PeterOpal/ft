import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import Shop from '../views/Shop.vue'
import ProductView from '@/views/ProductView.vue'
import ShoppingCart from '@/views/ShoppingCart.vue'
import AboutView from '@/views/AboutView.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/shop/product', 
      name: 'product-view',
      component: ProductView,
    },
    {
      path: '/shoppingCart', 
      name: 'shoppingCart',
      component: ShoppingCart,
    },
    {
      path: '/about', 
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact', 
      name: 'contact',
      component: Contact,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  }
})

export default router
