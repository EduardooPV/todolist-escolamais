import axios from 'axios'

const URL = "https://jsonplaceholder.typicode.com"

export const api = axios.create({
  baseURL: URL,
})
