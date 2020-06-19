import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { store } from '@/store'
import DirectiveFocus from '@/directives/DirectiveFocus.js'

createApp(App)
  .use(router)
  .use(store)
  .directive('focus', DirectiveFocus)
  .mount('#app')
