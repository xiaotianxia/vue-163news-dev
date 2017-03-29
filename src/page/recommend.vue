<template>
    <div class="app-recommend">
      <top-bar></top-bar>
    </div>
</template>

<script>
    import TopBar from '../components/topbar.vue'
    export default {
        name: 'recommend',
        data () {
            return {
                msg: 'home'
            }
        },
        components: [
            TopBar
        ]
    }
</script>

<style scoped>

</style>
