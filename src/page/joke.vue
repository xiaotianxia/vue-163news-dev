<template>
    <div class="app-joke">
        <top-nav></top-nav>
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
    import TopNav from '../components/topnav.vue'
    export default {
        data () {
            return {
                msg: 'joke'
            }
        },
        components: {
            TopNav
        }
    }
</script>

<style scoped>

</style>
