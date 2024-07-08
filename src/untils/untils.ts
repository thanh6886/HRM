export const setTokenLS = (token: string) => {
  return localStorage.setItem('token', token)
}
export const getTokenLS = () => {
  return localStorage.getItem('token') || ''
}
export const clearTokenLS = () => {
  return localStorage.removeItem('token')
}
