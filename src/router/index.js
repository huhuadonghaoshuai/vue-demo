import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: resolve => require(['../pages/login.vue'], resolve)
    },
    {
      path:'/',
      redirect:'/welcome',
      component: resolve => require(['../pages/home.vue'], resolve),
      children:[
        {
          path: '/welcome',
          component: resolve => require(['../pages/welcome.vue'], resolve)
        },
        {
          path: '/my-task/done-task',
          component: resolve => require(['../pages/my-task/done-task'], resolve)
        },
        {
          path: '/my-task/toDo-task',
          component: resolve => require(['../pages/my-task/toDo-task'], resolve)
        },
        {
          path: '/manager/manager',
          component: resolve => require(['../pages/manager/manager'], resolve)
        },
        {
          path: '/manager/product',
          component: resolve => require(['../pages/manager/product'], resolve)
        },
      ]
    },    
  ]
})
