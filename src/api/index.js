import axios from 'axios'

let nexus = axios.create()
nexus.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    config.baseURL = 'http://120.25.96.50:1337'
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
nexus.interceptors.response.use(
  function(response) {
    // Do something with response data
    if (response.status === 200) return response.data
    else return response
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error)
  }
)
export default nexus
