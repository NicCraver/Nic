---
title: vuecli3-vue.config.js配置方法
display: home
image: https://picsum.photos/1920/1080/?random&date=2019-07-22
date: 2019-07-22
tags:
  - vue
  - vuecli3
categories:
  - 笔记
--- 

**`For vuecli3.7`**

 
### 使用移动端调试工具vconsole要用vue add

``` sh
vue add vconsole -s
```

## vue.config.js

``` js
const vConsolePlugin = require('vconsole-webpack-plugin')
module.exports = {
    //基本路径
    //baseUrl: './',//vue-cli3.3以下版本使用
    publicPath: './',//vue-cli3.3+新版本使用
    //输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',
    //生产环境是否生成 sourceMap 文件，一般情况不建议打开
    productionSourceMap: false,
    //调整 webpack 配置
    configureWebpack: config => {
        //生产环境去掉vconsole调试器
        let envFlag = process.env.NODE_ENV != 'production'
        let pluginsDev = [
            new vConsolePlugin({
                filter: [],
                enable: envFlag
            })
        ]
        if (process.env.NODE_ENV === 'production') { // 为生产环境修改配置...process.env.NODE_ENV !== 'development'
            //去掉console
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        } else {
            // 为开发环境修改配置...
            config.plugins = [...config.plugins, ...pluginsDev];
        }
    },
    // webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
    devServer: {
        open: true,//配置自动启动浏览器
        hotOnly: true, // 热更新
        // host: "localhost",
        host: "0.0.0.0",
        port: 8080, // 端口号
        https: false
    }
}
```