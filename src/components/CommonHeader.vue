<template>
  <header>
    <div class="l-content"
    >
      <el-button plain icon="el-icon-menu" size="mini" @click="handleMenu"></el-button>
      <!-- <h3 style="color:#fff">首页</h3> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" szie="mini">
        <span class="el-dropdown-link">
          <img :src="userImg" class="user"/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState} from 'vuex'
export default {
  name: 'CommonHeader',
  data() {
    return {
      userImg: require('../assets/images/user.jpg')
    }
  },
  methods:{
    handleMenu(){
      this.$store.commit('collapseMenu')
    }
  },
  computed :{
    ...mapState({
      tags: state => state.tab.tabsList
    })
  }
  
}
</script>

<style lang="scss" scoped>
header{
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  // background-color: aquamarine;
}
.l-content{
  display: flex;
  align-items: center;
  .el-button{
    margin-right: 20px;
  }
}
.r-content{
  .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>