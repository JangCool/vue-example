import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/pages/Main.vue'
import ChartCard from '@/components/cards/ChartCard.vue'
import FormExample from '@/pages/form/FormExample.vue'
import DirectiveExample from '@/pages/directive/DirectiveExample.vue'
import LifeCycleExample from '@/pages/lifecycle/LifeCycleExample.vue'
import EventExample from '@/pages/event/EventExample.vue'
import AxiosExample from '@/pages/axios/AxiosExample.vue'
import Profile from '@/pages/user/Profile.vue'
import Posts from '@/pages/user/Posts.vue'
import OtherHeader from '@/layout/default/DefaultHeader.vue'
import VuexExample from '@/pages/vuex/VuexExample.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      body: Main
    }
  },
  {
    path: '/user',
    name: 'User',
    component: Profile
  },
  {
    path: '/user/:id',
    name: 'User',
    component: Profile,
    children: [
      // UserPosts will be rendered inside User's <router-view>
      // when /user/:id/posts is matched
      { path: '', component: Profile },
      // UserPosts will be rendered inside User's <router-view>
      // when /user/:id/posts is matched
      { path: 'posts', component: Posts }
    ]
  },
  {
    path: '/chart-card',
    name: 'Chart Card',
    component: ChartCard
  },
  {
    path: '/example/form',
    name: 'Form Example',
    components: {
      header: OtherHeader,
      body: FormExample
    }
  },
  {
    path: '/example/directive',
    name: 'Directive Example',
    component: DirectiveExample
  },
  {
    path: '/example/lifecycle',
    name: 'LifeCycle Example',
    component: LifeCycleExample
  },
  {
    path: '/example/event',
    name: 'Event Example',
    component: EventExample
  },
  {
    path: '/example/axios',
    name: 'Axios Example',
    component: AxiosExample
  },
  {
    path: '/example/vuex',
    name: 'Vuex Example',
    component: VuexExample
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // react to route changes...
  // don't forget to call next()
  console.log('to', to)
  console.log('from', from)
  console.log('next', next)
  next()
})

export default router
