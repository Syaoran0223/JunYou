<template lang="html">
    <div class="Home" >
        <keep-alive>
            <v-slide></v-slide>
        </keep-alive>
        <!-- 导航 -->
        <div class="navList">
            <div class="navBlock">
                <div class="nav" v-for='n in navList'>
                    <router-link :to='n.link'>
                        <div class="navInfo" :class='n.class'>
                            <div class="navImg">
                                <img :src="n.src" alt="">
                            </div>
                            <div class="navTitle">
                                {{ n.title }}
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <v-news></v-news>
        <!-- <v-download></v-download> -->
        <v-footer></v-footer>
    </div>
</template>

<script>
// import vDownLoad from '@/components/Home/download'
// import vDownLoad from '@/components/Home/download1'
import vSlide from '@/components/Home/slide'
// import vNews from '@/components/Home/news'
import vNews from '@/components/Home/newsList'
import vFooter from '@/components/Home/footer'
import Ajax from '@/tool/ajax'
export default {
    data() {
        return {
            link: '/ccb/qiye',
            navList: [
                {
                    title: '线上咨询',
                    src:'static/images/home/xianshangzixun.png',
                    class:'navMargin1',
                    link: '/online',
                },
                {
                    title: '电话咨询',
                    src:'static/images/home/dianhuazixun.png',
                    class:'navMargin2',
                    link: '/phone',
                },
                {
                    title: '合同模板',
                    src:'static/images/home/hetongmuban.png',
                    class:'navMargin3',
                    link:  '/template',
                },
                {
                    title: '合同定制',
                    src:'static/images/home/hetongdingzhi.png',
                    class:'navMargin1',
                    link: '/customize',
                },
                {
                    title: '合同审查',
                    src:'static/images/home/hetongshencha.png',
                    class:'navMargin2',
                    link: '/review',
                },
                {
                    title: '智能合同',
                    src:'static/images/home/zhinenghetong.png',
                    class:'navMargin3',
                    link: '/commission',
                },
            ],
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            // this.pathGet()
            // this.accesstokenGet()
            // this.codeGet()
            // 获取用户信息
            // this.userInfoGet()
        })
    },
    methods: {
       //    获取当前页面路径
        codeGet() {
            let url = location.href
            let code = url.split('code=')[1]
           this.$store.commit('codeSave', code)
        },
        pathGet() {
            var currentPath = location.href
            console.log('currentPath', currentPath)
        },
        //  获取并储存 accesstoken
        accesstokenGet() {
            let path = this.$store.state.path
            // let url = path + '/weixin/AccessToken'
            let url = 'http://www.linruoyu.top/wx/oauth/token'
            let request = {
               url : url,
               method: 'GET',
           }
            Ajax(request).then(e=> {
                let token = e.access_token
                console.log('acesstoken', e)
                this.$store.commit('accessTokenSave', token)
                return token
            }).then(token=> {
                // 获取 用户信息
                let url = 'https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo'
                let data = {
                    code : this.$store.state.code,
                    accessTocken: this.$store.state.AccessToken,
                }
                console.log('获取到的 code ', data.code)
                $.get(url, data, e=> console.log('用户信息', e))
                // let url = 'http://www.linruoyu.top:8085/weixin/findByCode'
                // let request = {
                //     method: 'POST',
                //     url: url,
                //     data: {
                //         code : this.$store.state.code,
                //         accessTocken: this.$store.state.AccessToken,
                //     },
                // }
                // this.$store.commit('requestSave', request)
                // return request
            // }).then(request=> {
            //     let newRequest = this.$store.state.request
            //     console.log('ajax前 request', request, '类型', typeof(newRequest))
            //     $.post(newRequest.url, newRequest.data, e=> {
            //             console.log('newRequest', newRequest, '类型', typeof(newRequest))
            //             console.log('e', e)
            //             var jq = e
            //             return jq
            //     }).then(jq=> {
            //         console.log('这里是jq的 promise', jq)
            //     })
            })
        },
    },
    components: {
        'v-footer': vFooter,
        'v-slide': vSlide,
        'v-news': vNews,
        
    },
}
</script>

<style lang="css">
    html body {
        padding: 0;
        margin: 0;
        background: #e9f1fe;

    }
    .Home {
    }

    /*导航*/
    .navList {
        position: relative;
        width: 600px;
        height: 410px;
        background: white;
        margin: 20px auto;
        border-radius: 10px;
        overflow: hidden;
    }
    .navBlock {
        width: 502px;
        height: 330px;
        margin: 46px 50px 36px 50px;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
    }
    .navMargin1 {
        margin-right: 43px;
    }
    .navMargin2 {
        margin:0 43px;
    }
    .navMargin3 {
        margin-left: 43px;
    }

    .nav a{
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 24px;
        color: #3b93fb;
        text-decoration: none;
    }
    .navInfo {
        height: 150px;
        width: 110px;
    }
    .navImg {
        width: 110px;
        height: 110px;
        overflow: hidden;
    }
    .navImg img {
        width: 100%;
        height: 100%;
    }
</style>
