import { createRouter, createWebHashHistory,  createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Artikel from '@/views/Artikel.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  ,
  {
    path: '/artikel',
    name: 'Artikel',
    component: Artikel
  }
]

const router = createRouter({
  history:  createWebHistory(),
  routes
})

export default router
