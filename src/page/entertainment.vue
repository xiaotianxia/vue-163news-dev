<template>
    <div class="entertainment">
        <top-bar></top-bar>
    </div>
</template>

<script>
    import Topbar from '../components/topbar.vue'
    export default {
        name: 'entertainment',
        data () {
            return {
                msg: 'home'
            }
        },
        components: [
            Topbar
        ]
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
