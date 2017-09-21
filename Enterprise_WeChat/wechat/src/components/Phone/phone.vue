<template lang="html">
    <div class="">
    <div class="phoneAdvisory">
            <div class="titleMain phoneAdvisoryMain">
                <div class="title">
                    咨询标题
                </div>
                <div class="content">
                    <input type="text" name="" value="" placeholder='请输入咨询标题'>
                </div>
            </div>
            <div class="advisoryMain phoneAdvisoryMain">
                <div class="title">
                    咨询内容
                </div>
                <div class="content">
                    <textarea name="name" placeholder='请输入咨询内容' rouws='5'></textarea>
                    <!-- <input type="text" name="" value=""> -->
                </div>
            </div>
            <div class="nameMain phoneAdvisoryMain">
                <div class="title">
                    姓名
                </div>
                <div class="content">
                    <input type="text" name="" value=""placeholder='请输入您的姓名'>
                </div>
            </div>
            <div class="phoneMain phoneAdvisoryMain">
                <div class="title" >
                    电话
                </div>
                <div class="content">
                    <input type="text" name="" value=""placeholder='请输入您的手机号'>
                </div>
            </div>
            <div class="phoneButton">
                <button type="button" name="button">发布</button>
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
    components: {
        zixunliucheng:zixunliucheng,
        shijian: shijian,
    }
}
</script>

<style lang="css">
    body {
        background: #E9F1FE;
        padding: 0;
        margin: 0;
    }
    .phoneAdvisory {
        margin: 20px auto;
        width: 600px;
        height: 644px;
        border-radius: 10px;
        background: #fff;
        padding-top: 42px;
        position: relative;
    }
    .phoneAdvisory .phoneAdvisoryMain {
        display: flex;
        position: relative;
        left: 30px;
        width: 550px;
        margin-bottom: 40px;
        font-size: 28px;
    }
    .phoneAdvisory .phoneAdvisoryMain .title{
        /*font-size: 20px;*/
        color: #999;
        width: 120px;
    }
    .phoneAdvisory .phoneAdvisoryMain input {
        width: 400px;
        font-size: 28px;
        padding: 0;
    }
    .phoneAdvisory .advisoryMain textarea {
        height: 220px;
        width: 400px;
        font-size: 28px;
        padding: 0;
        margin: 0;
    }
    .phoneButton {
        width: 560px;
        left: 20px;
        bottom: 20px;
        position: absolute;
    }
    .phoneButton Button{
        width: 560px;
        height: 60px;
        background: #3b93fb;
        border: none;
        border-radius: 10px;
        font-size: 30px;
        color: #f1f7ff;
    }
</style>
