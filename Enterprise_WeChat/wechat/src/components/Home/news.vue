<template lang="html">
    <div class="News">
        <!-- 上拉加载 -->
        <div class="news">
            <div class="newsTitle">
                <span class="newsTitleVertical"></span>&nbsp;&nbsp;&nbsp;&nbsp;公司法务常识
            </div>
            <div class="newsTotal">
                    <div class="newsList" v-for='l in list'>
                        <router-link :to='l.link'>
                        <div class="newsMain">
                            <div class="newsImg">
                                <img :src="l.src" alt="">
                            </div>
                            <div class="newsContent">
                                <div class="newsContentTitle">
                                    {{ l.title }}
                                </div>
                                <div class="newsContentInfo">
                                    {{ l.content }}
                                </div>
                                <div class="newsContentTime">
                                    {{ l.time }}
                                </div>
                            </div>
                        </div>
                        <div class="newsLine"></div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
    data() {
        return {
            list: [
                {
                    title:'新闻标题',
                    content:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容111',
                    src:'static/images/home/xianshangzixun.png',
                    time:'2017.9.13',
                    link:'/server',
                },
                {
                    title:'新闻标题',
                    content:'内容',
                    src:'static/images/home/xianshangzixun.png',
                    time:'2017.9.13',
                    link:'/',
                },
                // {
                //     title:'标题',
                //     content:'内容',
                //     src:'static/images/home/xianshangzixun.png',
                //     time:'2017.9.13',
                //     link:'/',
                // },
                // {
                //     title:'标题',
                //     content:'内容',
                //     src:'static/images/home/xianshangzixun.png',
                //     time:'2017.9.13',
                //     link:'/',
                // },
                // {
                //     title:'标题',
                //     content:'内容',
                //     src:'static/images/home/xianshangzixun.png',
                //     time:'2017.9.13',
                //     link:'/',
                // },
            ],
        }
    },
    methods: {
        onInfinite() {
            var _this = this
            // setTimeout(function() {
            let path = this.$store.state.path
            let url = path + '/weixin/AccessToken'
            var request = {
               url : url,
               method: 'GET',
           }
                console.log('list', _this.list)
        },
    },
    mounted:function() {
        this.onInfinite()
    },
    components: {
        InfiniteLoading,
    }
}
</script>

<style lang="css">
    .News {
        width: 600px;
        height: 100%;
        margin: 0 auto 100px auto;
        /*margin: 0 auto;*/
        background: white;
        border-radius: 10px;
        position: relative;
        padding-bottom: 32px;
    }
    .news {
        width: 560px;
        position: relative;
        top: 32px;
        margin: 0 auto;
    }
    .newsTitle {
        font-size: 26px;
        color: #3b93fb;
        height: 26px;
        line-height: 26px;
        position: relative;
        left: 12px;
    }
    .newsTitleVertical {
        position: absolute;
        left: 0px;
        width: 4px;
        height: 26px;
        background: #3b93fb;
    }
    .newsTotal {
        position: relative;
        /*top: 12px;*/
    }
    .newsList {
        margin: 44px 20px;
    }
    .newsMain {
        position: relative;
        width: 100%;
    }
    .newsImg {
        width: 110px;
        height: 110px;
        border-radius: 10px;
        overflow: hidden;
        }
    .newsImg img {
        width: 100%;
        vertical-align: middle;
        top: 5px;
        position: relative;
    }
    /*新闻文字部分*/
    .newsContent {
        position: absolute;
        left: 130px;
        top: 0;
        width: 390px;
        height: 110px;
        /*background: lightblue;*/
    }
    .newsContentTitle {
        font-size: 24px;
        color: #43515a;
        margin-bottom: 8px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .newsContentInfo {
        font-size: 20px;
        color: #69747b;
        line-height: 22px;
    }
    .newsContentTime {
        font-size: 20px;
        color:#69747b;
        position: absolute;
        right: 0;
        bottom:0px;
    }
    .newsLine {
        border-bottom: 1px solid #F3F3F3;
        width: 480px;
        margin: 0 auto;
        position: relative;
        top:11px;
    }
</style>
