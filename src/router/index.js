import { createRouter, createWebHashHistory } from 'vue-router'
import Home    from '../views/HomeView.vue'
import Games   from '../views/GamesView.vue'
import Detail  from '../views/GameDetailView.vue'
import Privacy from '../views/PrivacyPolicyView.vue'
import About   from '../views/AboutView.vue'
import Contact from '../views/ContactView.vue'

const routes = [
  { path: '/',         name: 'Home',    component: Home    },
  { path: '/games',    name: 'Games',   component: Games   },
  { path: '/game/:id', name: 'Detail',  component: Detail  },
  { path: '/game/:id/privacy', name: 'PrivacyPolicy', component: Privacy },
  { path: '/about',    name: 'About',   component: About   },
  { path: '/contact',  name: 'Contact', component: Contact },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0, behavior: 'smooth' } }
})

export default router
