import axios from "./axios";

// 查询首页商品
export const getMenuDataList = () =>{
  return axios.request({
    url:'/getMenuDataList',
    method :'get'
  })
}

// 查询商品类别
export const getMallTypeList = () =>{
  return axios.request({
    url:'/getMallTypeList',
    method :'get'
  })
}
// 添加商品类别
export const addMallType = (paramas) =>{
  return axios.requestFormData({
    url:'/addMallType',
    method :'post',
    data: paramas
  })
}
// 删除商品类别
export const delMallType = (paramas) =>{
  return axios.requestFormData({
    url:'/delMallType',
    method :'post',
    data: paramas
  })
}

// 修改商品类别
export const modMallType = (paramas) =>{
  return axios.request({
    url:'/modMallType',
    method :'post',
    data: paramas
  })
}

// 获取所有商品类别列表
export const getMallTypeIdList = (paramas) =>{
  return axios.request({
    url:'/getMallTypeIdList',
    method :'get',
    data: paramas
  })
}


// 添加商品
export const addGoods = (paramas) =>{
  return axios.request({
    url:'/addGoods',
    method :'post',
    data: paramas
  })
}


// 查询商品列表
export const getGoodList = () =>{
  return axios.request({
    url:'/getGoodList',
    method :'get'
  })
}


// 修改商品信息
export const modGoods = (paramas) =>{
  return axios.request({
    url:'/modGoods',
    method :'post',
    data: paramas
  })
}

// 删除商品
export const delGoods = (paramas) =>{
  return axios.requestFormData({
    url:'/delGoods',
    method :'post',
    data: paramas
  })
}


//封装通用get请求
export const request_get = (url,paramas)=>{
  return axios.request(
    {
      url:'/'+url,
      method :'get',
      data: paramas
    }
  ).then((res)=>{
    const {code,message,data} = res.data
    console.log('success');
    console.log(res)
    if(code === 200){
      return data;
      // 删除成功
      // this.$message({type: 'success',message: '修改成功!'});
      // this.getInitData();
      // this.dialogVisible = false;
    }
    if(code === 500){
      // this.$message.error(message);
    }
  }).catch(()=>{
    this.$message({message:'请求失败,请联系管理员',type:'error'});
  }).finally(()=>{
  })
}
