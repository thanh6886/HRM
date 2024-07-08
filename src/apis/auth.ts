import https from 'src/configs/https'

const auth = {
  login(body: { username: string; password: string; company_id: string }) {
    return https.post('/login', body)
  },
  logout() {
    return https.post('/logout')
  }
}
export default auth
