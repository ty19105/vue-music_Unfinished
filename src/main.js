import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

fastclick.attach(document.body) // 去除300毫秒延迟
import './common/stylus/index.styl'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
