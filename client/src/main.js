import 'vite/modulepreload-polyfill'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping, faHouse, faMagnifyingGlass, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'


import App from './App.vue'
import router from './router'

import './assets/styles/style.scss'

const app = createApp(App)
library.add(faInstagram, faCartShopping, faHouse, faMagnifyingGlass, faTrash, faXmark)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
