App({
    appName: '',
    appPsw: '',
    dealerIndex: '',
    scrollHeight: wx.getSystemInfoSync().windowHeight,
    onLaunch: function(options) {
        wx.showLoading({
            title: '程序准备中',
            mask: true
        })
        console.log("ready");
        setTimeout(function() {
            wx.hideLoading()
        }, 1000)
    },

    // 全局变量
    globalData: {
        //环境变量
        env: 'dev'
    }
})