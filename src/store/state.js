import {playMode} from '../common/js/config'
const state = {
  singer: {}, //歌手
  playing: false, // 播放状态
  fullScreen: false, // 全屏
  playList: [], // 播放列表
  sequenceList: [], // 排序列表
  mode: playMode.sequence, //播放模式
  currentIndex: -1 // 当前播放的歌曲索引
}

export default state
