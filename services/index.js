import req from '../api/request.js'
export default {
    //  信用报告页面
    getCreditData(param, header) {
        return req.get('/order/user/desktop', param, header)
    },
    // 获取tokenKey
    getTokenKey(param, header) {
        return req.get('account/register', param, header)
    }
}