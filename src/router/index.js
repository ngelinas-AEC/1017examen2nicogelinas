import Vue from 'vue';
import VueRouter from 'vue-router';

import Accueil from '../views/Accueil.vue';
import Contact from '../views/Contact.vue';
import Projet from '../views/Projet.vue';

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'accueil',
    component: Accueil
  },
  {
    path: '/accueil',
    name: 'accueil',
    component: Accueil
  },
  {
    path: '/projet',
    name: 'projet',
    component: Projet
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/apropos',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
