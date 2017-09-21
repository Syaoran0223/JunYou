<template lang="html">
    <div class="v-footer" >
        <div class="v-footer-index"v-for='(f, index) in footerList' :class="{'v-footer-show': index ==currentIndex}"
        @click="currentIndex = index">
            <router-link :to='f.to'>
                <div class="footerMain" >
                    <div class="footerImg">
                        <img :src="f.src" alt="">
                    </div>
                    <div class="footerTitle" :class='f.class'>
                        {{ f.title }}
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: '',
            footerList: [
                {
                    to: '/',
                    title: '首页',
                    src:'static/images/home/shouye.png',
                },
                {
                    to: '/server',
                    title: '服务记录',
                    src:'static/images/home/fuwujilu2.png',
                    class:'unclick',
                },
            ]
        }
    },
}
</script>

<style lang="css">
    .v-footer {
        width: 100%;
        height: 80px;
        /*background: red;*/
        position: fixed;
        bottom: 0px;
        display: flex;
        justify-content: space-around;
        text-align: center;
        background: white;
    }
    .v-footer a {
        text-decoration: none;
        width: 100%;
        height: 100%;
    }
    .v-footer-index {
        width: 100%;
        height: 80px;
    }
    .footerImg {
        margin-top: 12px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 36px;
        height: 36px;
        /*margin: 0 auto;*/
    }
    .footerImg img {
        width: 100%;
        height: 100%;
    }
    .footerTitle {
        font-size: 16px;
        color:#8fbeff;
    }
    .unclick {
        color: #d2e5ff;
    }

</style>
