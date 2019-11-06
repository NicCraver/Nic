---
title: Taro组件传值
display: home
image: https://picsum.photos/1920/1080/?random&date=2019-11-6-14
date: 2019-11-6
tags: 
  - Taro
categories:
  - 笔记
--- 

> Taro组件调用及传值的实现方法

### 1.调用组件

组件文件

``` jsx
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class Dialog extends Component {
  render () {          
    return (
      <View className='index'>
          我是弹窗组件
      </View>
    )
  }
}
```

调用
``` jsx
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Dialog from './dialog'
export default class TestDialog extends Component {
  render () {          
    return (
      <View className='index'>
            <View>TestDialog</View>
            <Dialog></Dialog>
      </View>
    )
  }
}
```

### 2向组件传值
组件
``` jsx
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class Dialog extends Component {
  render () {          
    return (
      <View className='index'>
          我是弹窗组件
          {
              this.props.children
          }
      </View>
    )
  }
}
```

调用
``` jsx
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import Dialog from './dialog'
export default class TestDialog extends Component {
  render () {          
    return (
      <View className='index'>
            {/* TestDialog */}
            <Dialog>
                <Text>我是test传入的</Text>
            </Dialog>
            <Dialog>
                <Image src={require('../../lib/img/二哈.jpg')}/>
            </Dialog> 
            <Dialog>
                <Button>按钮</Button>
            </Dialog>
      </View>
    )
  }
}
> 注意：在组件中的 `this.props.children` 是只读的，不能进行更改
```

### 3.向组件传递多个值
> 由于组件接收的值不能更改，那么如果想要在组件接收多个值，就会出现问题，针对这种情况方案如下：
> 在调用页面给组件名定义属性，在组件通过  this.props.myText 来接收值，代码如下：

组件
``` jsx
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class Dialog extends Component {
  render () {          
    return (
      <View className='index'>
          我是弹窗组件
          { this.props.myText }
          {
              this.props.children
          }
      </View>
    )
  }
}
```
调用
``` jsx
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import Dialog from './dialog'
export default class TestDialog extends Component {
  render () {          
    return (
      <View className='index'>
            {/* TestDialog */}
            <Dialog myText={<Text>我是myText传入的</Text>}>
                <Text>我是test传入的</Text>
            </Dialog>
            <Dialog>
                <Image src={require('../../lib/img/二哈.jpg')}/>
            </Dialog> 
            <Dialog>
                <Button>按钮</Button>
            </Dialog>
      </View>
    )
  }
}
```