import {
	GET_RECOMMEND_LIST
} from './mutation-types.js'


export default {
	[GET_RECOMMEND_LIST](state, list) {
		console.log(list);
		state.recommendList = list;
	}
}