import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
import Reacommend from '../components/recommend/recommend.vue'
import Singer from '../components/singer/singer.vue'
import Rank from '../components/rank/rank.vue'
import Search from '../components/search/search.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommend',
      component: Reacommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
