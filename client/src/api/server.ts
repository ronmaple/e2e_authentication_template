import axios from 'axios'

const baseURL = import.meta.env.VITE_SERVER_URL || 'http://localhost:3000'

const server = axios.create({
  baseURL,
})

export { server }
