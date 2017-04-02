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
                {text:"段子", link:"/joke"},
                {text:"体育", link:"/pe"},
                {text:"健康", link:"/health"},
                {text:"军事", link:"/army"}
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    .app-topnav {
        position: fixed;
        width: 100%;
        top: .8rem;
        z-index: 99;
        background-color: #f33;
        &::-webkit-scrollbar {
            display: none;
        }
        ul {
            white-space: nowrap;
            overflow-x: auto;
            // display: flex;
            width: 100%;
            li {
                display: inline-block;
                height: .8rem;
                line-height: .8rem;
                width: 2rem;// flex: 1;
                vertical-align: middle;
                text-align: center;
                a {
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    color: rgba(255, 255, 255, .7);
                    font-size: .45rem;
                    transition: all .5s ease;
                    &.router-link-active {
                        color: #fff;
                        font-size: .5rem;
                    }
                }
            }
        }
    }
</style>
