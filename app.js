import Api from './services/index.js'
App({
    appName: '',
    appPsw: '',
    dealerIndex: '',
    scrollHeight: wx.getSystemInfoSync().windowHeight,
    onLaunch: function(options) {
        let that = this;
        wx.showLoading({
            title: '程序准备中',
            mask: true
        })
        console.log("ready");
        setTimeout(function () {
            wx.hideLoading()
          }, 1000)
    },

    // 全局变量
    globalData: {
        clienInfo: {},
        sale: false,
        news: false,
        credit: false,
    }
})