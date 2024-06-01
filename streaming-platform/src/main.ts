import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
    theme:{
      defaultTheme: 'dark',
    }
  })

const app = createApp(App)

app.use(router).use(vuetify).use(store)

app.mount('#app')
