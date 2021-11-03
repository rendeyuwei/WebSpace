import axios from 'axios'

const service = axios.create({
    baseURL: '/api',
    withCredentials: true,
    crossDomain: true,
    timeout: 50000
})

export default service