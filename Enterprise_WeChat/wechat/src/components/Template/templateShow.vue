<template lang="html">
    <div class="templateShow">
        <div class="templateShowList">
            <div class="templateShowListContent" v-for='(l, index) in filterTitle'>
                <a :href='l.link'>

                <div class="templateShowListContentMain">
                    <div class="titleMain">
                        <div class="title">
                            {{l.title }}
                        </div>
                        <div class="more">
                            <div class="moreTitle">
                                查看详情
                            </div>
                            <div class="moreImg">
                                <img src="static/images/template/more.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        {{ l.content.slice(0,35) + '...'}}
                    </div>
                </div>
            </a>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['list', 'searchInfo'],
    data() {
        return {

        }
    },
    computed: {
        filterTitle() {
            let temp = this.list
            let s = this.searchInfo
            let result = []
            for (var i = 0; i < temp.length; i++) {
                let list = temp[i]
                let title = list.title
                console.log('list', list)
                if (title.includes(s)) {
                    result.push(list)
                }
            }
            return result
        }
    }
}
</script>

<style lang="css">
    .templateShow {
        width: 480px;
        height: 100vh;
        background: #E9F1FE;
    }
    .templateShowList {
        width: 440px;
        height: 100vh;
        margin: 0 auto;
    }
    .templateShowListContent {
        width: 100%;
        height: 150px;
        background: white;
        margin: 20px 0;
    }
    .templateShowListContentMain {
        width: 400px;
        margin: 0 auto;
    }
    .templateShowListContent .titleMain {
        display: flex;
        justify-content: space-between;
        position: relative;
        top: 36px;
        width: 100%;
        margin: 0 auto;
    }
    .templateShowListContent .title{
        font-size: 24px;
        color: #43515a;
    }
    .templateShowListContent  a {
        text-decoration: none;
    }
    .templateShowListContent .more {
        display: flex;
        color: #b0b0b0;
        position: relative;
    }
    .templateShowListContent .moreTitle {
        position: relative;
        right: 12px;
    }
    .templateShowListContent .moreImg {
        width: 13px;
        height: 27px;
        position: relative;
    }
    .templateShowListContent .moreImg img {
        width: 100%;
        height: 100%;
    }
    .templateShowListContent .content {
        font-size: 20px;
        position: relative;
        top: 44px;
        color: #43515a;
    }

</style>
