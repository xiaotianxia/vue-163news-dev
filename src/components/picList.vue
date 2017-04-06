<template>
    <div class="content-list swipe-content clearfix">
        <ul class="content-list-east">
            <li v-for="item in picList[0]" class="m_photoset_square m_article list-item clearfix" id="92883">
                <a href="javascript:;">
                    <div class="m_photoset_square_img">
                        <img :src="item.tcover">
                    </div>
                    <div class="m_photoset_square_info">
                        <div class="m_photoset_square_title">
                            <span>{{item.setname}}</span>
                        </div>
                        <div class="m_photoset_square_desc clearfix">
                            <div class="m_photoset_square_desc_l">
                                <span class="iconfont">浏览{{item.replynum}}</span>
                            </div>
                            <div class="m_photoset_square_desc_r">
                                <span class="iconfont">{{item.imgsum}}p</span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        <ul class="content-list-west">
            <li v-for="item in picList[1]" class="m_photoset_square m_article list-item clearfix" id="92909">
                <a :href="item.seturl">
                    <div class="m_photoset_square_img">
                        <img :src="item.tcover">
                    </div>
                    <div class="m_photoset_square_info">
                        <div class="m_photoset_square_title">
                            <span>{{item.setname}}</span>
                        </div>
                        <div class="m_photoset_square_desc clearfix">
                            <div class="m_photoset_square_desc_l">
                                <span class="iconfont">浏览{{item.replynum}}</span>
                            </div>
                            <div class="m_photoset_square_desc_r">
                                <span class="iconfont">{{item.imgsum}}p</span>
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
        props: ['picList']
    }
</script>

<style scoped>
    .content-list{background:#f6f6f6}
    .content-list img{background:url(http://img2.cache.netease.com/f2e/wap/common/images/bg_img_sm.png) center center no-repeat;background-size:contain}
    .content-list-east{float:left;width:47%;margin-left:.2rem;overflow:hidden}
    .content-list-west{float:left;width:47%;overflow:hidden;margin-left:.2rem}
    section:last-child{border-bottom:0}
    .m_photoset .m_photoset_title{font-size:.34rem;margin-bottom:.2rem;color:#404040;display:-webkit-flex;display:-ms-flexbox;display:flex}
    .m_photoset .m_photoset_pic{margin:.22rem 0;display:block}
    .m_photoset .m_photoset_pic .m_photoset_pic_wrap{overflow:hidden;height:1.65rem}
    .m_photoset .m_photoset_pic .m_photoset_pic_wrap img{width:32%;float:left;margin-right:2%;display:inline-block;min-height:1.4rem}
    .m_photoset .m_photoset_pic .m_photoset_pic_wrap img:last-child{margin-right:0}
    .m_photoset_square{background:#fff;width:100%;float:left;margin:.2rem 0 0 0;padding:0;border:0;box-shadow:0 1px 1px #e3e3e3}
    .m_photoset_square .m_photoset_square_img{float:left;width:100%;overflow:hidden;position:relative;height:auto;-webkit-animation:imgload2 1s ease-out;animation:imgload2 1s ease-out;-webkit-animation-name:imgload2;-webkit-animation-duration:1s;-webkit-animation-timing-function:ease-out}
    .m_photoset_square .m_photoset_square_img img{width:100%;display:block;min-height:4rem}
    .m_photoset_square .m_photoset_square_info{padding:.15rem;float:left;width:100%;box-sizing:border-box}
    .m_photoset_square .m_photoset_square_info .m_photoset_square_title{color:#555;width:100%;margin-bottom:.15rem}
    .m_photoset_square .m_photoset_square_info .m_photoset_square_title span{display:block;font-size:.28rem;line-height:.42rem;text-align:left;}
    .m_photoset_square .m_photoset_square_info .m_photoset_square_desc{width:100%}
    .m_photoset_square .m_photoset_square_info .m_photoset_square_desc .m_photoset_square_desc_l{float:left;background-size:contain;background-position:left 0;background-repeat:no-repeat;color:#888;line-height:.36rem;font-size:.24rem}
    .m_photoset_square .m_photoset_square_info .m_photoset_square_desc .m_photoset_square_desc_l .iconfont{padding:0 .1rem 0 0;display:inline-block;font-size:.28rem;color:#a8a8a8}
    .m_photoset_square .m_photoset_square_info .m_photoset_square_desc .m_photoset_square_desc_r{float:right;background-size:contain;background-position:left 0;background-repeat:no-repeat;color:#888;line-height:.36rem;font-size:.24rem}
    .m_photoset_square .m_photoset_square_info .m_photoset_square_desc .m_photoset_square_desc_r .iconfont{padding:0 .1rem 0 0;display:inline-block;font-size:.28rem;color:#a8a8a8}
</style>