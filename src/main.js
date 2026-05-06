import { createApp } from 'vue'
import App    from './App.vue'
import router from './router/index.js'
import './assets/css/main.css'

import Tres from '@tresjs/core'

createApp(App).use(router).use(Tres).mount('#app')
