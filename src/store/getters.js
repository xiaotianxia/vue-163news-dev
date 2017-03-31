export default {
	recommendList: state => state.recommendList,
	picList: state => {
		var list = state.picList,
			length = list.length,
			mid = Math.floor(length / 2),
			leftList = list.slice(0, mid),
			rightList = list.slice(mid);
		state.picList = [leftList, rightList];
		return state.picList;
	},
	jokeList: state => state.jokeList
}