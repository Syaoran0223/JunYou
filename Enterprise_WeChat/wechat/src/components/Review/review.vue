<template lang="html">
    <div class="">
        <div class="customize">
            <div class="type">
                <div class="title">
                    上传材料
                </div>
                <div class="uploadButton">
                    <button id='upload' type="button" name="button">上传附件</button>
                </div>
            </div>
            <!-- 输入内容 -->
            <div class="content">
                <div class="">
                    <textarea name="name" placeholder="请输入咨询内容"></textarea>
                </div>
            </div>
            <div class="bottom">
                <div class="price">
                    原价: <span class="priceColor">￥{{ price }}</span> </div>
                <div class="number">
                     剩余次数: <span class="numberColor">{{ times }}</span>
                </div>
                <div class="button">
                    <button id ='reviewButton'type="button" name="button" >发&nbsp;&nbsp;布</button>
                </div>
            </div>
        </div>
        <zixunliucheng :title=askTitle :infoMain=askInfo></zixunliucheng>
        <shijian></shijian>
        <div class="reviewAlert" v-show='alertShow'>
            <reviewAlert :tip='tip'></reviewAlert>
        </div>
        <div class="uploadAlert" v-show='uploadShow'>
            <upload></upload>
        </div>
    </div>
</template>

<script>
import zixunliucheng from '@/components/Public/zixunliucheng'
import shijian from '@/components/Public/zixunshijian'
import Alert from '@/components/Review/alert'
import Upload from '@/components/Review/upload'
export default {
    data() {
        return {
            // 支付弹窗
            alertShow: false,
            // 弹窗提示内容
            tip: false,
            // 上传附件弹窗
            uploadShow: false,
            // 价格
            price:500,
            // 剩余次数
            times: 5,
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
            ]
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.reviewButtonClick()
            this.okButtonClick()
            this.cancelButtonClick()
            this.uploadButtonClick()
            this.uploadBgClick()
            this.albumClick()
            this.shootClick()
        })
    },
    methods: {
        // 点击 发布 弹窗
        reviewButtonClick() {
            $('#reviewButton').on('click', e => {
                this.$store.commit('alertShowSave', true)
                this.alertShow = this.$store.state.alertShow
                if(this.times >= 1 ) {
                    this.tip = true
                } else {
                    this.tip = false
                }
            })
        },
        // 点击 发布 弹窗出现后 点击确定
        okButtonClick() {
            $('.ok').on('click', e => {
                if (this.tip == true) {
                    console.log('使用成功')
                    this.alertShow = false
                } else {
                    console.log('使用失败')
                    this.alertShow = false
                }
            })
        },
        // 点击 发布 弹窗出现后 点击取消
        cancelButtonClick() {
            $('.cancel').on('click', e => {
                this.alertShow = false
                console.log('取消')
            })
        },
        // 点击上传
        uploadButtonClick() {
            $('#upload').on('click', e => {
                this.uploadShow = true
                console.log('上传')
            })
        },
        // 上传弹窗后 按背景取消
        uploadBgClick() {
            $('.uploadBg').on('click', e => {
                this.uploadShow = false
                console.log('取消拍照选项')
            })
        },
        // 照片
        albumClick() {
            $('.album').on('click', e => {
                console.log('点击到了照片')
            })
        },
        // 拍照
        shootClick() {
            $('.shoot').on('click', e => {
                console.log('点击到了拍摄')
            })
        }
    },
    components: {
        zixunliucheng:zixunliucheng,
        shijian: shijian,
        reviewAlert: Alert,
        upload: Upload,
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
        margin: 20px;
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
        position: relative;
        top: 10px;
        height: 50px;
    }
    .customize .uploadButton {
        position: relative;
        top: -10px;

    }
    .customize .uploadButton button{
        width: 160px;
        height: 60px;
        background: #3B93FB;
        border-radius: 10px;
        color: #f1f7ff;
        border: none;
    }

    /* 文本内容 */
    .customize .content {
        margin-top: 30px;
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
    .customize .bottom button {
        width: 160px;
        height: 60px;
        background: #3B93FB;
        border-radius: 10px;
        color: #f1f7ff;
        border: none;
    }
    .customize button {
        font-size: 26px;
    }

</style>
