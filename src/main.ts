import "vuetify/dist/vuetify-labs.css"

import { createApp } from 'vue'
import { vuetify } from './vuetify.js'
import App from './App.vue'
import './setup.js'

const app = createApp(App)
app.config.errorHandler = e => console.error(e)
app.use(vuetify)
  .mount('#app')
