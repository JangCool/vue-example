import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { store } from '@/store'
import DirectiveFocus from '@/directives/DirectiveFocus.js'
import utils from '@/plugins/utils.plugin.js'

createApp(App)
  .use(router)
  .use(store)
  .use(utils)
  .directive('focus', DirectiveFocus)
  .mount('#app')
