import request from '@/utils/request'

export function getHotMovies(params) {
    return request({
        url: '/movie/popular',
        method: 'get',
        params: {
            'api_key': params.api_key,
            'language': params.language,
            'page': params.page
        }
    })
}

