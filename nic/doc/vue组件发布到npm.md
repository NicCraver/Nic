---
title: vue组件发布到npm
display: home
image: https://picsum.photos/1920/1080/?random&date=2019-08-1-16
date: 2019-08-1
tags:
  - vue
  - npm
categories:
  - 笔记
--- 

# vue组件

``` js
{
  "name": "niclib",
  "version": "0.1.2",
  "private": false,
  "main": "./dist/my-banner.common.js",
  "files": [
    "dist/*",
    "src/*",
    "public/*",
    "*.json",
    "*.js"
  ],
  "scripts": {
    "dev": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "package": "vue-cli-service build --target lib --name my-banner ./src/components/index.js"
  },
  "dependencies": {
    "core-js": "^2.6.5",
    "niclib": "^0.1.2",
    "vue": "^2.6.10",
    "vue-router": "^3.0.3",
    "vuex": "^3.0.1"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.9.0",
    "@vue/cli-service": "^3.9.0",
    "node-sass": "^4.9.0",
    "sass-loader": "^7.1.0",
    "vue-template-compiler": "^2.6.10"
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {}
    }
  },
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ]
}
```

``` sh
//登录
npm login
nic_
li960421
951477037@qq.com

//验证是否登录，登录的话会返回你的名字
npm whoami

//上传到npm  注意版本号
npm publish --access public
```


