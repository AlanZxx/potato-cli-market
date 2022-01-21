import axios from "./axios";
export const getMenu = () =>{
  return axios.request({
    url:'potato-web-market',
    method :'get'
  })
}