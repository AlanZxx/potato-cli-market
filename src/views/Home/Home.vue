<template>
  <div>
    <el-row :gutter="20" class="home">
      <el-col :span="8" class="margin-top:20px">
        <el-card shadow="hover">
          <div class="user">
            <img :src="userImg">
            <div class="userinfo">
              <p class="name">admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登陆时间：<span>2022-1-19</span></p>
            <p>上次登陆地点：<span>武汉</span></p>
          </div>
        </el-card>
        <el-card style="margin-top:20px">
          <el-table :data="tableData">
            <el-table-column 
              show-overflow-tooltip 
              v-for="(val,key) in tableLabel"
              :key="key"
              :prop="key"
              :label="val">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16" class="margin-top:20px"></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data(){
    return {
      userImg: require('../../assets/images/user.jpg'),
      tableData: [
        {
          name:"香蕉",
          todayBuy:100,
          monthBuy:300,
          totalBuy:100000000000
        },
        {
          name:"苹果",
          todayBuy:50,
          monthBuy:300,
          totalBuy:800
        },
        {
          name:"橘子",
          todayBuy:30,
          monthBuy:300,
          totalBuy:800
        },
        {
          name:"辣条",
          todayBuy:10,
          monthBuy:300,
          totalBuy:800
        },
        {
          name:"瓜子",
          todayBuy:5,
          monthBuy:300,
          totalBuy:800
        }
      ],
      tableLabel:{
          name:'课程',
          todayBuy:'今日购买',
          monthBuy:'本月购买',
          totalBuy:'总购买'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/home"
</style>