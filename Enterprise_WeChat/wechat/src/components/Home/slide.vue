<template lang="html">
    <!-- 轮播图 -->
    <div class="Slide">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for='s in slideList'>
                    <div class="slideImg">
                        <img :src="s.src" alt="">

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            slideList: [
                {
                    src:'static/images/home/slide1.png'
                },
                {
                    src:'static/images/home/slide2.png'
                },
                {
                    src:'static/images/home/slide3.png'
                },
            ],
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            this.slide()
        })
    },
    methods: {
        // 轮播图设置
        slide() {
            new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationClickable: true,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: 2500,
                loop:true,
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
    /*width: 640px;*/
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
