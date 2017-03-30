import axios from 'axios'
import * as types from './mutation-types.js'

/* 异步操作 */
export default {
	getRecommendList({commit, state}) {
		axios.get('./mock/recommendList.json').then((response) => {
			if(response.data.status == 1) {
				var list = response.data.list;
				commit(types.GET_RECOMMEND_LIST, list);
			}
		});
	},
	getPicList({commit, state}) {
		axios.get('./mock/picList.json').then((response) => {
			if(response.data.status == 1) {
				var list = response.data.list,
					length = list.length,
					mid = Math.floor(length / 2),
					leftList = list.slice(0, mid),
					rightList = list.slice(mid);
				list = [leftList, rightList];
				commit(types.GET_PIC_LIST, list);
			}
		});
	},
	getJokeList({commit, state}) {
		axios.get('./mock/jokeList.json').then((response) => {
			if(response.data.status == 1) {
				var list = response.data.list;
				commit(types.GET_JOKE_LIST, list);
			}
		});
	}
}

