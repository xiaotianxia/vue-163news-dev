<template>
    <div class="app-entertainment">
        <top-nav></top-nav>
        <entertainment-list :entertainmentList="entertainmentList"></entertainment-list>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import TopNav from '../components/topnav.vue'
    import EntertainmentList from '../components/entertainmentList.vue'
    export default {
        computed: {
            ...mapState([
                'entertainmentList'
            ])
        },
        methods: {
            ...mapActions(['getEntertainmentList'])
        },
        mounted() {
            this.getEntertainmentList();
        },
        components: {
            TopNav,
            EntertainmentList
        }
    }
</script>
