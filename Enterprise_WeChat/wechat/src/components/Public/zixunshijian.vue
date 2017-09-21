<template lang="html">
    <div class="advisoryTime">
        <div class="advisoryTimeMain">
            <div class="title">
                <div class="line"></div>
                <div class="time">
                    咨询时间
                </div>
            </div>
            <div class="content">
                法定工作日10:00-19:00提交的法律咨询，一个小时内专业律师为您解答；非法定工作日提交的需求，下个工作日上午10:00前给您解答。
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css">        
    .advisoryTime {
        width: 600px;
        height: 170px;
        margin: 20px auto;
        background: #fff;
        border-radius: 10px;
    }
    .advisoryTimeMain {
        width: 560px;
        position: relative;
        top: 30px;
        left: 20px;

    }
    .advisoryTime .title {
        position: relative;
        display: flex;
    }
    .advisoryTime .title .line {
        width: 4px;
        height: 24px;
        background:#3b93fb;
        position: relative;
    }
    .advisoryTime .title .time {
        position: relative;
        left: 12px;
        font-size: 26px;
        top: -5px;
        color: #3b93fb;
    }
    .advisoryTime .content {
        font-size: 20px;
        color: #69747b;
    }
</style>
