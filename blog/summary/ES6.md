---
title: ES6
display: home
image: https://picsum.photos/1920/1080/?random&date=2019-10-11-12
date: 2019-10-11
tags: 
  - ES6
categories:
  - 笔记
--- 

> ES6相关笔记

Label `ES6相关笔记`

### 一、ES6 let、const
`let`
let是更完美的var
{}形成域，let只能在域中获取。
1. let声明的变量拥有块级作用域,let声明仍然保留了提升的特性，但不会盲目提升。
2. let声明的全局变量不是全局对象的属性。不可以通过 `window.变量名` 的方式访问
3. 形如 `for (let x…)` 的循环在每次迭代时都为 `x` 创建新的绑定
4. let声明的变量直到控制流到达该变量被定义的代码行时才会被装载，所以在到达之前使用该变量会触发错误。

`const`
定义常量值，不可以重新赋值，但是如果值是一个对象，可以改变对象里的属性值
``` js
const OBJ = {"a":1, "b":2};
OBJ.a = 3;
OBJ = {};// 重新赋值，报错！
console.log(OBJ.a); // 3
```

### 二、模板字符串

``` js
/**
 *  模板字符串
 */


let name = "Henry";

function makeUppercase(word){
  return word.toUpperCase();
}

let template = 
  `
  <h1>${makeUppercase('Hello')}, ${name}!</h1>
  <p>感谢大家收看我们的视频, ES6为我们提供了很多遍历好用的方法和语法!</p>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
  `;

document.getElementById('template').innerHTML = template;
```

### 三、箭头函数
> 解决的问题
>    1. 缩减代码
>    2. 改变this指向

1. 缩减代码
``` js  
 const double1 = function(number){
    return number * 2;
 }

 const double2 = (number) => {
  return number * 2;
 }

 const double3 = (number) => number * 2;
 
 const double4 = number => number * 2;

 const double5 = (number => number * 2);
 const double6 = (number,number2) => number + number2;

 const double = (number,number2) => {
   sum = number + number2 
   return sum;
 }
//  console.log(double(20,20));

// map一个数组,让数组中的值以double形式展现
const numbers = [1,2,3];
var newNumbers = numbers.map(function(number){
    return number * 2;
})
var newNumbers = numbers.map(number => number * 2);
//  console.log(newNumbers);
```

2. 改变this指向
``` js
const team1 = {
  members:["Henry","Elyse"],
  teamName:"es6",
  teamSummary:function(){
    let self = this;
    return this.members.map(function(member){
      // this不知道该指向谁了
      return `${member}隶属于${self.teamName}小组`;
    })
  }
}

const team2 = {
  members:["Henry","Elyse"],
  teamName:"es6",
  teamSummary:function(){
    return this.members.map(function(member){
      // this不知道该指向谁了
      return `${member}隶属于${this.teamName}小组`;
    }.bind(this))
  }
}

const team = {
  members:["Henry","Elyse"],
  teamName:"es6",
  teamSummary:function(){
    return this.members.map((member) => {
      // this指向的就是team对象
      return `${member}隶属于${this.teamName}小组`;
    })
  }
}

console.log(team.teamSummary());

```

### 四、增强对象字面量
> 解决的问题
>    1. 缩减代码

``` js

function saveFile(url,data){
  $.ajax({
    method:"POST",
    url,//==url:url,
    data,//==data:data
  });
}

const url = "http://fileupload.com";
const data = {color:"red"};

saveFile(url,data);
```

### 五、函数参数默认值
> 解决的问题
>    1. 优化代码

通过`method = "GET"`这种方式直接设置默认值
``` js
// function makeAjaxRequest(url,method){
//   if(!method){
//     method = "GET";
//   }
//   return method;
// }

// function makeAjaxRequest(url,method = "GET"){
  
//   return method;
// }

// console.log(makeAjaxRequest("google.com"));
// console.log(makeAjaxRequest("google.com","POST"));

function User(id){
  this.id = id;
}
// console.log(new User(1));

function randomId(){
  return Math.random() * 99999999;
}

// console.log(new User(randomId()));

function createAdminUser(user = new User(randomId())){
  user.admin = true;
  return user;
}

const user = new User(2);

console.log(createAdminUser());
```

### 六、spread operator 展开运算符
> 更快,更便捷的操作数组,将一个数组转为用逗号分隔的参数序列

#### 合并数组
``` js
let a = [1,2,3];
let b = [4,5,6];
let c = [...a,...b]; // [1,2,3,4,5,6]
```
#### 替代apply
``` js
function f(a,b,c){
  console.log(a,b,c)
}
let args = [1,2,3];
// 以下三种方法结果相同
f.apply(null,args)
f(...args)
f(1,2,3)

function f2(...args){
  console.log(args)
}
f2(1,2,3) // [1,2,3]

function f3(){
  console.log(Array.from(arguments))
}
f3(1,2,3) // [1,2,3]
```
#### 解构赋值
``` js
let a = [1,2,3,4,5,6]
let [c,...d] = a
console.log(c); // 1
console.log(d); // [2,3,4,5,6]
//展开运算符必须放在最后一位
```

#### 浅拷贝
``` js 
//数组
var a = [1,2,4]
var b = [...a]
a.push(6)
console.log(b) // [1,2,4]

//对象
var a = {a:1}
var b = {...a}
a.a = 5
console.log(b.a) // 1
```

### 七、Calss
> 万事皆对象


### 六、spread operator 展开运算符
> 更快,更便捷的操作数组