export default{
  state:{
    //是否缩放左侧菜单栏
    isCollapse: false,
    //面包屑数组
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ],
    dialogMessage:[
      {
        titleName:'种类管理',
        addCancelMessage:'取消新增种类',
        addSuccessMessage:'新增种类成功',
        modCancelMessage:'取消修改种类',
        modSuccessMessage:'修改种类成功',
      }
    ],
    currentMenu: null
  },
  mutations: {
    collapseMenu(state){
      state.isCollapse= !state.isCollapse
    },
    //用于改变tabsList数组
    selectMenu(state,val){
      if(val.name !== 'home'){
        state.currentMenu = val
        const result = state.tabsList.findIndex(item => item.name === val.name)
        if(result === -1){
          //找不到
          state.tabsList.push(val)
        }
      } else {
        //如果选中的是首页
        state.currentMenu = null
      }
    },
    closeTag(state,val){
      const result = state.tabsList.findIndex(item=>item.name === val.name)
      state.tabsList.splice(result,1)
    }
  },
  actions: {
  },
  modules: {
  }
}