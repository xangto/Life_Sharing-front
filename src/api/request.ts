import axios, {type AxiosResponse} from 'axios'
import {ElMessage} from 'element-plus'
import type {Result} from './types'

const request = axios.create({
  baseURL: '/api',
  timeout: 15000,
})

request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use(
  (response) => {
    const res = response.data as Result
    if (res.code !== 200) {
      ElMessage.error(res.message || '请求失败')
      return Promise.reject(new Error(res.message || '请求失败'))
    }
    // 解包：调用方直接拿到 data
    // 类型断言以满足 axios 拦截器签名（运行时仍返回解包后的 data）
    return res.data as AxiosResponse
  },
  (error) => {
    ElMessage.error(error.response?.data?.message || '网络异常，请稍后重试')
    return Promise.reject(error)
  },
)

// 拦截器已将响应解包为 data，这里提供类型干净的调用签名
const http = {
  get: <T>(url: string, params?: object) => request.get(url, {params}) as unknown as Promise<T>,
  post: <T>(url: string, data?: object) => request.post(url, data) as unknown as Promise<T>,
  put: <T>(url: string, data?: object) => request.put(url, data) as unknown as Promise<T>,
  delete: <T>(url: string) => request.delete(url) as unknown as Promise<T>,
}

export default http
