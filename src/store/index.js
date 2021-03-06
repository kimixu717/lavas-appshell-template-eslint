/**
 * @file store index
 * @author KimiXu(xuyujin@banggood.cn)
 */

import Vue from 'vue'
import Vuex from 'vuex'
import appShell from './modules/app-shell'

Vue.use(Vuex)

let store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    appShell
  }
})

export default store

// 初始化状态拷贝,用于清除vuex数据，使其恢复初始状态
// 正式项目时，用于退出登录清除vuex中关于个人用户的数据
const initialState = JSON.parse(JSON.stringify(store.state.appShell))

export function resetApp() {
  store.state.appShell = initialState
}
