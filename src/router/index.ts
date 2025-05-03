import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImageView from '@/views/ImageView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/image/:imageUrl/:description',
      name: 'ImageView',
      component: ImageView,
      props: true,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
    },
 
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue'),
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('../views/Products.vue'),
    },
  ],
})

export default router
