import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/index',
    name: 'index',
    redirect: '/graphic',
    component: () => import('../views/Index.vue'),
    children:[
      {
        path:'/graphic',
        components: {
        graphic: () => import('../components/data/Graphic.vue'),
        }
      },
      {
        path:'/table',
        components: {
        table: () => import('../components/data/Table.vue'),
        }
      }
    ]
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
