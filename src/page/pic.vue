<template>
    <div class="app-pic">
        <top-nav></top-nav>
        <pic-list :picList="picList"></pic-list>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import TopNav from '../components/topnav.vue'
    import PicList from '../components/picList.vue'
    export default {
        computed: {
            ...mapState([
                'picList'
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
            PicList
        }
    }
</script>

<style scoped>

</style>
