<template>
  <el-container>
    <el-aside width="auto"><common-aside-vue class="aside"/></el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <common-tag></common-tag>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAsideVue from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTag from '../components/CommonTag.vue'
export default {
  name: 'Main',
  components: {
    CommonAsideVue,
    CommonHeader,
    CommonTag
  }
}
</script>
<style lang="scss" scoped>
.aside{
  height: 100vh;
}
.el-header{
  background: #333333;
}
.el.main{
  padding-top: 0;
}
</style>
