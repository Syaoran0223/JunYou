<template lang="html">
    <div class="load">
  <p v-for="(item, index) in list">
      index: {{ index }}
      Line:
    <span v-text="item"></span>
  </p>
  <infinite-loading @infinite="infiniteHandler"></infinite-loading>
</div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import Ajax from '@/tool/ajax'

export default {
    data() {
        return {
            list: [1,2,3,4,5,6,7,8,9],
        };
    },
    methods: {
        infiniteHandler($state) {
            setTimeout(() => {
                let path = this.$store.state.path
                let url = path + '/weixin/AccessToken'
                let request = {
                   url : url,
                   method: 'GET',
               }
                const temp = [];
                Ajax(request).then(e=> {
                    let token = JSON.parse(e).access_token
                    this.$store.commit('accessTokenSave', token)
                    let l = this.$store.state.AccessToken.slice(1,5)
                    return l
                }).then(l => {
                    for (var i = 0; i < 10; i++) {
                        temp.push(l)
                    }
                    this.list = this.list.concat(temp);
                    $state.loaded();
                    console.log(this.list.length)
                })
                // 原版
            }, 1000);
        },
    },
    components: {
        InfiniteLoading,
    },
};
</script>

<style lang="css">
    .load {
        margin-bottom: 80px;
    }
</style>
