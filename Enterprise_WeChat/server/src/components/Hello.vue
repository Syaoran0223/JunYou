<template lang="html">
    <div class="templateMain">
        <div class="template">
            <div class="search">
            <input type="text" name="" value="" placeholder="请输入您要查找的内容" v-model:value='searchInfo'>
                <!-- <img src="static/images/template/search.png" alt=""> -->
            </div>
        </div>
        <!-- 左侧导航栏 -->
        <div class="templateLeft">
            <div class="templateLeftList"  v-for='(t, index) in typeList'>
                    <li :class="{checked:(index == currentIndex)}" @click='templateShowClick(index)'>
                        <span class='check'> </span>
                         {{ t.title }}
                         <span class="line"></span>
                     </li>
            </div>
        </div>
        <div class="templateRight">
            <templateShow :list='list' :s='searchInfo'></templateShow>
        </div>
    </div>
</template>

<script>
import templateShow from '@/components/templateShow'
export default {
    data() {
        return {
            // 搜索条件
            searchInfo: '',
            // 导航栏当前选择标签
            currentIndex : '',
            // 左侧导航栏列表
            typeList: [
                {
                     title: '合同类型'
                },
                {
                     title: '借款合同'
                },
                {
                     title: '劳动合同'
                },
                {
                     title: '股权协议'
                },
                {
                     title: '租赁合同'
                },
                {
                     title: '合同类型'
                },
                {
                     title: '借款合同'
                },
                {
                     title: '劳动合同'
                },
                {
                     title: '股权协议'
                },
                {
                     title: '租赁合同'
                },
            ],
            // 显示内容
            list: '',

            listtotal: {
                0: [
                    {
                        title:'标题1',
                        content:'内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
                        link:'http://m.baidu.com/',
                    },
                    {
                        title:'标题2',
                        content:'内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2',
                        link:'http://m.baidu.com/',
                    },
                    {
                        title:'标题3',
                        content:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
                        link:'http://m.baidu.com/',
                    },
                ],
                1: [
                    {
                        title:'标题4',
                        content:'内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
                        link:'http://m.baidu.com/',
                    },
                    {
                        title:'标题5',
                        content:'内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2',
                        link:'http://m.baidu.com/',
                    },
                    {
                        title:'标题6',
                        content:'内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3',
                        link:'http://m.baidu.com/',
                    },
                ]
            },

        }
    },
    methods: {
        templateShowClick(index) {
            this.currentIndex = index
            this.list = this.listtotal[index]
        }
    },
    components: {
        templateShow:templateShow,
    },
    created() {
        this.list = this.listtotal[0]
    }
}
</script>
<style lang="css">
    body {
        background: #E9F1FE;
        padding: 0;
        margin: 0;
    }
    .templateMain {
        display: flex;
    }
    .template {
        position: fixed;
        top: 0;
        z-index: 100;
    }
    .template .search {
        width: 100vw;
        height: 90px;
        background: #5077AA;
        position: relative;
    }
    .template .search input {
        width: 480px;
        height: 56px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: none;
        color: #999;
        border-radius: 10px;
        font-size: 26px;
        padding-left: 30px;
        padding-right: 80px;
        /*background-image: url('/static/images/template/search.png');*/
        background-repeat: no-repeat;
        background-position: 530px;
        background-size: 40px 40px;

    }
    .template .search img {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 30px;
        right: 60px;
    }
    /* 左侧导航 */
    .templateLeft {
        width: 160px;
        height: 100vh;
        background: #fff;
        position: relative;
        padding-top: 90px;
    }
    .templateLeft li {
        list-style: none;
        height: 88px;
        width: 100%;
        line-height: 88px;
        position: relative;
        text-align: center;
        font-size: 24px;
        color: #43515a;
        display: flex;
        justify-content: center;
        left: 50%;
        transform: translateX(-50%);
    }
    .templateLeft .line {
        position: absolute;
        background: #e5e5e5;
        bottom: 3px;
        width: 120px;
        height: 2px;
        /*background: red;*/
        left: 50%;
        transform: translateX(-50%);
    }
    .templateLeftList .check{
        position: relative;
        top: 50%;
        left: -10px;
        transform: translateY(-50%);
        width: 4px;
        height: 20px;
        display: none;
        /*background: black;*/
    }
    .templateLeftList .checked {
        color:#3b93fb;
        left: 53%
    }
    .templateLeftList .checked .check {
        display: block;
        background: #3b93fb;
    }
    .templateLeft a {
        text-decoration: none;
        font-size: 24px;
    }
    .templateRight {
        position: relative;
        top: 90px;
        width:480px;
        height: 100vh;
    }
</style>
