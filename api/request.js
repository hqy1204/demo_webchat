import httpConfig from './config'
import env from './env'

const req = ({ baseUrl, method, url, data, header = {} }) => {
    return new Promise((resolve, reject) => {
        wx.request({
            method: method.toUpperCase(),
            url: env[baseUrl] + url,
            data: data,
            timeout: httpConfig.timeOut,
            header: Object.assign(httpConfig.header, header),
            success(res) {
                resolve(res.data)
            },
            fail(res) {
                reject(res)
            }
        })
    })
}

export default req


// export default {
//     get(baseUrl, url, params, header) {
//         return this.request('GET', baseUrl, url, params, header)
//     },
//     post(url, params, header, contentType) {
//         return this.request('POST', baseUrl, url, params, header, contentType)
//     },
//     put(url, params, header, contentType) {
//         return this.request('PUT', baseUrl, url, params, header, contentType)
//     },
//     json(url, params, header) {
//         return this.request('POST', baseUrl, url, params, header, 'application/json')
//     },
//     delete(url, params, header) {
//         return this.request('DELETE', baseUrl, url, params, header)
//     },
//     request(method, baseUrl, url, params, header = {}, contentType) {
//         return new Promise((resolve, reject) => {
//             wx.request({
//                 method,
//                 url: env[baseUrl] + url,
//                 // url: httpConfig.baseUrl + url,
//                 timeout: httpConfig.timeOut,
//                 data: params,
//                 header: Object.assign(httpConfig.header, header),
//                 success(res) {
//                     return resolve(res.data)
//                 },
//                 fail(res) {
//                     reject(res)
//                 }
//             })
//         })
//     }
// };