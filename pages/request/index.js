import api from '../../services/index'
var app = getApp();
//Page Object
Page({
    /**
     * 页面的初始数据
     */
    data: {
        navTitle: "wx请求",
        requestInfo: "",
        constant: JSON.stringify(app.globalData)
    },
    // 函数
    wxRequestTest() {
        let params = {
            tokenkey: "get"
        }
        api.getTokenKey(params).then(res => {
            console.log(res);
            this.setData({
                requestInfo: JSON.stringify(res)
            })
        }).catch(err => {
            console.log(err)
        })
    },


    //options(Object)
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {},
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},

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