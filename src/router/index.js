import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/index',
    name: 'index',
    redirect: '/index/graphic',
    component: () => import('../views/Index.vue'),
    children:[
      {
        path:'graphic',
        component: () => import('../views/data/Graphic.vue'),
      },
      {
        path:'table',
        component: () => import('../views/data/Table.vue'),
      },
      {
        path:'monitoringdata',
        component: () => import('../views/dataQuery/MonitoringData.vue'),
      },
      {
        path:'historydata',
        component: () => import('../views/dataQuery/HistoryData.vue'),
      },
      {
        path:'reportform',
        component: () => import('../views/reportForm/ReportForm.vue'),
      },
    ]
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
