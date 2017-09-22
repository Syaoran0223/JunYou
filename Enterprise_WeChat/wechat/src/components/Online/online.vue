<template lang="html">
    <div class="">
        <div class="online">
            <div class="advisory">
                <div class="advisoryTitle">
                    咨询标题
                </div>
                <div class="advisory-Value">
                    <input type="text" name=""v-model='title' placeholder='请输入咨询标题'>
                </div>
            </div>
            <div class="advisoryContent">
                <div class="advisoryContentTitle">
                    咨询内容
                </div>
                <div class="advisoryContentTextarea">
                    <textarea name="name" rows="15" cols="5" v-model='content' placeholder='字数在150字以内'></textarea>
                    <!-- <div class="showTextarea">
                        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    </div> -->
                    <!-- <div class="underline1"></div>
                    <div class="underline2"></div>
                    <div class="underline3"></div> -->
                </div>
            </div>
            <div class="onlineButton">
                <button type="button" name="button" >发布</button>
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
            // 咨询标题 && 限制字数
            title: '',
            titleLimit: 3,
            // 咨询内容 && 限制字数
            content: '',
            contentLimit: 4,

            // 咨询流程
            askTitle: '线上咨询流程',
            askInfo: [
                {
                    title:'填写咨询流程标题和内容，点击发布；'
                },
                {
                    title:'等待律师回复；'
                },
                {
                    title:'在服务记录中查看律师回复结果；'
                },
                {
                    title:'完成服务；'
                },
            ]
        }
    },
    methods: {
        // 发送请求
        fromPost() {
            let logic = {
                titleLimit: this.title > this.titleLimit,
                contentLimit : this.content > this.contentLimit,
                empty: this.title == '' || this.content == ''
            }
            if (logic.titleLimit && logic.contentLimit) {
                return alert('发送失败，超出字数限制')
            } else if (logic.empty) {
                return alert('发送失败，标题或者内容不能为空')
            }
            console.log('满足条件')
            // let url = path + ''
            // let data = {
            //     title: this.title,
            //     content: this.content,
            // }
            // $.post(url, data, e => {

            // })
        }
    },
    watch: {
        title: function() {
            if (this.title.length > this.titleLimit) {
                // 切掉超出字数限制部分文字
                this.title = this.title.slice(0, this.titleLimit)
                alert(`请限制 ${this.titleLimit} 字以内`)
            }
        },
        content: function() {
            if (this.content.length> this.contentLimit) {
                // 切掉超出字数限制部分文字
                this.content = this.content.slice(0, this.contentLimit)
                alert(`请限制 ${this.contentLimit} 字以内`)
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
    .online {
        width: 600px;
        height: 490px;
        margin: 20px auto;
        border-radius: 10px;
        background: #fff;
        position: relative;
    }
    .online input {
        width: 400px;
        border: none;
        border-bottom: 1px solid #e5e5e5;
        /*font-size: 28px;*/
        line-height: 28px;

    }
    .online input, .advisoryContent textarea {
        position: relative;
        left: 30px;
        color: #43515a;
        font-size: 28px;
    }
    .advisoryContent {
        display: flex;
        position: relative;
    }
    .advisory, .advisoryContentTitle {
        display: flex;
        position: relative;
        padding: 42px 30px 0px 30px;
        font-size: 28px;
        color: #999;
    }
    .advisoryContentTextarea {
        position: relative;
        top: 20px;
        width: 400px;
        height: 220px;
    }
    .advisoryContent textarea{
        position: absolute;
        left: 0;
        top: 25px;
        height: 100%;
        width: 100%;
        line-height:28px;
        z-index: 100;
        /*line-height: 66px;*/
        /*border: none;*/
                overflow:hidden;
        text-overflow:ellipsis;
    }
    .showTextarea {
        position: absolute;
        top: 3px;
        height: 220px;
        width: 360px;
        left: 10px;
        font-size: 28px;
        color: #43515a;
        line-height: 70px;
        /* 限制字数 */
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        display: none;
       }
       .underline1 {
           position: absolute;
           top: 53px;
           width: 400px;
           height: 1px;
           background: black;
           z-index: 200;
       } .underline2 {
            position: absolute;
            top: 123px;
            width: 400px;
            height: 1px;
            background: black;
            z-index: 200;
        }
        .underline3 {
             position: absolute;
             top: 195px;
             width: 400px;
             height: 1px;
             background: black;
             z-index: 200;
         }
         /* 发布按钮 */
         .onlineButton {
             width: 560px;
             left: 20px;
             bottom: 20px;
             position: absolute;
         }
         .onlineButton Button{
             width: 560px;
             height: 60px;
             background: #3b93fb;
             border: none;
             border-radius: 10px;
             font-size: 30px;
             color: #f1f7ff;
         }
    }
</style>
