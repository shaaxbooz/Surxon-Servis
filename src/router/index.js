import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Leadership from '../views/Leadership.vue'
import Merchandise from '../views/Merchandise.vue'
import Servis from '../views/Servis.vue'
import Chain from '../views/Chain.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/leadership',
    name: 'Leadership',
    component: Leadership
  },
  {
    path: '/merchandise',
    name: 'Merchandise',
    component: Merchandise
  },
  {
    path: '/servis',
    name: 'Servis',
    component: Servis
  },
  {
    path: '/chain',
    name: 'Chain',
    component: Chain
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
