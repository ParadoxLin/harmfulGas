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
      {
        path:'alertinfo',
        component: () => import('../views/alertManagement/AlertInfo.vue'),
      },
      {
        path:'alertsetting',
        component: () => import('../views/alertManagement/AlertSetting.vue'),
      },
      {
        path:'emergencyplan',
        component: () => import('../views/alertManagement/EmergencyPlan.vue'),
      },
      {
        path:'devicemanagement',
        component: () => import('../views/deviceManagement/DeviceInfo.vue'),
      },
      {
        path:'devicequery',
        component: () => import('../views/deviceQuery/DeviceQuery.vue'),
      },
      {
        path:'usersetting',
        component: () => import('../views/setting/UserSetting.vue'),
      },
      {
        path:'departmentsetting',
        component: () => import('../views/setting/DepartmentSetting.vue'),
      },
      {
        path:'authoritysetting',
        component: () => import('../views/setting/AuthoritySetting.vue'),
      },
      {
        path:'help',
        component: () => import('../views/setting/Help.vue'),
      },
      {
        path:'aboutus',
        component: () => import('../views/setting/AboutUs.vue'),
      },
    ]
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
