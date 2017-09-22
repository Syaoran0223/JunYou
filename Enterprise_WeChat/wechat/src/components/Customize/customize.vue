<template lang="html">
    <div class="">
        <div class="customize">
            <div class="type">
                <div class="title">
                    文书类型
                </div>
                <div class="selcet">
                    <select name="type" v-model='selected'>
                        <option value="" v-for='o in optionList' :value='o.value'>{{ o.title }}</option>
                    </select>
                    <div class="right">
                        <img src="static/images/customize/right.png" alt="">
                    </div>
                </div>
            </div>
            <!-- 输入内容 -->
            <div class="content">
                <div class="">
                    <textarea name="name" v-model='content'placeholder="请输入咨询内容" ></textarea>
                </div>
            </div>
            <div class="bottom">
                <div class="price">
                    原价: <span class="priceColor">￥500</span>
                </div>
                <div class="number">
                     剩余次数: <span class="numberColor">1</span>
                </div>
                <div class="button">
                    <button type="button" name="button">发布</button>
                </div>
            </div>
        </div>
        <zixunliucheng :title=askTitle :infoMain='askInfo'></zixunliucheng>
        <shijian></shijian>
    </div>
</template>

<script>
import zixunliucheng from '@/components/Public/zixunliucheng'
import shijian from '@/components/Public/zixunshijian'
export default {
    data() {
        return {
            // 文书定制选择列表
            optionList: [
                {
                    title:'离婚协议111111111111',
                    value: 'a',
                },
                {
                    title:'离婚协议2',
                    value: 'b',
                },
                {
                    title:'离婚协议离婚协议',
                    value: 'c',
                },
                {
                    title:'离婚协议',
                    value: 'd',
                },
                {
                    title:'离婚协议',
                    value: 'e',
                },
                {
                    title:'离婚协议',
                    value: 'e1',
                },
                {
                    title:'离婚协议',
                    value: 'e2',
                },
                {
                    title:'离婚协议',
                    value: 'e3',
                },
            ],
            // 文书类型
            selected: 'a',
            // 咨询内容
            content: '',
            contentLimit: 5,
            // 咨询流程
            askTitle: '合同定制流程',
            askInfo: [
                {
                    title:'选择文书类型，填写定制需求，点击发布；'
                },
                {
                    title:'10分钟内律师接单；'
                },
                {
                    title:'2天内完成合同定制；'
                },
                {
                    title:'完成服务；'
                },
            ],
        }
    },
    methods: {

    },
    watch: {
        selected: function() {
            console.log('selected', this.selected)
        },
        content: function() {
            if (this.content.length > this.contentLimit) {
                this.content = this.content.slice(0, this.contentLimit)
                return  alert(`请限制在${this.contentLimit}字以内`)
            }
        }
    },
    components: {
        zixunliucheng:zixunliucheng,
        shijian: shijian
    }
}
</script>

<style lang="css">
    body {
        background: #E9F1FE;
        padding: 0;
        margin: 0;
    }
    .customize {
        width: 600px;
        height: 500px;
        margin: 20px auto;
        background: #fff;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 30px;
        position: relative;
    }
    .customize .type {
        display: flex;
        justify-content: space-between;
        font-size: 28px;
        color: #999;
        padding-bottom: 16px;
        border-bottom:  1px solid #E9E9E9;
    }
    .customize .selcet {
        display: flex;
        justify-content: center;
        width: 150px;
        position: relative;
        right: 10px;
    }
    .customize select{
        color:#43515a;
        appearance:none;
        border: none;
        font-size: 28px;
        background: #fff;
        width: 130px;
    }
    .customize .right {
        position: relative;
        /*right: 68px;*/
        right: 0px;
        z-index: 10;
        width: 16px;
        height: 26px;
        top: 10px;
    }
    .right img {
        width: 100%;
        height: 100%;
    }
    /* 文本内容 */
    .customize .content {
        margin-top: 20px;
    }
    .customize .content textarea{
        width: 540px;
        height: 250px;
        color: #43515a;
        font-size: 28px;
    }
    /* 底部 */
    .customize .bottom {
        display: flex;
        justify-content: space-between;
        font-size: 28px;
        line-height: 60px;
        height: 60px;
        width: 540px;
        color: #43515a;
        position: absolute;
        bottom: 20px;
    }

    .customize .priceColor {
        color: #3b93fb;
    }
    .customize .numberColor {
        color: #f1645d;
    }
    .customize .button {
        width: 160px;
        height: 60px;
    }
    .customize button {
        width: 160px;
        height: 60px;
        background: #3B93FB;
        border-radius: 10px;
        color: #f1f7ff;
        border: none;
    }

</style>
