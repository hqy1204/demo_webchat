var app = getApp();
//Page Object
Page({
    /**
     * 页面的初始数据
     */
    data: {
        navTitle: "折线图与表格",
        // 折线图
        dateList: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        seriesList: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }],
        // 表格图
        tableHeader: [{
                prop: 'datetime',
                width: 200,
                label: '日期',
            },
            {
                prop: 'sign_in',
                width: 152,
                label: '上班时间'
            },
            {
                prop: 'sign_out',
                width: 152,
                label: '下班时间'
            },
            {
                prop: 'work_hour',
                width: 110,
                label: '工时'
            },
            {
                prop: 'statusText',
                width: 110,
                label: '状态'
            }
        ],
        row: [{
                datetime: "2020-10-01",
                sign_in: "8:00",
                sign_out: "5:30",
                work_hour: "8",
                statusText: "启用"
            },
            {
                datetime: "2020-10-01",
                sign_in: "8:00",
                sign_out: "5:30",
                work_hour: "8",
                statusText: "启用"
            },
            {
                datetime: "2020-10-01",
                sign_in: "8:00",
                sign_out: "5:30",
                work_hour: "8",
                statusText: "启用"
            },
            {
                datetime: "2020-10-01",
                sign_in: "8:00",
                sign_out: "5:30",
                work_hour: "8",
                statusText: "启用"
            }
        ],
    },
    // 函数
    methodsTest() {
        console.log(1)
    },
    // 表格点击事件
    onRowClick(e) {
        console.log("行:", e.detail.target.dataset.column)
        console.log("列:", e.detail.target.dataset.row + 1)
        console.log("data:", e.detail.target.dataset.it)
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