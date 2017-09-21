<template lang="html">
    <div class="zixunliucheng">
        <div class="title">
            <div class="line">

            </div>
            <div class="content">
                {{ title }}
            </div>
        </div>
        <div class="">
        </div>
        <div class="infoMain" v-for='i in infoMain'>
            <div class="infoImg">
                <div class="cricle">
                </div>
            </div>
            <div class="infoContent">
                {{ i.title }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title','infoMain'],
    data() {
        return {

        }
    }
}
</script>

<style lang="css">
    .zixunliucheng {
        margin: 20px;
        padding: 30px 0px;
        background: #fff;
        border-radius: 10px;
        width: 600px;
        height: 200px;
    }
    .zixunliucheng .title {
        width: 300px;
        display: flex;
        font-size: 26px;
        color: #3b93fb;
        position: relative;
        /*top: 10px;*/
        left: 32px;
        margin-bottom: 20px;
    }
    .zixunliucheng .line {
        width: 4px;
        height: 24px;
        background: #3b93fb;
        position: relative;
        left: -12px;
        top: 5px;
    }
    .zixunliucheng .infoMain {
        display: flex;
        width: 550px;
        font-size: 20px;
        position: relative;
        left: 20px;
        color: #69747b;
        position: relative;
        margin-top: 10px;
    }
    .zixunliucheng .infoContent {
        position: relative;
        left: 5px;
        top: -5px;
    }
    .cricle {
        width: 10px;
        height: 10px;
        background-color: #fff; /* Can be set to transparent */
        border: 3px #69747b solid;
        -webkit-border-radius: 100px;
    }
</style>
