import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnimeAll from '../views/AnimeAll.vue'
import AnimeView from '../views/AnimeView.vue'
import AnimeChar from '../views/AnimeChar.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    {
      path: '/animeall',
      name: 'animeall',
      component: AnimeAll
    },

    {
      path: '/anime/:id',
      name: 'anime',
      component:AnimeView

    },{

     path: '/animechar/:id',
     name:'animechar',
     component:AnimeChar

    }
    
  ]
})

export default router
