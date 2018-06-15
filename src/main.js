// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入elementui
import Element from 'element-ui'
import '../theme/index.css'
Vue.use(Element)
import router from './router'

// 引入公共组件
import htTable from '@/components/layout/ht-table'
Vue.component('htTable', htTable)
import htPage from '@/components/layout/ht-page'
Vue.component('htPage', htPage)
import htCard from '@/components/layout/ht-card'
Vue.component('htCard', htCard)
import htDialog from '@/components/layout/ht-dialog'
Vue.component('htDialog', htDialog)
import htControlBar from '@/components/layout/ht-control-bar'
Vue.component('htControlBar', htControlBar)

import { createHttp, bindVue} from './http/axios.js';
createHttp()


Vue.config.productionTip = false

/* eslint-disable no-new */
const vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
bindVue(vue)
