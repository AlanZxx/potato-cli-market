import axios from "./axios";
export const getMenu = () =>{
  return axios.request({
    url:'/potato-web-market',
    method :'get'
  })
}

export const getData = () =>{
  return axios.request({
    url:'/home.getData',
    method :'get'
  })
}

// 查询商品类别
export const getMallTypeList = () =>{
  return axios.request({
    url:'/potato-web-market/getMallTypeList',
    method :'get'
  })
}
// 添加商品类别
export const addMallType = () =>{
  return axios.request({
    url:'/potato-web-market/addMallType',
    method :'post',
    data: '222'
  })
}