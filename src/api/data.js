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

export const addMallType = () =>{
  return axios.request({
    url:'/potato-web-market/addMallType',
    method :'post'
  })
}