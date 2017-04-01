<template>
    <div class="app-entertainmentList">
        <ul>
            <li v-for="item in entertainmentList" class="m_photoset m_article list-item clearfix">
                <a href="javascript:;">
                    <div class="m_photoset_title">
                        {{item.title}}
                    </div>
                    <div class="m_photoset_pic">
                        <div class="m_photoset_pic_wrap clearfix">
                            <img :src="item.imgsrc">
                            <img :src="item.imgextra[0].imgsrc">
                            <img :src="item.imgextra[1].imgsrc">
                        </div>
                    </div>
                    <div class="m_photoset_info">
                        <div class="m_article_desc clearfix">
                            <div class="m_article_desc_l">
                                <span class="m_article_time">{{item.ptime}}</span>
                            </div>
                            <div class="m_article_desc_r">
                                <div class="left_hands_desc">
                                    <span class="iconfont">浏览</span>7862
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
        props: ['entertainmentList']
    }
</script>

<style scoped>
    .m_article{font-size:.24rem;padding:.2rem 0;border-bottom:1px solid #e5e5e5;margin:0 .3rem}
    .m_article .m_article_img{float:left;width:27%;height:1.4rem;overflow:hidden;position:relative;margin-right:.2rem}
    .m_article .m_article_img img{width:100%;display:block;min-height:1.4rem}
    .m_article .m_article_desc .m_article_time{font-size:.24rem;color:#888;display:inline-block}
    .m_article .m_article_desc .m_article_desc_l{float:left}
    .m_article .m_article_desc .m_article_desc_r{float:right;background-size:contain;background-position:left 0;background-repeat:no-repeat;color:#888;line-height:.37rem}
    .m_article .m_article_desc .m_article_desc_r .iconfont{padding:0 .1rem 0 0;display:inline-block;font-size:.28rem;color:#a8a8a8}
    .m_photoset .m_photoset_title{font-size:.34rem;margin-bottom:.2rem;color:#404040;display:-webkit-flex;display:-ms-flexbox;display:flex}
    .m_photoset .m_photoset_pic{margin:.22rem 0;display:block}
    .m_photoset .m_photoset_pic .m_photoset_pic_wrap{overflow:hidden;height:1.65rem}
    .m_photoset .m_photoset_pic .m_photoset_pic_wrap img{width:32%;float:left;margin-right:2%;display:inline-block;min-height:1.4rem}
    .m_photoset .m_photoset_pic .m_photoset_pic_wrap img:last-child{margin-right:0}
</style>