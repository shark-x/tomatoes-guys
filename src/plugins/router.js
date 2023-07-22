import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  { path: '/', name:'tomatoes', component: () => import('@/views/Tomatoes.vue') },
  { path: '/projects', name:'projects', component: () => import('@/views/Projects.vue') },
  { path: '/scores', name:'scores', component: () => import('@/views/Scores.vue') }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
