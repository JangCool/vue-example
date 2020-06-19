import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { store } from '@/store'

createApp(App)
  .use(router)
  .use(store)
  .directive('focus', function (el, binding) {
    console.log(binding)
    el.focus()
  })
  .mount('#app')
