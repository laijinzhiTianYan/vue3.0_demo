/*
 * @Author: shiwh
 * @Date: 2020-03-19 09:23:52
 * @LastEditors: shiwh
 * @LastEditTime: 2020-03-19 09:28:49
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCompositionApi from '@vue/composition-api'
Vue.config.productionTip = false

Vue.use(VueCompositionApi)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
