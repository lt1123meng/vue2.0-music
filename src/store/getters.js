export const singer = state => state.singer

/*
 * 箭头函数
 * singer = state => state.singer
 * ===
 * const singer = function（state）{
 *   return state.singer
 * }
 * */

export const playing = state => state.playing

// 是否全屏展示播放器

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}

export const disc = state => state.disc

export const topList = state => state.topList

export const searchHistory = state => state.searchHistory

export const playHistory = state => state.playHistory

export const favoriteList = state => state.favoriteList
