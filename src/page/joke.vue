<template>
    <div class="app-joke">
        <top-nav></top-nav>
        <joke-list :jokeList="jokeList"></joke-list>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import TopNav from '../components/topnav.vue'
    import JokeList from '../components/jokeList.vue'
    export default {
        computed: {
            ...mapState([
                'jokeList'
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
            JokeList
        }
    }
</script>

<style scoped>

</style>
