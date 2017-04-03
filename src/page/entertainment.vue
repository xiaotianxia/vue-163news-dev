<template>
    <div class="app-entertainment">
        <loading v-show="showLoading"></loading>
        <entertainment-list :entertainmentList="entertainmentList"></entertainment-list>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import EntertainmentList from '../components/entertainmentList.vue'
    import Loading from '../components/loading.vue'
    export default {
        computed: {
            ...mapState([
                'entertainmentList',
                'showLoading',
                'showLoadingMore'
            ])
        },
        methods: {
            ...mapActions(['getEntertainmentList'])
        },
        mounted() {
            this.getEntertainmentList();
        },
        components: {
            EntertainmentList,
            Loading
        }
    }
</script>
