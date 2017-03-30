<template>
    <div class="app-entertainment">
        <top-nav></top-nav>
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
    import TopNav from '../components/topnav.vue'
    export default {
        data () {
            return {
                msg: 'entertainment'
            }
        },
        components: {
            TopNav
        }
    }
</script>

<style scoped>
    
</style>
