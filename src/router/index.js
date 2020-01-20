import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Code from '@/components/code'
import Design from '@/components/design'

import Kis from '@/components/pages/kis'
import Brain from '@/components/pages/brain'
import Scioly from '@/components/pages/scioly'
import Adam from '@/components/pages/adam'
import Nybc from '@/components/pages/nybc'
import Paintball from '@/components/pages/paintball'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/code',
      name: 'Code',
      component: Code
    },
    {
      path: '/design',
      name: 'Design',
      component: Design
    },
    {
      path: '/kis',
      name: 'Kis',
      component: Kis
    },
    {
      path: '/brain',
      name: 'Brain',
      component: Brain
    },
    {
      path: '/scioly',
      name: 'Scioly',
      component: Scioly
    },
    {
      path: '/adam',
      name: 'Adam',
      component: Adam
    },
    {
      path: '/nybc',
      name: 'Nybc',
      component: Nybc
    },
    {
      path: '/paintball',
      name: 'Paintball',
      component: Paintball
    },
    
  ]
})
