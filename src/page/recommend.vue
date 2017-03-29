<template>
    <div class="app-recommend">
        <top-nav></top-nav>
        <ul>
            <li class="m_article" v-for="item in recommendList">
                <a :href="item.link">
                    <div class="m_article_img">
                        <img :src="item.imgurl">
                        <!-- <img src="http://cms-bucket.nosdn.127.net/e5cb3fe8808b4b578002098fa1c947fc20170329202104.png"> -->
                    </div>
                    <div class="m_article_info">
                        <div class="m_article_title">
                            <span>{{item.title}}</span>
                        </div>
                        <div class="m_article_desc clearfix">
                            <div class="m_article_desc_l">
                                <span class="m_article_channel">{{item.category}}</span>
                                <span class="m_article_time">{{item.ptime}}</span>
                            </div>
                            <div class="m_article_desc_r">
                                <div class="left_hands_desc">
                                    <span class="iconfont"></span>{{item.tcount}}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import TopNav from '../components/topnav.vue'
    export default {
        computed: {
            ...mapState([
                'recommendList'
            ])
        },
        methods: {
            ...mapActions(['getRecommendList'])
        },
        mounted() {
            this.getRecommendList();
        },
        components: {
            TopNav
        }
    }
</script>

<style scoped>
    .m_article{font-size:.24rem;padding:.2rem 0;border-bottom:1px solid #e5e5e5;margin:0 .3rem}
    .m_article .m_article_img{float:left;width:27%;height:1.4rem;overflow:hidden;position:relative;margin-right:.2rem}
    .m_article .m_article_img .m_article_mark{color:#fff;background:#5da3e9;font-size:.28rem;text-align:center;padding:.04rem;position:absolute;display:inline-block;left:0;top:0;width:.6rem;height:.4rem;line-height:.4rem;opacity:.9}
    .m_article .m_article_img img{width:100%;display:block;min-height:1.4rem}
    .m_article .m_article_desc .m_article_channel{display:inline-block;color:#f33;font-size:12px;padding:2px;line-height:12px;margin-right:.1rem;background:url(http://img2.cache.netease.com/f2e/wap/common/images/border_red.png) no-repeat;background-size:100% 100%}
    .m_article .m_article_desc .m_article_time{font-size:.24rem;color:#888;display:inline-block}
    .m_article .m_article_desc .m_article_desc_l{float:left}
    .m_article .m_article_desc .m_article_desc_r{float:right;background-size:contain;background-position:left 0;background-repeat:no-repeat;color:#888;line-height:.37rem}
    .m_article .m_article_desc .m_article_desc_r .iconfont{padding:0 .1rem 0 0;display:inline-block;font-size:.28rem;color:#a8a8a8}
    .m_article .m_article_info{overflow:hidden;padding-bottom:4px}
    .m_article .m_article_info .m_article_title{font-size:.34rem;margin-bottom:.2rem;color:#404040;line-height:.42rem;width:100%;display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;-webkit-line-break:auto;-webkit-box-orient:vertical}
    .m_article .m_article_hot{margin-top:.17rem;float:left;height:.42rem;width:100%}
    .m_article .m_article_hot .m_article_hot_icon{color:#fff;background:#4c9aea;border-radius:.5rem;text-align:center;padding:.05rem;line-height:.3rem;width:1.11rem;height:.3rem;float:left;position:relative}
    .m_article .m_article_hot .m_article_hot_icon:after{content:"";display:block;position:absolute;bottom:-0.05rem;right:-0.04rem;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:10px solid #4c9aea}
    .m_article .m_article_hot .m_article_hot_content{margin-left:.15rem;float:left}
    .m_article .m_article_hot .m_article_hot_content a{display:inline-block;color:#4c9aea;font-size:.28rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:5.5rem}
    .m_article_m0{min-height:1.4rem}
    .m_article_m1{min-height:1.4rem}
    .m_article_m1 .m_article_title{display:none}
    .m_article_m1 .m_article_img{width:100%;margin:0}
</style>
