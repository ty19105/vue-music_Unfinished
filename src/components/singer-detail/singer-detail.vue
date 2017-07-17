<template>
  <transition name="slide">
    <musiclist :songs="songs" :title="title" :bg-image="bgImage"></musiclist>
  </transition>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import {mapGetters} from 'vuex' // vuex封装的获取值的语法糖
  import {getSingerDetail} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import {createSong} from 'common/js/song'

  import Musiclist from 'components/music-list/music-list.vue'
  export default {
    data() {
      return {
        songs: []
      }
    },
    computed: {
      title() {
        return this.singer.name
      },
      bgImage() {
        return this.singer.avatar
      },
      ...mapGetters(['singer'])
    },
    created() {
      this._getDetail()
      // console.log(this.singer)
    },
    methods: {
      _getDetail() { // 获取歌手详情
        if (!this.singer.id) {
          this.$router.push('/singer') // 如果在歌手详情页面刷新 回退到歌手列表页面
          return
        }
        getSingerDetail(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.data.list)
            // console.log(this.songs)
          }
        })
      },
      // 抽取歌手详情数据
      _normalizeSongs(list) {
        let ret = []
        $.each(list, (index, item) => {
          let {musicData} = item
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    },
    components: {
      Musiclist
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .singer-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: $color-background

  .slide-enter-active, .slide-leave-active
    transition: all 0.5s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
