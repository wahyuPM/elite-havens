import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Default from '../views/layouts/DefaultLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Default,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/home/HomePage.vue'),
        meta: {
          title: 'Elite Havens Luxury Villa Rentals and Management'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
