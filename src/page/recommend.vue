<template>
    <div class="app-recommend">
        <loading v-show="showLoading"></loading>
        <sliders></sliders>
        <recommend-list :recommendList="recommendList"></recommend-list>
        <loading v-show="showLoadingMore"></loading>
    </div>
</template>

<script>
    import _ from 'underscore'
    import {mapState, mapActions} from 'vuex'
    import Sliders from '../components/sliders.vue'
    import RecommendList from '../components/recommendList.vue'
    import Loading from '../components/loading.vue'
    export default {
        computed: {
            ...mapState([
                'recommendList',
                'showLoading',
                'showLoadingMore'
            ])
        },
        methods: {
            ...mapActions(['getRecommendList', 'onHandleScroll'])
        },
        mounted() {
            this.getRecommendList();
            window.addEventListener('scroll', 
                _.debounce(() => {
                    this.onHandleScroll('recommendList');
                }, 500));
        },
        components: {
            RecommendList,
            Sliders,
            Loading
        }
    }
</script>
