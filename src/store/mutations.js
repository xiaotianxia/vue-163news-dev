import * as TYPES from './mutation-types.js'

export default {
	[TYPES.SHOW_LOADING_MORE](state, payload) {
		state.showLoadingMore = payload.showLoadingMoreFlag;
		if(payload.newList) {
			state[payload.listType].push(payload.newList)
		}
	},
	[TYPES.GET_RECOMMEND_LIST](state, payload) {
		state.showLoading = payload.showLoadingFlag;
		state.recommendList = payload.list;
	},
	[TYPES.GET_SLIDERS](state, payload) {
		state.showLoading = payload.showLoadingFlag;
		state.sliders = payload.list;
	},
	[TYPES.GET_PIC_LIST](state, payload) {
		state.showLoading = payload.showLoadingFlag;
		let list = payload.list,
			length = list.length,
			mid = Math.floor(length / 2),
			leftList = list.slice(0, mid),
			rightList = list.slice(mid);
		state.picList = [leftList, rightList];
	},
	[TYPES.GET_JOKE_LIST](state, payload) {
		state.showLoading = payload.showLoadingFlag;
		state.jokeList = payload.list;
	},
	[TYPES.GET_ENTERTAINMENT_LIST](state, payload) {
		state.showLoading = payload.showLoadingFlag;
		state.entertainmentList = payload.list;
	}
}