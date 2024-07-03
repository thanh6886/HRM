import https from 'src/configs/https'

const auth = {
  login(body: { username: string; password: string; company_id: string }) {
    return https.post('/login', body)
  }
}
export default auth
