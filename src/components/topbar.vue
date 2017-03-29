<template>
    <div class="app-topbar">
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
    .app-topbar {
        height: 43px;
        line-height: 43px;
        background-color: #f33;
    }
    .app-topbar ul {
        white-space: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        display: -o-box;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        width: 100%;
    }
    .app-topbar ul li {
        display: inline-block;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        vertical-align: middle;
        text-align: center;
    }
    .app-topbar ul li a.active {
        color:#3ba94d;
    }
    .app-topbar ul li a {
        color: #4a4a4a;
        font-size: 15px;
    }
</style>
