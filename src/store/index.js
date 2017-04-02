import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex);

/* 项目全局State */
const state = {
	recommendList: [],
	showLoading: false,
	showLoadingMore: false,
	sliders: [],
	picList: [],
	jokeList: [],
	entertainmentList: []
}

/* Store实例 */
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})