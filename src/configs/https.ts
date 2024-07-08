import axios, { AxiosError, type AxiosInstance } from 'axios'
import { auth } from 'src/types/auth.type'
import { clearTokenLS, getTokenLS, setTokenLS } from 'src/untils/untils'
class Https {
  private token: string
  instance: AxiosInstance
  constructor() {
    this.token = getTokenLS()
    this.instance = axios.create({
      baseURL: 'https://api-training.hrm.div4.pgtest.co/api/v1',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.request.use(
      (config) => {
        if (this.token && config.headers) {
          config.headers.Authorization = `Bearer ${this.token}`
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use((res) => {
      const { url } = res.config
      if (url === '/login') {
        const data = res.data as auth
        // console.log(data.data.token)
        setTokenLS(data.data.token)
      } else if (url == '/logout') {
        ;(this.token = ''), clearTokenLS()
      }

      return res
    })
  }
}
const https = new Https().instance
export default https
