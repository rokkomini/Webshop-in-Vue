import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import "bootstrap/dist/css/bootstrap.css";

import App from './App.vue'
import router from './router'

import './assets/styles/layout.scss'

const app = createApp(App)
/* add the icons in use in project here */
library.add(faInstagram)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(createPinia())


app.mount('#app')

import "bootstrap/dist/js/bootstrap.js";
