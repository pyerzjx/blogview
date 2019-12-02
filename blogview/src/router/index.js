import Vue from 'vue'
import Router from 'vue-router'
import Team from '@/components/Team'
import Home from '@/components/Home'
import Open from '@/components/Open'
import Column from '@/components/Column'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Column',
      name: 'Column',
      component:Column
    },
    {
      path: '/Open',
      name: 'Open',
      component:Open
    },
    {
      path: '/Team',
      name: 'Team',
      component:Team
    },
    
  ]
})
