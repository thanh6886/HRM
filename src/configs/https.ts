import axios, { AxiosError, type AxiosInstance } from 'axios'
import { auth } from 'src/types/auth.type'
import { setTokenLS } from 'src/untils/untils'
class Https {
  instance: AxiosInstance
  constructor() {
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
    this.instance.interceptors.response.use((res) => {
      const { url } = res.config
      if (url === '/login') {
        const data = res.data as auth
        console.log(data.data.token)
        setTokenLS(data.data.token)
      }

      return res
    })
  }
}
const https = new Https().instance
export default https
