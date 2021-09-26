import axios, { AxiosRequestConfig, AxiosError } from 'axios'
import { Message } from 'view-design';
const http = axios.create({
  timeout: 10000,
  baseURL: 'http://localhost:5000'
})

// 请求拦截
// 每一次发请求前做的事情
http.interceptors.request.use((config) => {
  // 验证用户身份 
  // token: 令牌
  // 在登录成功之后后端签发令牌
  // 每一次发请求的时候 加上这个令牌
  const token = localStorage.getItem('token')
  if (token) {
    // headers属性是后端约定的
    config.headers['Authorization'] = token
  }
  return config
}, (err) => {
  return Promise.reject(err)
})
// 响应拦截，请求之后做的事
http.interceptors.response.use((res) => {
  return res.data
}, (err) => {
  const status = err.response && err.response.status
  if (status === 403) {
    Message.error('没有全选')
  }
  if (status === 404) {
    Message.error('路径错误')
  }
  if (status === 500) {
    Message.error('服务器错误')
  }
  if (status === 503) {
    Message.error('服务器维护')
  }
  return Promise.reject(err)
})

export default http