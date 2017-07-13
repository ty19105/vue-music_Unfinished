import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

fastclick.attach(document.body) // 去除300毫秒延迟
import './common/stylus/index.styl'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
