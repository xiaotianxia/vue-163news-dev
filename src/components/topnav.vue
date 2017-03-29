<template>
    <div class="app-topnav">
        <ul>
            <li v-for="item in navItems">
                <router-link :to="item.link">{{item.text}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            navItems: [
                {text:"推荐", link:"/recommend"},
                {text:"娱乐", link:"/entertainment"},
                {text:"图片", link:"/pic"},
                {text:"段子", link:"/joke"}
            ]
        }
    }
}
</script>

<style scoped>
    .app-topnav {
        height: .8rem;
        line-height: .8rem;
        background-color: #f33;
    }
    .app-topnav ul {
        white-space: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        display: -o-box;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        width: 100%;
    }
    .app-topnav ul li {
        display: inline-block;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        vertical-align: middle;
        text-align: center;
    }
    .app-topnav ul li a.active {
        color: #fff;
        font-size: .5rem;
    }
    .app-topnav ul li a {
        display: inline-block;
        width: 100%;
        height: 100%;
        color: rgba(255, 255, 255, .7);
        font-size: .45rem;
    }
</style>
