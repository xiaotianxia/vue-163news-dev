<template>
    <div class="app-joke">
        <top-nav></top-nav>
        <loading v-show="showLoading"></loading>
        <joke-list :jokeList="jokeList"></joke-list>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import TopNav from '../components/topnav.vue'
    import JokeList from '../components/jokeList.vue'
    import Loading from '../components/loading.vue'
    export default {
        computed: {
            ...mapState([
                'jokeList',
                'showLoading',
                'showLoadingMore'
            ])
        },
        methods: {
            ...mapActions(['getJokeList'])
        },
        mounted() {
            this.getJokeList();
        },
        components: {
            TopNav,
            JokeList,
            Loading
        }
    }
</script>
