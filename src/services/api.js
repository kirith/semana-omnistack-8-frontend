import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN
})

console.log('api domain', process.env.REACT_APP_API_DOMAIN)

export default api