/**
 * Created by Administrator on 2016/11/1.
 */
import Vue from 'vue'
import axios from 'axios'
import config from './config.js'

const {HOST, baseApi, basePostData} = config
// const bookApi= (service, postData) => axios.post(service == 'ddyy.system.wechat.jsapiticket.get' ? baseApi : HOST, {service:service, ...basePostData, ...postData })
const bookApi = axios.create()
bookApi.interceptors.request.use( config=> {
  // console.log(config)
  const { data, url } = config

  config.method = 'POST'
  config.data = {service: url, ...basePostData, ...data}
  config.url = url == 'ddyy.system.wechat.jsapiticket.get' ? baseApi : HOST
  return config
},  error=> {
  alert('请求错误')
  return Promise.reject(error)
});

Add a response interceptor
bookApi.interceptors.response.use( res=> {
  const {code, msg} = res.data || {}
  if(code == '-1' && msg == '该手机号已注册' && location.pathname == "/WeChat/formaltThirdParty/medical/") return res.data
  if(code != 0) alert(msg || code)
  return res.data
}, error=> {
  alert('系统错误,请稍后重试')
  return Promise.reject(error);
})

export default bookApi.post