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