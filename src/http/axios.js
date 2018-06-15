import Vue from 'vue';
import axios from 'axios';

var vue = null
export function createHttp(){
  Vue.prototype.$http = axios
  initInterceptersRequest()
  initInterceptersResponse()
}

export function bindVue($vue){
  vue = $vue
}

const initInterceptersRequest = ()=>{
  axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config,3)
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

}
const initInterceptersResponse = ()=>{
  axios.interceptors.response.use(function (response) {
    if (parseInt(response.data.code) === 9000 || parseInt(response.data.respCode) === 9000) {
      return response
    } else {
      var msg = response.data.respDesc ? response.data.respDesc : response.data.message
      vue.$message({ message: msg, type: 'warning' });
      return Promise.reject({})
    }
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

}