<template>
  <div class="tabs">
    <el-tag
      size="small"
      :closable = "tag.name !== 'home'"
      :effect = " $router.name == tag.name ? 'dark' : 'plain' "
      v-for="(tag, index) in tags"
      :key = "tag.name"
      @click=" changeMenu(tag) "
      @close = "handleClose(tag,index)"
    >
      {{tag.label}}
    </el-tag>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'CommonTag',
  data() {
    return {
      
    }
  },
  computed:{
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
  methods :{
    ...mapMutations({
      close: 'closeTag'
    }),
    changeMenu(item){
      this.$router.push({name:item.name})
    },
    handleClose(tag,index){
      const length = this.tags.length -1 
      this.close(tag)
      //如果点击删除的路由与焦点路由不一致
      if ( tag.name !== this.$router.name ){
        return;
      }
      //点击的最右边的一个tag
      if(index === length){
        this.$router.push({name: this.tags[index-1].name})
      }else{
        this.$router.push({name : this.tags[index].name})
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs{
  padding: 20px;
  .el-tag{
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>