import { createRouter, createWebHistory } from 'vue-router'

// Import your page components (or use lazy loading)
import Home from '../page/Homepage.vue'
import Aboutpage from '../page/Aboutpage.vue'
import Contactpage from '../page/Contactpage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: Aboutpage },
  { path: '/contact', name: 'Contact', component: Contactpage}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router