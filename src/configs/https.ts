import axios, { AxiosError, type AxiosInstance } from 'axios'
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
  }
}
const https = new Https().instance
export default https
