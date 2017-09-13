<template lang="html">
    <div class="v-footer" >
        <div class="v-footer-index"v-for='(f, index) in footerList' :class="{'v-footer-show': index ==currentIndex}"
        @click="currentIndex = index">
            <router-link :to='f.to'>{{ f.titile }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
            ]
        }
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
        margin-top: 30px;
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
        font-size: 30px;
        background: #6A7D8F;
    }
    .v-footer-show a{
        background: #A4B3C1;
        z-index: 100;
    }
</style>
