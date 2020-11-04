var Obj = {


  toThousands(num) {
    var result = '',
      tempArr = num.toString().split('.'),
      counter = 0,
      int = tempArr[0],
      deci = tempArr[1] ? tempArr[1] : '';
    int = (int || 0).toString();
    for (var i = int.length - 1; i >= 0; i--) {
      counter++;
      result = int.charAt(i) + result;
      if (!(counter % 3) && i != 0) {
        result = ',' + result;
      }
    }
    return deci ? result + '.' + deci : result;
  },




  showTotas(title, type) {
    wx.showToast({
      title,
      icon: type,
      duration: 2000
    })
    setTimeout(function () {
      wx.hideToast()
    }, 4000);
  },

  setTitle(title, color) {
    if (color) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: color,
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
        }
      })
    }
    wx.setNavigationBarTitle({
      title
    })
  },





  debounce: (function () {
    var timer = null;
    return function (fn, wait) {
      if (timer != null) {
        clearTimeout(timer)
      }
      timer = setTimeout(fn, wait)
    }
  })(),
  resetProperties(obj, i) {
    Object.defineProperty(obj, i, {
      configurable: true,
      enumerable: true,
      set: undefined,
      get: undefined,
    });
  },
  // 处理日期
  handleYear(year, num) {
    let DateArr = []
    if (num == 1) {
      DateArr.push(year)
    } else {
      DateArr = this.handleYear(year, 1).concat(this.handleYear(year - 1, num - 1))
    }
    return DateArr

  },
  // 格式化数字
formatNum(amount) {
  if(amount){
    var tempArr = amount.toString().split('.');
    var int = tempArr[0];
    var dec = tempArr[1];
    return int==0?0:dec?int+'.'+dec:int
  }else{
    return amount
  }
},
// 格式化万元单位
formatToWan(amount) {
  if(amount){
    var tempArr = amount.toString().split('.');
    var int = tempArr[0];
    var dec = tempArr[1];
    return int/10000
  }else{
    return amount
  }

},
  isToLogin() {
    let loginInfo = wx.getStorageSync('loginInfo') || {};
    if (!loginInfo.openid) {
      wx.redirectTo({
        url: '/pages/login/login'
      })
    }
  },
  getResData(Api, method, params,that) {
   return new Promise((resolve, reject) => {
      Api[method](params)
        .then((res) => {
          if (res.data.code == 200) {
            resolve(res.data)
          } else {
            that.setData({
              hasNextPage: false,
              isNull:true
            })
            wx.showToast({
              title: res.data.info,
              icon: 'none',
              duration: 2000
            })
          }

        })
        .catch(err => {

          wx.showToast({
            title: '请求失败',
            icon: 'none',
            duration: 2000
          })
          that.setData({
            hasNextPage: false,
            isNull:true
          })
        })
    })
  },
  setCompanyOptions(app,that){
    let userCompany=that.data.userCompany;
    let loginInfo = wx.getStorageSync('loginInfo') || {};
    let omWeChatItemVoList=loginInfo.omWeChatItemVoList||[];
    let clienInfo=app.globalData.clienInfo;
    console.log(userCompany,'setCompanyOptions')
    let options=[];
    options= omWeChatItemVoList.map((item,idx)=>{
      let obj={};
      obj.value=idx;
      obj.text=item.clientName;
      return obj
    })
   let clientIdx=options.findIndex((item)=>{
      return item.text==clienInfo.clientName
    })

    that.setData({
      options,
      userCompany:clientIdx,
      'params.clientNum':clientIdx!=-1?options[clientIdx].sapClientNum:''
    })
  }
}
module.exports = Obj