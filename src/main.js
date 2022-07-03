
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// eslint-disable-next-line no-unused-vars
global.jQuery = require('jquery');
const $ = global.jQuery;
window.$ = $;

Vue.config.productionTip = false

require('bootstrap')
require('font-awesome/css/font-awesome.css')
require('@/assets/css/main.css')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
