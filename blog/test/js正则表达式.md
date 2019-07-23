---
title: test

display: home
image: https://picsum.photos/1920/1080/?random&date=2019-07-22-19
date: 2019-07-22
tags:

  - js
  - element-ui
categories:
  - 测试
---

``` js
//不能输入中文
if (/[\u4E00-\u9FA5]/g.test(value)) {
  callback(new Error("不能输入中文"));
}
//不能输入空格
if (/^ +| +$/g.test(value)) {
  callback(new Error("不能输入空格"));
}
//密码必须包含数字和字母
var str = /(?=.*[\d])?(?=.*[a-zA-Z])(?=.*[\d])/;
if (!str.test(value)) {
  callback(new Error("密码必须包含数字和字母"));
}
```