# demo-WeChat

> 微信小程序demo

## 目录结构

``` bash
│  app.js   # 小程序入口及其全局变量
│  app.json # 视图路由及其tabBar的设置和公共组件引入
|  app.wxss # 小程序的公共样式
│  
├─api
│      request.js   # 对wx.request的Promise链封装
│      
├─components # 公共组件
│   ├─category # 基于echarts封装的组件 
│   │ ....
│
├─config # 配置文件
│    httpConfig.js # httpConfig请求的基本参数
│
├─ec-canvas # echarts的小程序源文件封装
|
├─images # 图片
|
├─miniprogram_npm # npm模块放置处(用于打包发布)
|
├─node_moudules # 依赖包(将依赖包移入miniprogram_npm)
|
├─pages # 视图
|
├─services # 服务入口
|
└─utils #视图
```


