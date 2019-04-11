//___________________________________________________________________________________________________ Vue Init  __//

import Vue from 'vue'
Vue.config.productionTip = false

//___________________________________________________________________________________________________ App Init And Config  __//

import App from '@/App'
import router from '@/router'
import store from '@/store'

/* Vue Instance Config */
new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
