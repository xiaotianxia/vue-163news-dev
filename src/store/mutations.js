import * as TYPES from './mutation-types.js'


export default {
	[TYPES.GET_RECOMMEND_LIST](state, list) {
		state.recommendList = list;
	},
	[TYPES.GET_PIC_LIST](state, list) {
		state.picList = list;
	},
	[TYPES.GET_JOKE_LIST](state, list) {
		state.jokeList = list;
	}
}