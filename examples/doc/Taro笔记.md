---
title: Taro笔记
display: home
image: https://picsum.photos/1920/1080/?random&date=2019-11-6-9
date: 2019-11-6
tags: 
  - Taro
categories:
  - 笔记
--- 

> Taro 是一套遵循 React 语法规范的 多端开发 解决方案。

#### CLI 工具安装
``` js
yarn global add @tarojs/cli
```
#### 注意事项
值得一提的是，如果安装过程出现sass相关的安装错误，请在安装mirror-config-china后重试。
``` js
npm install -g mirror-config-china
```
##### node-sass网络太慢解决办法
``` js
npm config set registry http://registry.npm.taobao.org

yarn config set registry http://registry.npm.taobao.org
```
##### 只指定node-sass的下载源：
``` js
npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass

yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
```

#### 目初始化
``` js
taro init myApp
```

![安装流程](http://ww1.sinaimg.cn/large/49320207gy1g0u2e0uf8gj20vg0uw10f.jpg)

##### Taro Doctor
Taro Doctor 就像一个医生一样，可以诊断项目的依赖、设置、结构，以及代码的规范是否存在问题，并尝试给出解决方案。

但和真正的医生不一样，Taro Doctor 不需要排队挂号，也不用花钱。你只需要在终端运行命令：taro doctor，就像图里一样：
![诊断项目](https://img10.360buyimg.com/ling/jfs/t1/46613/36/5573/202581/5d357d14E6f0df7e1/fc026be7dc69dcf2.png)


### 快速创建新页面
``` js
Taro create --name [页面名称] 

Taro create --name test
```
Taro create --name [页面名称] 能够在当前项目的pages目录下快速生成新的页面文件，并填充基础代码，是一个提高开发效率的利器。

#### 路由功能

``` js
// 跳转到目的页面，打开新页面
Taro.navigateTo({
  url: '/pages/page/path/name'
})

// 跳转到目的页面，在当前页面打开
Taro.redirectTo({
  url: '/pages/page/path/name'
})
```

#### 路由传参
``` js
// 传入参数 id=2&type=test
Taro.navigateTo({
  url: '/pages/page/path/name?id=2&type=test'
})
```

这样的话，在跳转成功的目标页的生命周期方法里就能通过 this.$router.params 获取到传入的参数，例如上述跳转，在目标页的 componentWillMount 生命周期里获取入参

``` js
class C extends Taro.Component {
  componentWillMount () {
    console.log(this.$router.params) // 输出 { id: 2, type: 'test' }
  }
}
```

### 绑定事件方法
``` jsx
<Button onClick={this.click}>Change</Button>
```

### state 用法
更新肯定为异步
``` jsx
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    name: "nic"
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  click(){
    this.setState({name:'nicccc'})
  }
  render() {
    return (
      <View className='index'>
        <Button onClick={this.click}>Change</Button>
        <Text>{this.state.name}</Text>
      </View>
    )
  }
}

```

### Taro 缓存
``` js 
// 取值
let store = Taro.getStorageSync(foodKey);
// 存值
Taro.setStorageSync(foodKey,store);
```





