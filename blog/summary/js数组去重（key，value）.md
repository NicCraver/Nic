---
title: js数组去重（key，value）
display: home
image: https://picsum.photos/1920/1080/?random&date=2019-08-07-12
date: 2019-08-07
tags:
  - js
categories:
  - 笔记
--- 

## 代码

``` js
var ary = [1, 2, 3, 4];

var obj = [
    {
        id: 1,
        name: 'luo1'
    },
    {
        id: 2,
        name: 'luo2'
    },
    {
        id: 5,
        name: 'luo5'
    }
]
const newArr = obj.filter(item => !ary.includes(item.id))
console.log(newArr)
```

方法一：

采用对象访问属性的方法，判断属性值是否存在，如果不存在就添加。

方法二：

采用数组中的reduce方法，遍历数组，也是通过对象访问属性的方法


``` js
var arr = 
  [
    {
      key: "01",
      value: "乐乐"
    },
    {
      key: "02",
      value: "博博"
    },
    {
      key: "03",
      value: "淘淘"
    },
    {
      key: "04",
      value: "哈哈"
    },
    {
      key: "01",
      value: "乐乐"
    }
  ];

  //  方法1：利用对象访问属性的方法，判断对象中是否存在key
  var result = [];
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i].key]) {
      result.push(arr[i]);
      obj[arr[i].key] = true;
    }
  }
  console.log(result);
  // [{key: "01", value: "乐乐"},{key: "02", value: "博博"},{key: "03", value: "淘淘"},{key: "04", value: "哈哈"}]

  //  方法2：利用reduce方法遍历数组,reduce第一个参数是遍历需要执行的函数，第二个参数是item的初始值
  var obj = {};
  arr = arr.reduce(function(item, next) {
    obj[next.key] ? "" : (obj[next.key] = true && item.push(next));
    return item;
  }, []);
  console.log(arr);
  // [{key: "01", value: "乐乐"},{key: "02", value: "博博"},{key: "03", value: "淘淘"},{key: "04", value: "哈哈"}]
```