---
title: 监听页面时刷新还是离开
display: none
image: https://picsum.photos/1920/1080/?random&date=2019-02-20-42
date: 2019-02-20
tags: 
  - js
categories:
  - 文章
--- 

```js
window.onload = function() {
  if (!window.sessionStorage["tempFlag"]) {
    // 关闭页面
    resetRouter(); //清除路由
    Cookies.remove("token"); //清除Cookies
    console.log("14451251251", 14451251251);
    location.reload(); //不能省，强制跳到登陆页
  } else {
    // 刷新页面
    window.sessionStorage.removeItem("tempFlag");
  }
};
window.onunload = function() {
  window.sessionStorage["tempFlag"] = true;
};
window.onbeforeunload = function() {
  window.sessionStorage["tempFlag"] = true;
};
```
