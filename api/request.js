import httpConfig from '../config/httpConfig'
export default {
    get(url, params, header) {
        return this.request('GET', url, params, header)
    },
    post(url, params, header, contentType) {
        return this.request('POST', url, params, header, contentType)
    },
    put(url, params, header, contentType) {
        return this.request('PUT', url, params, header, contentType)
    },
    json(url, params, header) {
        return this.request('POST', url, params, header, 'application/json')
    },
    delete(url, params, header) {
        return this.request('DELETE', url, params, header)
    },
    request(method, url, params, header = {}, contentType) {
        return new Promise((resolve, reject) => {
            wx.request({
                method,
                url: httpConfig.baseUrl + url,
                timeout: httpConfig.timeOut,
                data: params,
                header: Object.assign(httpConfig.header, header),
                success(res) {
                    return resolve(res.data)
                },
                fail(res) {
                    reject(res)
                }
            })
        })
    }
};