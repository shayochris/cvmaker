import axios from "axios"

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000/home/api/'
})

axiosClient.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("token"))
  config.headers.Authorization = `Bearer ${token}`
  return config
})

axiosClient.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log(error)
  }
)

export default axiosClient