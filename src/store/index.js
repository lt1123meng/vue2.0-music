/*
* vuex实际上是一个仓库
* */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
/*
* 初始化一个仓库，注入初始化Vue中
* */
export default new Vuex.Store({
  actions,  //Action 提交的是 mutation，而不是直接变更状态。
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
