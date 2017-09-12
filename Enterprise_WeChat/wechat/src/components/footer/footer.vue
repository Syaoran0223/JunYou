<template lang="html">
<<<<<<< HEAD
    <div class="v-footer" >
        <div class="v-footer-index"v-for='(f, index) in footerList' :class="{'v-footer-show': index ==currentIndex}"
        @click="currentIndex = index">
            <router-link :to='f.to'>{{ f.titile }}</router-link>
=======
    <div class="v-footer">
        <div class="" v-for='(l, index) in footerList':class="{'v-footer-show': index == currentIndex}" @click='currentIndex = index' >
            <router-link :to='l.to' >{{ l.title }}</router-link>
>>>>>>> dde8b2c5c758f2ac304b50635dc4492af8ee2e99
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
<<<<<<< HEAD
            currentIndex: '',
            footerList: [
                {
                    to: '/',
                    titile: '首页',
                },
                {
                    to: '/server',
                    titile: '服务记录',
                },
                {
                    to: '/server',
                    titile: '',
                },
            ]
        }
    },
    methods: {

=======
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
>>>>>>> dde8b2c5c758f2ac304b50635dc4492af8ee2e99
    },
}
</script>

<style lang="css">
    .v-footer {
        position: fixed;
        bottom: 0px;
        height: 80px;
        line-height: 80px;
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
<<<<<<< HEAD
    .v-footer a{
=======
    .v-footer div a{
>>>>>>> dde8b2c5c758f2ac304b50635dc4492af8ee2e99
        text-decoration: none;
        display: block;
        width: 100%;
        height: 100%;
        font-size: 30px;
        background: #6A7D8F;
    }
    .v-footer-show a{
        background: #A4B3C1;
        z-index: 100;
    }
</style>
