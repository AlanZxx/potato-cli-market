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
  return axios.request({
    url:'/addMallType',
    method :'post',
    data: paramas
  })
}
// 删除商品类别
export const delMallType = (paramas) =>{
  return axios.request({
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