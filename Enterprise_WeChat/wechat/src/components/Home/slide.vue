<template lang="html">
    <!-- 轮播图 -->
    <div class="Slide">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-model:slideList=slideList v-for='s in slideList'>
                    <div class="slideImg">
                        <img :src="s.src" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Ajax from '@/tool/ajax'
export default {
    data() {
        return {
            slideList: '',
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            // this.slide()
            this.slideImgGet()
        })
    },
    methods: {
        // 获取轮播图
        slideImgGet() {
            let url =  'http://192.168.1.66/law/if/version/detail'
            let data = {
                appType: 1,
                type: 4,
            }
            let _this = this
            let promise = new Promise(function(success, fail) {
                $.post(url,data, e => {
                    let imgList = e.data.overImageList
                    let slideList = []
                    // 洗数据 得到自己想要的格式
                    for (var i = 0; i < imgList.length; i++) {
                        let o = {
                            src: imgList[i].IMAGE_URL
                        }
                        slideList.push(o)
                    }
                    // 保存到 vuex
                    _this.$store.commit('slideListsave', slideList)
                    // 保存 图片列表到 slideList
                    _this.slideList = _this.$store.state.slideList
                     success(slideList)
                })
            }).then( (e) => {
                _this.slide()
            })
        },
        // 轮播图设置
        slide() {
            // console.log('运行了', this.slideList)
            new Swiper('.swiper-container', {
                centeredSlides: true,
                spaceBetween: 30,
                autoplay: 2500,
                autoplayDisableOnInteraction: false,
                loop:true,
                // effect : 'flip',
                // effect : 'coverflow',
                centeredSlides : true,
                spaceBetween : 20,
                slidesPerView : 1.2,
           })
       },
    },
}

</script>

<style lang="css">
/*轮播图*/
.swiper-container {
    width: 640px;
    text-align: center;
    line-height: 200px;
    margin-top: 20px;
}
.slideImg {
    /*width: 580px;*/
    height: 260px;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
}
.slideImg img {
    /*width: 580px;*/
    width: 100%;
    height: 100%;

}
.swiper-slide-next{
    width: 80%;
    height: 80%;
}
</style>
