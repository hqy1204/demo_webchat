var app = getApp();
//Page Object
Page({
    /**
     * 页面的初始数据
     */
    data: {
        navTitle: "我是圆形环控件",
        // 圆形环配置
        config: {
            canvasSize: { width: 300, height: 300 },
            barStyle: [{ width: 12, fillStyle: '#f0f0f0' }, { width: 12, fillStyle: [{ position: 0, color: '#56B37F' }, { position: 1, color: '#c0e674' }] }]
        },
        percentage: 50
    },
    // 函数
    methodsTest() {
        console.log(1)
    },


    //options(Object)
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */

    onShow: function() {

    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    onPageScroll: function() {

    },
    //item(index,pagePath,text)
    onTabItemTap: function(item) {

    }
});