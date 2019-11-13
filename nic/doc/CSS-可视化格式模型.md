---
title: CSS-可视化格式模型
display: home
image: https://picsum.photos/1920/1080/?random&date=2019-08-28-16
date: 2019-08-28
tags:
  - css
categories:
  - 笔记
--- 
> CSS-可视化格式模型

## 基本盒模型
每个人在学习CSS时一定会接触到盒模型，比如最基本的IE盒模型和W3C标准盒模型。文档进行布局（lay out）的时候，浏览器的渲染引擎会根据标准之一的 CSS 基础框盒模型（CSS basic box model），将所有元素表示为一个个矩形的盒子（box）。CSS 决定这些盒子的大小、位置以及属性（例如颜色、背景、边框尺寸…）。每个盒子由四个部分（或称区域）组成，其效用由它们各自的边界（Edge）所定义。每个盒子有四个边界：内容边界 Content edge、内边距边界 Padding Edge、边框边界 Border Edge、外边框边界 Margin Edge。
*其中，两种盒模型都由内容、内边距、边框和外边距组成，可以用box-sizing属性进行切换；
*区别点是W3C标准盒模型的width和height只包含内容区Content，IE盒模型的width和height包含内容区、内边距Padding和边框Border。
*注意：background同时作用于内容区、内边距和边框！
如图给一个div设置宽高都是100px，W3C标准盒模型跟IE盒模型表现出的实际的盒子内容区大小是不一样的

![](https://raw.githubusercontent.com/wz71014q/img/master/cssbox/W3CBox.png) 
![](https://raw.githubusercontent.com/wz71014q/img/master/cssbox/IEBox.png) 
基本的盒模型可以帮助我们进行更准确的布局，但是页面渲染用到的盒模型可不止这些。最近看到一种以前不知道的垂直居中布局的代码：
``` html
<div class="main">我是居中的元素</div>
```
``` css
css:
.main{
   width: 100px;
   height: 100px;
}
.main::after{
  content: '';
  width: 0;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
```
本来伪元素和伪类用的就不怎么样，看到这个就很不理解了。向大佬们请教，进而得知“可视化格式模型”这种东西。想起之前看到浏览器渲染页面的视频，确实是一个一个的框框堆积起来:
![](https://raw.githubusercontent.com/wz71014q/img/master/render.gif) 
## 什么是可视化格式模型？
官方解释是：它规定了客户端（浏览器）如何在媒介（显示器）中渲染文档树(document tree)。如上图，每个节点、元素都有属于自己的可见或不可见、有名或匿名的盒模型，可视化格式模型即规定了这些盒、框框如何整齐地排列在页面中，还有盒子之间的相互作用。
## 可视化格式模型
1.包含块CB(Containing block)
2.控制框：块框、行框
3.FC(Formatting Context, 格式化上下文)
*1.BFC(Block Formatting Context, 块级格式化上下文)
*2.IFC(Inline Formatting Context, 行内格式上下文)
*3.GFC(Grid Formatting Context, 网格布局格式化上下文)
*4.FFC(Flex formatting contexts, 自适应格式上下文)
4.定位体系(普通流、定位流、浮动流)
5.浮动体系
## 包含块
1.根元素的包含块是一个被称为初始包含块的矩形
2.如果 position 属性为 static 或 relative ，包含块就是由它的最近的祖先块元素（比如说inline-block, block 或 list-item元素）或格式化上下文的内容区(只有content)的边缘组成的。
3.如果position属性为 absolute，包含块就是最近的position属性不为static值的祖先块元素的内边距区的边缘(content + padding)组成(padding框)。
4.如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的最近父级元素的内边距区的边缘组成的：
>transform 或 perspective 值不为 none；
>will-change 值是 transform 或 perspective
>filter 值不为 none 或 will-change 值是 filter (Firefox下).
5.如果 position 属性是 fixed，包含块就是由 viewport (in the case of continuous media) 或是组成的。
6.CSS中的百分比是根据生成的框的包含块的高度计算的。如果未明确指定包含块的高度（即要使用百分比，包含块必须有宽度和高度），并且此元素未绝对定位，则百分比值将被视为“0”（对于“min-height”）或“none” （’max-height’）。
7.如果要计算 height top 及 bottom 中的百分值，是通过包含块的 height 的值。如果包含块的 height 值会根据它的内容变化，而且包含块的 position 属性的值被赋予 relative 或 static ，那么，这些值的计算值为 0。要计算 width, left, right, padding, margin 这些属性由包含块的 width 属性的值来计算它的百分值。
8.以百分比为单位时，包含块大小跟盒模型有关，主要受其padding属性影响。给两种盒模型的子元素设置width=50%，不同的盒模型，子元素的width是不同的。
## 控制框
### 块框
1.块级元素会生成一个块框（Block Box），块框会占据一整行，用来包含子box和生成的内容；
2.块框同时也是一个块包含框（Containing Box），里面要么只包含块框，要么只包含行内框（不能混杂）；
3.如果块框内部有块级元素也有行内元素，那么行内元素会被匿名块框包围。也就是说如果一个块框在其中包含另一个块框，那么我们强迫它只能包含块框，因此其他文本内容生成出来的都是匿名块框（而不是匿名行内框）
如下，div为一个块框、p是另一个块框。上一行文本被包含在一个匿名块框内
``` html
<div>
   I'm some text!
   <p>I'm included by p!</p>
</div>
```
### 行内框
*一个行内元素生成一个行内框；行内元素能排在一行，允许左右有其他元素。
### FC
*格式化上下文定义框内部的元素渲染规则，它可以将框内部与外部隔开，外部样式不会影响内部
*包含块级格式化上下文BFC、行内格式化上下文IFC、网格布局格式化上下文GFC、自适应格式上下文FFC(Flex formatting contexts)
### BFC
常用的创建块级格式化上下文的方式有：
*根元素或包含根元素的元素
*overflow不为visible的块元素。
*行内块元素(display = inline-bloc 会在元素外层产生IFC（所以这个元素可以通过text-align水平居中），当然，它的内部则按照BFC规则渲染)
*浮动元素
*绝对定位元素
*弹性元素(flex)
完整内容见[MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

### BFC特点：

*清除浮动。内部box在垂直方向，一个接一个的放置，BFC区域不会与float box重叠
*外边距塌陷。box的垂直方向由margin决定，属于同一个BFC的两个box间的margin会重叠
*BFC就是页面上的一个隔离的独立容器，容器里的子元素不会影响到外面的元素，反之也是如此；
*计算BFC的高度时，浮动元素也参与计算（不会浮动塌陷如overflow：hidden清除浮动就是这个原理）；
### IFC
*行内元素可以产生行内格式化上下文
*行内框是水平方向一个接一个排列，起点是包含块的顶部。
*行内格式化上下文高度由其包含行内元素中最高的实际高度计算而来(不受到竖直方向的padding/margin影响）。水平方向上的margin，border和padding在框之间会保留。框在垂直方向上可以以不同的方式对齐：顶部、底部对齐或根据其中文字的基线对齐)
*最高的元素高度未设置时，行内框的高度由line-height决定，而其内部的包含块之间的可以高度各不相同(比如只含文本的行框高度与包含图片的行框高度之间)。line-height是上下两行文本的基线之间的距离
### FFC
自适应格式化上下文，当设置display为flex时，内部生成一个BFC。设置display为inline-flex时，内部生成一个IFC

### GFC
网格布局格式化上下文，当为一个元素设置display值为grid的时候，此元素将会获得一个独立的渲染区域

最后，解释一下为什么上面的元素可以居中。行内框的高度能够容纳它包含的所有框,当框的高度小于行内框的高度(例如,如果框是baseline对齐)时,框的竖直对齐方式由vertical-align属性决定。所以class = main的div的伪元素跟“我是居中的元素”形成了一个行内框，而设置行内框的对齐方式为middle，就居中了。

