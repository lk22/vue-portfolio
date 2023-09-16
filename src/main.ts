import {createSSRApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Router} from './router/router'

createSSRApp(App)
  .use(Router)
  .mount('#app')
