<template>
    <div id="app">
    	<div class="app-topbar">
            <div class="app-topbar-my"></div>
            <div class="app-topbar-logo"></div>
        </div>
    	<top-nav></top-nav>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
	import TopNav from './components/topnav.vue'
    export default {
        components: {
            TopNav
        }
    }
</script>

<style scoped>
	#app {
	    font-family: 'Avenir', Helvetica, Arial, sans-serif;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	    text-align: center;
	    color: #2c3e50;
	}
	.app-topbar {
        position: fixed;
        width: 100%;
        padding: .15rem 0;
        background-color: #fff;
        z-index: 99;
    }
    .app-topbar-logo {
        margin: 0 auto;
        width: 2.4rem;
        height: .5rem;
        background: url('http://7xlxgg.com1.z0.glb.clouddn.com/app-logo.png') 50% 50% no-repeat;
        background-size: 100%;
    }
    .app-recommend,
    .app-entertainment,
    .app-pic,
    .app-joke,
    .app-pe,
    .app-health,
    .app-army {
        padding-top: 1.6rem;
    }
</style>
