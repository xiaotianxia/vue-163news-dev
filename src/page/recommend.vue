<template>
    <div class="app-recommend">
        <top-nav></top-nav>
        <sliders></sliders>
        <recommend-list :recommendList="recommendList"></recommend-list>
        <loading v-show="showLoading" id="loading"></loading>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import TopNav from '../components/topnav.vue'
    import Sliders from '../components/sliders.vue'
    import RecommendList from '../components/recommendList.vue'
    import Loading from '../components/loading.vue'
    export default {
        computed: {
            ...mapState([
                'recommendList',
                'showLoading'
            ])
        },
        methods: {
            ...mapActions(['getRecommendList', 'onScroll'])
        },
        mounted() {
            this.getRecommendList();
            window.addEventListener('scroll',this.onScroll);
        },
        components: {
            TopNav,
            RecommendList,
            Sliders,
            Loading
        }
    }
</script>
