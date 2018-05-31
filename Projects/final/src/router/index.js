import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import EX1 from '@/components/example1'
import EX2 from '@/components/example2'
import EX3 from '@/components/example3'
import EX4 from '@/components/example4'
import EX5 from '@/components/example5'
import EX6 from '@/components/example6'
import EX7 from '@/components/example7'
import EX8 from '@/components/example8'
import EX9 from '@/components/example9'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/ex1',
      name: 'ex1',
      component: EX1
    },{
      path: '/ex2',
      name: 'ex2',
      component: EX2
    },{
      path: '/ex3',
      name: 'ex3',
      component: EX3
    },{
      path: '/ex4',
      name: 'ex4',
      component: EX4
    },{
      path: '/ex5',
      name: 'ex5',
      component: EX5
    },{
      path: '/ex6',
      name: 'ex6',
      component: EX6
    },{
      path: '/ex7',
      name: 'ex7',
      component: EX7
    },{
      path: '/ex8',
      name: 'ex8',
      component: EX8
    },
    {
      path: '/ex9',
      name: 'ex9',
      component: EX9
    }
  ]
})
