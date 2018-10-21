import Vue from 'vue'
import Vuex from 'vuex'
import header from './module/header'
import breadcrumbs from './module/breadcrumbs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    header,
    breadcrumbs
  }
})
