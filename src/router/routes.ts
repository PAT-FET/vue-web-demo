import { RouteConfig } from 'vue-router/types/router'

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'tmr',
    component: () => import('@/views/Home.vue'),
    meta: { pid: 'tmr', cname: '首页' },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { pid: 'tmr.dashboard', cname: '仪表盘' }
      }
    ]
  },
  // DON'T CHANGE BELOW
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/error/:code',
    name: 'error',
    component: () => import('@/views/error/index.vue')
  },
  {
    path: '',
    redirect: '/'
  },
  {
    path: '*',
    redirect: '/error/404'
  }
]
