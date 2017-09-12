<template lang="html">
  <div class="">
      这里是 - 我的
      <router-link to='/my/child'>显示子组件</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
import MyTemp1 from '@/components/My/my-temp1'
export default {
    data() {
        return {

        }
    },
    components: {
        child: MyTemp1
    }

}
</script>

<style lang="css">
</style>
