<template>
    <div class="app-jokeList">
        <ul class="swipe-content content-list">
            <li v-for="item in jokeList" class="m_article_joke list-item clearfix">
                <a href="javascript:;">
                    <div class="m_article_info">
                        <div class="m_article_digest">
                            <span>{{item.digest}}</span>
                        </div>
                    </div>
                </a>
                <div class="m_article_desc clearfix">
                    <div class="m_article_desc_l">
                        <span class="m_article_time">{{item.source}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['jokeList']
    }
</script>

<style scoped>
    .content-list{background:#f6f6f6}
    .content-list img{background:url(http://img2.cache.netease.com/f2e/wap/common/images/bg_img_sm.png) center center no-repeat;background-size:contain}
    .m_article_joke{font-size:.24rem;margin:0 0 .2rem 0;background:#fff;padding:0 .3rem;box-shadow:3px 3px 8px #ddd}
    .m_article_joke .m_article_channel{float:left;margin-right:.1rem}
    .m_article_joke .m_article_channel span{display:block;color:#999;line-height:.42rem;padding-right:.1rem;border-right:1px solid #999;font-size:.24rem}
    .m_article_joke .m_article_info{overflow:hidden;position:relative;padding-top:.25rem}
    .m_article_joke .m_article_img.collapse{max-height:none}
    .m_article_joke .m_article_img{position:relative;width:100%;max-height:600px;overflow:hidden}
    .m_article_joke .m_article_img .gif_wrap{width:100%;height:100%;position:absolute}
    .m_article_joke .m_article_img .play-btn-joke{width:.9rem;position:absolute;top:50%;left:50%;margin-left:-0.45rem;margin-top:-0.45rem;height:.9rem;display:block;background:url(http://img2.cache.netease.com/f2e/wap/common/images/icon_gif.png) no-repeat;background-size:contain}
    .m_article_joke .m_article_img .loading-btn-joke{width:.9rem;height:.9rem;margin-left:-0.45rem;margin-top:-0.45rem;position:absolute;top:50%;left:50%;background-color:#fff;border-radius:100%;-webkit-animation:sk-scaleout 1s infinite ease-in-out;animation:sk-scaleout 1s infinite ease-in-out}
    .m_article_joke .m_article_img img{width:100%;display:block}
    .m_article_joke .m_article_img .m_article_title{width:100%;position:absolute;bottom:0;background:rgba(0,0,0,0.4)}
    .m_article_joke .m_article_img .m_article_title span{font-size:.34rem;line-height:.42rem;margin:.25rem .2rem;color:#fff;display:inline-block}
    .m_article_joke .m_article_digest{font-size:.32rem;margin-bottom:.25rem;color:#404040;line-height:.42rem;width:100%;display:inline-block;text-align:left;}
    .m_article_joke .m_article_desc .m_article_desc_l{float:left;color:#888}
    .m_article_joke .m_article_desc .m_article_desc_r{float:right;color:#888}
    .m_article_joke .m_article_desc .m_article_desc_r .share-joke{padding:.2rem;font-size:.32rem}
    .m_article_joke .more{text-align:center;color:#888;background:#f3f3f3;line-height:.64rem;height:.64rem}
    .m_article_joke .more span{-webkit-transform:scale(0.4);-ms-transform:scale(0.4);transform:scale(0.4);display:inline-block;font-size:.32rem;line-height:.64rem;vertical-align:bottom}
</style>