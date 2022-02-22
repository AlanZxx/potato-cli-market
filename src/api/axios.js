// 二次封装axios 拦截器

import axios from "axios";
import config from '../config/index'
//设置配置  根据开发和生产环境不一样
const baseURL = process.env.NODE_ENV ==='development'? config.baseUrl.dev: config.baseUrl.pro

class HttpRequest{
  constructor(baseURL){
    this.baseURL = baseURL
  }
  getInsideConfig(){
    const config ={
      baseURL:this.baseURL,
      header:{

      }
    }
    return config
  }
  interceptors(instance){
    // 添加请求拦截器
    instance.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      console.log('拦截处理请求')
      return config;
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    });

    // 添加响应拦截器
    instance.interceptors.response.use(function (response) {
      // 对响应数据做点什么
      console.log('处理响应')
      return response;
    }, function (error) {
      console.log(error)
      // 对响应错误做点什么
      return Promise.reject(error);
    });
  }
  request(options){
    //请求创建实例
    const instance = axios.create();
    // const instance = axios.create();
    // 修改请求格式
    //技巧
    options = {...(this.getInsideConfig()),...options}
    this.interceptors(instance)
    return instance(options)
  }
  requestFormData(options){
    //请求创建实例
    const instance = axios.create()
    // 修改请求格式
    instance.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    instance.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    instance.defaults.transformRequest =  [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }]
    //技巧
    options = {...(this.getInsideConfig()),...options}
    this.interceptors(instance)
    return instance(options)
  }
}

export default new HttpRequest(baseURL)