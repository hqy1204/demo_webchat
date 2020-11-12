# demo_WeChat

## 快速开始
```bash
npm install 
```

在微信开发编辑器上面的工具栏找到   工具->构建npm  生成miniprogram_npm文件

## 文件目录

```bash
src                                 # API配置
|-- config.js					    # http请求配置
|-- env.js						    # 环境接口配置 
|-- index.js						# API管理入口
|-- request.js						# wx.request的Prmoise封装
components
|-- category						# echarts的组件封装
ec-canvas							# echarts的canvas封装
images								# 图片
miniprogram_npm						# 依赖构建文件
node_modules						# npm依赖
pages								# 视图
|-- echarts							# echarts视图和table视图
|-- progress						# 环形视图
|-- request							# 请求实例视图
utils								# 公共方法
.gitignore							# git上传文件忽略
.npmrc								# npm源设置
app.js								# 微信小程序主入口
app.json							# 微信小程序路由和tabbar设置
app.wxss							# 微信小程序公共样式
```

## 注意事项

- npm install 后进行npm构建生成miniprogram_npm
- npm 构建：在微信开发编辑器上面的工具栏找到   工具->构建npm 即可