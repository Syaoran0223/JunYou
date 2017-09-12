<template>
  <div class="Template">
      <router-view></router-view>
      <vFooter></vFooter>
  </div>
</template>

<script>
import vFooter from '@/components/Footer/footer'

export default {
    data() {
        return {

        }
    },
    components:{
        vFooter
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
