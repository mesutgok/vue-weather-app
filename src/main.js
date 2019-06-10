//___________________________________________________________________________________________________ Vue Init  __//

import Vue from 'vue'
Vue.config.productionTip = false

//___________________________________________________________________________________________________ App Init And Config  __//


import App from '@/App'
import router from '@/router'
import store from '@/store'

//___________________________________________________________________________________________________ Sentry Config  __//

import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Sentry.init({
  dsn: 'https://21eaa7a9e4e24ec8adcffae1578cebed@sentry.io/1478615',
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
});

/* Vue Instance Config */
new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
