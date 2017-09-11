<template lang="html">
    <div class="v-footer">
        <div class="" v-for='(l, index) in footerList':class="{'v-footer-show': index == currentIndex}" @click='currentIndex = index' >
            <router-link :to='l.to' >{{ l.title }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 2,
            footerList: [
                {
                    to:'/',
                    title:'首页',
                    name:'Home',
                },
                {
                    to:'/1',
                    title:'服务记录',
                    name:'Home',
                },
                {
                    to:'/',
                    name:'Home',
                    title:'我的',
                },
            ],

        }
    },
    methods: {
        log() {
            console.log('index', index)
        }
    },
}
</script>

<style lang="css">
    .v-footer {
        position: fixed;
        bottom: 0px;
        height: 40px;
        line-height: 40px;
        width: 100%;
        display: flex;
        justify-content:space-around;
        text-align: center;
        font-size: 20px;
    }
    .v-footer div {
        width: 100%;
        height: 100%;
    }
    .v-footer div a{
        text-decoration: none;
        display: block;
        width: 100%;
        height: 100%;
    }
    .v-footer-show {
        background: red;
    }
</style>
