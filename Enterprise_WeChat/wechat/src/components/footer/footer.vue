<template lang="html">
    <div class="v-footer">
        <router-link to='/'@click='footerShowfunc'>首页</router-link>
        <router-link to='/'>服务记录</router-link>
        <router-link to='/'>我的</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            footerShow: true,
        }
    },
    methods: {
        footerShowfunc() {
            console.log('this')
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
    .v-footer a{
        text-decoration: none;
        display: block;
        width: 100%;
        height: 100%;
    }
    .v-footer-show {
        background: red;
    }
</style>
