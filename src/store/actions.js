import axios from 'axios'
import * as types from './mutation-types.js'
let num = 0;

/* 异步操作 */
export default {
	getRecommendList({commit, state}) {
		let showLoadingFlag,
			list = [];
		commit(types.GET_RECOMMEND_LIST, {list, showLoadingFlag: true});
		axios.get('./mock/recommendList.json').then((response) => {
			if(response.data.status == 1) {
				list = response.data.list;
				setTimeout(() => {
					commit(types.GET_RECOMMEND_LIST, {list, showLoadingFlag: false});
				}, 1 * 1000);
			}
		});
	},

	onHandleScroll({commit, state}, listType) {
		commit(types.SHOW_LOADING_MORE, {listType, undefined, showLoadingMoreFlag: true});
		let iOffset = document.body.clientHeight - window.scrollY - window.innerHeight;
		console.log(listType);
		if(iOffset <= 0) {
			setTimeout(() => {
				num++;
				let newList = {"addata":null,"category":"新闻","digest":"天津市政协原副主席、市公安局原局长武长顺贪污、受贿、挪用公款","docid":"CGN9QUEO0001899O","imgsrc3gtype":1,"link":"http://3g.163.com/touch/article.html?docid=CGN9QUEO0001899O","imgurl":"http://cms-bucket.nosdn.127.net/232ee3d46bba45b0adbbbf9548ae031220170329171912.jpeg","ptime":"2017-03-29 17:13:21","source":"央视","tag":"","tcount":37619,"title":"new-" + num + "武长顺贪污受贿案一审:被控非法占有公款超3.4亿","type":"doc","typeid":""};
				commit(types.SHOW_LOADING_MORE, {listType, newList, showLoadingMoreFlag: true});
			}, 1 * 1000);
		}
	},

	getSliders({commit, state}) {
		let showLoadingFlag,
			list = [];
		commit(types.GET_SLIDERS, {list, showLoadingFlag: true});
		axios.get('./mock/sliders.json').then((response) => {
			if(response.data.status == 1) {
				list = response.data.list;
				setTimeout(() => {
					state.showLoading = false;
					commit(types.GET_SLIDERS, {list, showLoadingFlag: false});
				}, 1 * 1000);
			}
		});
	},

	getPicList({commit, state}) {
		let showLoadingFlag,
			list = [];
		commit(types.GET_PIC_LIST, {list, showLoadingFlag: true});
		axios.get('./mock/picList.json').then((response) => {
			if(response.data.status == 1) {
				list = response.data.list;
				setTimeout(() => {
					commit(types.GET_PIC_LIST, {list, showLoadingFlag: false});
				}, 1 * 1000);
			}
		});
	},

	getJokeList({commit, state}) {
		let showLoadingFlag,
			list = [];
		commit(types.GET_JOKE_LIST, {list, showLoadingFlag: true});
		axios.get('./mock/jokeList.json').then((response) => {
			if(response.data.status == 1) {
				let list = response.data.list;
				setTimeout(() => {
					commit(types.GET_JOKE_LIST, {list, showLoadingFlag: false});
				}, 1 * 1000);
			}
		});
	},

	getEntertainmentList({commit, state}) {
		let showLoadingFlag,
			list = [];
		commit(types.GET_ENTERTAINMENT_LIST, {list, showLoadingFlag: true});
		axios.get('./mock/entertainmentList.json').then((response) => {
			if(response.data.status == 1) {
				list = response.data.list;
				setTimeout(() => {
					commit(types.GET_ENTERTAINMENT_LIST, {list, showLoadingFlag: false});
				}, 1 * 1000);
			}
		});
	}
}

