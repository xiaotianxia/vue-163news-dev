<template>
    <div class="app-topnav">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in sliders" :key="item.imgurl">
                <a :href="item.url">
                    <img :src="item.imgurl">
                </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default {
        name: 'carrousel',
        data() {
            return {
                swiperOption: {
                    autoplay: 5 * 1000,
                    setWrapperSize :true,
                    pagination : '.swiper-pagination',
                    paginationClickable :true,
                    mousewheelControl : true,
                    observeParents:true,
                }
            }
        },
        computed: {
            ...mapState([
                'sliders'
            ])
        },
        mounted() {
            this.getSliders();
        },
        methods: {
            ...mapActions([
                'getSliders'
            ])
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>
<style>
    .swiper-slide img {
        width: 100%;
        height: 100%;
    }
    .swiper-pagination-bullet {
        margin: 0 20px!important;
        width: 40px!important;
        height: 40px!important;
        opacity: .5!important;
        background-color: #fff!important;
    }
    .swiper-pagination-bullet-active {
        background-color: #007aff!important;
    }
</style>
