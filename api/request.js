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