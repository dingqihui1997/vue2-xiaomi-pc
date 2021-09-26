// #ifdef APP-PLUS || APP-PLUS-NVUE || MP-WEIXIN
import Fly from 'flyio/dist/npm/wx'
// #endif

// #ifdef H5
import Fly from 'flyio/dist/npm/fly'
// #endif
import { Message } from 'view-design';
const fly = new Fly

fly.config.baseURL = 'http://localhost:5000'

fly.interceptors.request.use(config => {
  uni.showLoading({
    title: '加载中...'
  })
  let token = uni.getStorageSync('token')
  if (token) {
    // headers属性是后端约定的
    config.headers['Authorization'] = token
  }
  return config
}, err => {
  uni.hideLoading()
  return Promise.reject(err)
})

fly.interceptors.response.use(res => {
  uni.hideLoading()
  return res.data
}, err => {
  uni.hideLoading()
  console.log(err)
  let status = err.response && err.response.status
  if (status === 400) {
    Message.error('参数错误')
  }
  if (status === 401) {
    Message.error('登录过期')
  }
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

export default fly