import Vue from 'vue'
import VueRouter from 'vue-router'
//主路由
import page from '../components/page/page.vue'
import car from '../components/car/car.vue'
import allP from '../components/allP/allP.vue'
import username from '../components/username/username.vue'
import stroll from '../components/stroll/stroll.vue'

//page的子路由
import homepage from '../components/page/homepage/homepage.vue'
import newP from  '../components/page/newP/newP.vue'
import home from '../components/page/home/home.vue'
import cook from '../components/page/cook/cook.vue'
import coat from '../components/page/coat/coat.vue'
import life from '../components/page/life/life.vue'
import soft from '../components/page/soft/soft.vue'
import bed from '../components/page/bed/bed.vue'
import worktravel from '../components/page/worktravel/worktravel.vue'
import lifeVC from '../components/page/lifeVC/lifeVC.vue'


//详情页路由
import detail from '../components/detail/detail.vue'

//登录路由
 import usernamelogin from '../components/usernamelogin/usernamelogin.vue'

//注册路由
import usernameregister from '../components/usernameregister/usernameregister.vue'

//设置路由

import setting from '../components/setting/setting.vue'
Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'page'
    },
    {
      path: '/page',
      component: page,
      children:[
        {
          path: '/',
          redirect: '/homepage'
        },
        {
          path: '/homepage',
          component: homepage
        },

        {
          path: '/newP',
          component: newP
        },
        {
          path: '/home',
          component: home
        },
        {
          path: '/cook',
          component: cook
        },
        {
          path: '/coat',
          component: coat
        },
        {
          path: '/life',
          component: life
        },
        {
          path: '/soft',
          component: soft
        },
        {
          path: '/bed',
          component: bed
        },
        {
          path: '/worktravel',
          component: worktravel
        },
        {
          path: '/lifeVC',
          component: lifeVC
        }
      ]
    },
    {
      path: '/allP',
      component: allP
    },

    {
      path: '/stroll',
      component: stroll
    },
    {
      path: '/car',
      component: car
    },
    {
      path: '/cook',
      component: cook
    },
    {
      path: '/coat',
      component: coat
    },
    {
      path: '/username',
      component: username
    },
    {
      path: '/detail/:id',
      component: detail
    },
    {
      path: '/usernamelogin',
      component: usernamelogin
    },
    {
      path: '/usernameregister',
      component: usernameregister
    },
    {
      path: '/setting',
      component: setting
    }
  ]
})
