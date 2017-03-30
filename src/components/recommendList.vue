<template>
    <div class="app-recommendList">
        <ul>
            <li class="app_list" v-for="item in recommendList">
                <a :href="item.link">
                    <div class="app_list_img">
                        <img :src="item.imgurl">
                    </div>
                    <div class="app_list_info">
                        <div class="app_list_title">
                            <span>{{item.title}}</span>
                        </div>
                        <div class="app_list_desc clearfix">
                            <div class="app_list_desc_l">
                                <span class="app_list_channel">{{item.category}}</span>
                                <span class="app_list_time">{{item.ptime}}</span>
                            </div>
                            <div class="app_list_desc_r">
                                <div class="left_hands_desc">
                                    <span class="iconfont">浏览</span>{{item.tcount}}
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
    export default {
        props: ['recommendList']
    }
</script>

<style scoped>
    .app_list{font-size:.24rem;padding:.2rem 0;border-bottom:1px solid #e5e5e5;margin:0 .3rem}
    .app_list .app_list_img{float:left;width:27%;height:1.4rem;overflow:hidden;position:relative;margin-right:.2rem}
    .app_list .app_list_img .app_list_mark{color:#fff;background:#5da3e9;font-size:.28rem;text-align:center;padding:.04rem;position:absolute;display:inline-block;left:0;top:0;width:.6rem;height:.4rem;line-height:.4rem;opacity:.9}
    .app_list .app_list_img img{width:100%;display:block;min-height:1.4rem}
    .app_list .app_list_desc .app_list_channel{display:inline-block;color:#f33;font-size:12px;padding:2px;line-height:12px;margin-right:.1rem;background:url(http://img2.cache.netease.com/f2e/wap/common/images/border_red.png) no-repeat;background-size:100% 100%}
    .app_list .app_list_desc .app_list_time{font-size:.24rem;color:#888;display:inline-block}
    .app_list .app_list_desc .app_list_desc_l{float:left}
    .app_list .app_list_desc .app_list_desc_r{float:right;background-size:contain;background-position:left 0;background-repeat:no-repeat;color:#888;line-height:.37rem}
    .app_list .app_list_desc .app_list_desc_r .iconfont{padding:0 .1rem 0 0;display:inline-block;font-size:.28rem;color:#a8a8a8}
    .app_list .app_list_info{overflow:hidden;padding-bottom:4px}
    .app_list .app_list_info .app_list_title{text-align:left;font-size:.34rem;margin-bottom:.2rem;color:#404040;line-height:.42rem;width:100%;display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;-webkit-line-break:auto;-webkit-box-orient:vertical}
    .app_list .app_list_hot{margin-top:.17rem;float:left;height:.42rem;width:100%}
    .app_list .app_list_hot .app_list_hot_icon{color:#fff;background:#4c9aea;border-radius:.5rem;text-align:center;padding:.05rem;line-height:.3rem;width:1.11rem;height:.3rem;float:left;position:relative}
    .app_list .app_list_hot .app_list_hot_icon:after{content:"";display:block;position:absolute;bottom:-0.05rem;right:-0.04rem;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:10px solid #4c9aea}
    .app_list .app_list_hot .app_list_hot_content{margin-left:.15rem;float:left}
    .app_list .app_list_hot .app_list_hot_content a{display:inline-block;color:#4c9aea;font-size:.28rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:5.5rem}
</style>