<template lang="html">
    <div class="Home" >
        <!-- 轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for='s in slideList'>{{s.src }}</div>
            </div>
        </div>
        <!-- 导航 -->
        <div class="navList">
            <div class="nav" v-for='n in navList'>
                <router-link :to='n.link'>
                    <div class="">
                        {{ n.title }}
                    </div></router-link>
            </div>
        </div>
        <div class="">
        </br>
    </br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
        </br>
        111
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import Ajax from '@/tool/ajax'
import vFooter from '@/components/Home/footer'
export default {
    data() {
        return {
            navList: [
                {
                    title: '线上法律咨询',
                    link:'/',
                },
                {
                    title: '电话咨询',
                    link:'/server',
                },
                {
                    title: '合同模板',
                    link:'/',
                },
                {
                    title: '合同定制',
                    link:'/',
                },
                {
                    title: '合同审查',
                    link:'/',
                },
                {
                    title: '案件委托',
                    link:'/',
                },
            ],
            slideList: [
                {
                    src:'轮播图片1'
                },
                {
                    src:'轮播图片2'
                },
                {
                    src:'轮播图片3'
                },
                {
                    src:'轮播图片4'
                },
                {
                    src:'轮播图片5'
                },
                {
                    src:'轮播图片6'
                },
            ],
        }
    },
    components: {
        'v-footer': vFooter,
    },
    mounted: function() {
        this.$nextTick(function() {
            this.slide()
            this.pathGet()
            this.getAccesstoken()
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
                autoplayDisableOnInteraction: false,
                loop:true,
           })
        },
       //    获取路径
        pathGet() {
            var currentPath = location.href
            console.log(currentPath)
        },
       //    获取并储存 accesstoken
        getAccesstoken() {
            let path = this.$store.state.path
            let url = path + '/weixin/AccessToken'
            var request = {
               url : url,
               method: 'GET',
           }
            Ajax(request).then(e=> {
                let token = e.access_token
                this.$store.commit('accessTokenSave', token)
                console.log('测试', this.$store.state.AccessToken)
            })
        },
    },
}
</script>

<style lang="css">
    .Home {
        margin-bottom: 80px;
    }
    /*轮播图*/
    .swiper-container {
        height: 200px;
        width: 640px;
        text-align: center;
        line-height: 200px;
    }
    /*导航*/
    .navList {
        width: 520px;
        /*height: 500px;*/
        font-size: 25px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        align-content: space-around;
        color: black;
        word-wrap: break-word;


    }
    .navList .nav {
        width: 150px;
        height: 150px;
        line-height: 150px;
        text-align: center;
        background: #199ED8;
        border-radius: 50%;
        margin: 0 auto;
    }
    .navList .nav a {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: black;
    }
</style>
