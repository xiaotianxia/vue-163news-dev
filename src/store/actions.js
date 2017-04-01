import axios from 'axios'
import * as types from './mutation-types.js'
var vHeight = window.screen.height || window.innerHeight;

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
	onScroll() {
		var oLoading = document.querySelector('#loading'),
			loadingTop = oLoading.scrollWidth;
		console.log(loadingTop);
	},
	getSliders({commit, state}) {
		axios.get('./mock/sliders.json').then((response) => {
			if(response.data.status == 1) {
				var list = response.data.list;
				commit(types.GET_SLIDERS, list);
			}
		});
	},
	getPicList({commit, state}) {
		axios.get('./mock/picList.json').then((response) => {
			if(response.data.status == 1) {
				var list = response.data.list;
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
	},
	getEntertainmentList({commit, state}) {
		axios.get('./mock/entertainmentList.json').then((response) => {
			if(response.data.status == 1) {
				var list = response.data.list;
				setTimeout(function() {
					commit(types.GET_ENTERTAINMENT_LIST, list);
				}, 1 * 1000);
			}
		});
	}
}

