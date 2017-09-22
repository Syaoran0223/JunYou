<template lang="html">
    <div class="News">
        <!-- 上拉加载 -->
        <div class="news">
            <div class="newsTitle">
                <span class="newsTitleVertical"></span>&nbsp;&nbsp;&nbsp;&nbsp;公司法务常识
            </div>
            <div class="newsTotal">
                    <div class="newsList" v-for='l in list'>
                        <router-link :to='l.link' :newsInfo='newsInfo'>
                        <div class="newsMain">
                            <div class="newsImg">
                                <img :src="l.src" alt="">
                            </div>
                            <div class="newsContent">
                                <div class="newsContentTitle">
                                    {{ l.title }}
                                </div>
                                <div class="newsContentInfo">
                                    {{ contentSlice(l.content)}}
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
        <infinite-loading @infinite="infiniteHandler">
            <span slot="no-more">
                没有更多了...
            </span>
        </infinite-loading>
    </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import Ajax from '@/tool/ajax'
import Post from '@/tool/post'
import log from '@/tool/log'
export default {
  data() {
    return {
      list: [],
      pageNo: 1,
      pageSize: 4,
      newsInfo: '11',
    };
  },
  methods: {
    timeChange(time) {
        var d = new Date(time)
        var nm = d.getFullYear()
        if (nm.length < 2) {
          nm = '0' + nm
        }
        var yt = d.getMonth() + 1
        if (yt.length < 2) {
          yt = '0' + yt
        }
        var ri = d.getDate()
        if (ri.length < 2) {
          ri = '0' + ri
        }
        var ui = d.getHours()
        if (ui.length < 2) {
          ui = '0' + ui
        }
        var ff = d.getMinutes()
        if (ff.length < 2) {
          ff = '0' + ff
        }
        var mc = d.getSeconds()
        if (mc.length < 2) {
          mc = '0' + mc
        }
        return `${nm}-${yt}-${ri}`
    },
    infiniteHandler($state) {
        setTimeout(() => {
            // 初始化求情信息
            let _this = this
            let path = this.$store.state.path
            let url = path + '/law/if/v2/encompanylawsknowledge/getCompanyLawsKnowledgeList'
            let request = {
                url : url,
                method: 'POST',
                data: {
                    pageNo: _this.pageNo,
                    pageSize : _this.pageSize,
                }
            }
            // 开始滚动加载事件
            const temp = [];
            $.post(request.url, request.data, e=> {
                let newsList = e.data.result
                if (newsList.length != 0) {
                    for (var i = 0; i < newsList.length; i++) {
                        let n = newsList[i]
                        // 清洗数据
                        let title = n["TITLE"]
                        // let title = '法务常识法法务常识务常识法务常识法务常识'
                        let content = n["CONTENT"]
                        let src = n["ICON"]
                        let time = this.timeChange(n["CREATE_DATE"])
                        let o = {
                            title,
                            time,
                            content,
                            src,
                            link: '/news',
                        }
                        temp.push(o)
                    }
                    this.list = this.list.concat(temp)
                    // 请求页数 + 1
                    this.pageNo++
                    console.log('当前法务常识页数', this.pageNo - 1, '法务常识数量', this.list.length)
                    $state.loaded();
                } else {
                    console.log('加载完成')
                    $state.complete()
                }
                // $state.complete()

            })
        }, 1000);
    },
    contentSlice(e) {
        if (e.length >= 30) {
            e = e.slice(0, 30) + '...'
            return e
        } else {
            return e
        }
    }
  },
  computed: {
      l: function() {

      }
  },
  components: {
    InfiniteLoading,
  },
};
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
