import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: () => import( '../views/Categorias.vue')
  },
  {
    path: '/articulos',
    name: 'Articulos',
    component: () => import( '../views/Articulos.vue')
  },
  {
    path: '/ingresos',
    name: 'Ingresos',
    component: () => import( '../views/Ingresos.vue')
  },
  {
    path: '/ventas',
    name: 'ventas',
    component: () => import( '../views/Ventas.vue')
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import( '../views/Usuarios.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
