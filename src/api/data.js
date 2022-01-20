import axios from "./axios";
export const getMenu = () =>{
  return axios.request({
    url:'menu',
    method :'get'
  })
}