import axios from 'axios'
import * as types from './mutation-types.js'

/* 异步操作 */
export default {
	getRecommendList({commit, state}) {
		axios.get('../../static/mock/recommendList.json').then((response) => {
			var list = response.data.list;
			if(list) {
				commit(types.GET_RECOMMEND_LIST, list);
			}
		});
	}
}

