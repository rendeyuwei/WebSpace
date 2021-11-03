import axios from 'axios'

const service = axios.create({
    baseURL: '/image',
    withCredentials: true,
    crossDomain: true,
    timeout: 50000
})

export default service