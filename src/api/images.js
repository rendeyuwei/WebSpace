import request from '@/utils/request'

export function getImages(path) {
    return request({
        url: path,
        method: 'get'
    })
}