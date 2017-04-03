<template>
    <div class="app-joke">
        <loading v-show="showLoading"></loading>
        <joke-list :jokeList="jokeList"></joke-list>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
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
            JokeList,
            Loading
        }
    }
</script>
