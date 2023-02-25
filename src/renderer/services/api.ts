import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4531'
})

export default api
