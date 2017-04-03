<template>
    <div class="app-pic">
        <!-- <top-nav></top-nav> -->
        <loading v-show="showLoading"></loading>
        <pic-list :picList="picList"></pic-list>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import TopNav from '../components/topnav.vue'
    import PicList from '../components/picList.vue'
    import Loading from '../components/loading.vue'
    export default {
        computed: {
            ...mapState([
                'picList',
                'showLoading',
                'showLoadingMore'
            ])
        },
        methods: {
            ...mapActions(['getPicList'])
        },
        mounted() {
            this.getPicList();
        },
        components: {
            TopNav,
            PicList,
            Loading
        }
    }
</script>
