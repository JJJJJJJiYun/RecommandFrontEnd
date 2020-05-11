import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Item from '../views/Item.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: List
  },
  {
    path: '/tech_results',
    name: 'TechResults',
    component: List
  },
  {
    path: '/cases',
    name: 'Cases',
    component: List
  },
  {
    path: '/patents',
    name: 'Patents',
    component: List
  },
  {
    path: '/company_needs',
    name: 'CompanyNeeds',
    component: List
  },
  {
    path: '/city_needs',
    name: 'CityNeeds',
    component: List
  },
  {
    path: '/solution/:id',
    name: 'Solution',
    component: Item
  },
  {
    path: '/tech_result/:id',
    name: 'TechResult',
    component: Item
  },
  {
    path: '/case/:id',
    name: 'Case',
    component: Item
  },
  {
    path: '/patent/:id',
    name: 'Patent',
    component: Item
  },
  {
    path: '/company_need/:id',
    name: 'CompanyNeed',
    component: Item
  },{
    path: '/city_need/:id',
    name: 'CityNeed',
    component: Item
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
