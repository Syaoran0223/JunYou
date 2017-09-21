<template lang="html">
    <div class="alert">
        <div class="bg">
        </div>
        <div class="alertMain">
            <div class="title" v-if='tip'>
                是否使用 &nbsp;<span class="okColor">1</span>&nbsp;合同审查次数
            </div>
            <div class="title" v-else>
                <div class="elseTitle">
                        <span class="payTitle">确认支付</span>
                        <span class="payContent">
                            合同审查
                            <span class="elseColor">次数不足</span>，请联系管理员充值。
                        </span>

                </div>
            </div>
            <div class="buttons">
                <div class="cancel">
                    取消
                </div>
                <div class="ok">
                    确认
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['tip'],
    mounted() {

    },
    methods: {
        okButtonClick() {
            // $('.ok').on('click', function(e) {
                console.log('tip', this.tip)
                if (this.tip == true) {
                    console.log('使用成功')
                    this.$store.state.alertShow = false
                } else {
                    console.log('使用失败')
                    this.alertShow = false
                }
            // })
        },
    },
}
</script>

<style lang="css">
    .alert {
        position: fixed;
        top: 0;
        left: 0;
    }
    .alert .bg{
        width: 100vw;
        height: 100vh;
        background: black;
        opacity: 0.6;
    }
    .alert .alertMain {
        width: 540px;
        height: 290px;
        z-index: 100;
        position: absolute;
        top: 360px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10px;
        overflow: hidden;
    }
    .alert .alertMain .title {
        width: 100%;
        height: 200px;
        font-size: 32px;
        line-height: 200px;
        text-align: center;
        color: #43515a;
        background: white;
        position: relative;
    }
    .alert .alertMain
    .alert .alertMain .elseTitle {
        font-size: 28px;
        height: 200px;
        position: relative;
    }
    /* 次数不足标题*/
    .alert .alertMain .elseTitle .payTitle {
        color: #43515a;
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 32px;
        line-height: 32px;
    }
    /*次数不足内容*/
    .alert .alertMain .elseTitle .payContent {
        position: absolute;
        top: 120px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        font-size: 27px;
        color: #69747b;
        line-height: 27px;

    }
    /* 提示标题字体颜色 */
    .alert .alertMain .title .okColor {
        color: red;
    }
    .alert .alertMain .title .elseColor {
        color: #3b93fb;
    }
    /* 弹窗按钮设置 */
    .alertMain .buttons {
        display: flex;
        justify-content: space-around;
        height: 90px;
        line-height: 90px;
        text-align: center;
        font-size: 30px;
        color: #f1f7ff;
    }
    .alertMain .buttons div {
        width: 105%;
        height: 100%;
    }
    .alertMain .cancel {
        background: #fe9606;
    }
    .alertMain .ok {
        background: #3b93fb;
    }
</style>
