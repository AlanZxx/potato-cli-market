<template>
  <div>
    <el-row :gutter="20" class="home">
      <el-col :span="8" style="margin-top:20px">
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
      <el-col :span="16" style="margin-top :20px">
        <div class="num">
          <el-card 
            shadow="hover" 
            v-for="item in countData" 
            :key="item.name" 
            :body-style="{ display:'flex',padding :0}"
          >
            <i 
              class="icon" 
              el-icon-menu
              :class="'el-icon-${item.icon}'" 
              :style="{background: item.color}"
            ></i>
            <div class="detail">
              <p class="num">￥{{item.value}}</p>
              <p class="txt">￥{{item.name}}</p>
            </div>
          </el-card>
        </div>
        <el-card shadow="hover" style="height:280px">
        </el-card>
        <div class="graph">
            <el-card shadow="hover" style="height:260px"></el-card>
            <el-card shadow="hover" style="height:260px"></el-card>
          </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {getMenuDataList} from '../../api/data'
export default {
  name : 'home',
  data(){
    return {
      userImg: require('../../assets/images/user.jpg'),
      tableData: [
        // {
        //   name:"香蕉",
        //   todayBuy:100,
        //   monthBuy:300,
        //   totalBuy:100000000000
        // },
        // {
        //   name:"苹果",
        //   todayBuy:50,
        //   monthBuy:300,
        //   totalBuy:800
        // },
        // {
        //   name:"橘子",
        //   todayBuy:30,
        //   monthBuy:300,
        //   totalBuy:800
        // },
        // {
        //   name:"辣条",
        //   todayBuy:10,
        //   monthBuy:300,
        //   totalBuy:800
        // },
        // {
        //   name:"瓜子",
        //   todayBuy:5,
        //   monthBuy:300,
        //   totalBuy:800
        // }
      ],
      tableLabel:{
          name:'课程',
          todayBuy:'今日购买',
          monthBuy:'本月购买',
          totalBuy:'总购买'
      },
      countData:[
        // {
        //   name:'今日支付订单',
        //   value:1234,
        //   icon:'success',
        //   color:'#2ec7c9'
        // },
        // {
        //   name:'今日收藏订单',
        //   value:214,
        //   icon:'star-on',
        //   color:'#ffb980'
        // },
        // {
        //   name:'今日未支付订单',
        //   value:123,
        //   icon:'s-goods',
        //   color:'#5ab1ef'
        // },
        // {
        //   name:'本月支付订单',
        //   value:1234,
        //   icon:'success',
        //   color:'#2ec7c9'
        // },
        // {
        //   name:'本月收藏订单',
        //   value:210,
        //   icon:'star-on',
        //   color:'#ffb980'
        // },
        // {
        //   name:'本月未支付订单',
        //   value:1234,
        //   icon:'success',
        //   color:'#5ab1ef'
        // }
      ]
    }
  },
  mounted(){
    getMenuDataList().then((res)=>{
      const {code,data} = res.data
      if(code === 200){
        this.tableData = data.tableData
        this.countData = data.countData
        // this.tableLabel = data.tableLabel
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/home"
</style>