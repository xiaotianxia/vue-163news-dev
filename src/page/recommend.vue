<template>
    <div class="app-recommend">
        <top-nav></top-nav>
        <recommend-list :recommendList="recommendList"></recommend-list>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import TopNav from '../components/topnav.vue'
    import RecommendList from '../components/recommendList.vue'
    export default {
        computed: {
            ...mapState([
                'recommendList'
            ])
        },
        methods: {
            ...mapActions(['getRecommendList'])
        },
        mounted() {
            this.getRecommendList();
        },
        components: {
            TopNav,
            RecommendList
        }
    }
</script>

<style scoped>

</style>
