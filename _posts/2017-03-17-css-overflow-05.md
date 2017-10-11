---
layout: post
title:  "overflow布局"
date:   2017-03-17 15:50:21
categories: css
tags: css overflow
author: Zxhnext
---

* content
{:toc}
## 1. overflow基本属性值
visible 默认  
hidden 隐藏  
scroll 滚动条  
auto 当尺寸溢出,出现滚动条  

overflow-x设置水平方向的overflow值  
overflow-y设置垂直方向的overflow值  

如果overflow-x和overflow-y值相同则等同于overflow.  
如果overflow-x和overflow-y值不同,且一个属性的值被设为visible,另一个赋予hidden,scroll或者auto,那么这个visible会重置为auto



## 2. overflow作用的前提 
2.1. 非display:inline水平  
2.2. 对于方位的尺寸限制.width/height/max-width/max-height/absolute拉伸  

使用绝对定位时的overflow失效  

绝对定位元素不总是被父级overflow属性裁剪,尤其当overflow在绝对定位元素及其包含块之间的时候.
```html
    .box{width: 100px; height: 100px; overflow: hidden;}
    img{position: absolute;}
  <div class="box">
      <img src="item.jpg" alt="">
  </div>
```
这里的包含块指的是"含`position:relative/absolute/fixed`声明的父级元素,没有则是body元素.

## 3. 如何避免失效? 
3.1. overflow元素自身设置为包含块.(也就是给设置overflow元素设置position)
```html
    .box{width: 100px; height: 100px; overflow: hidden;position: absolute}
    img{position: absolute;}
  <div class="box">
      <img src="item.jpg" alt="">
  </div>
```
3.2. overflow元素的子元素为包含块(给要裁剪的元素外面套一个裸div并设置position:relative)
```html
    .box{width: 100px; height: 100px; overflow: hidden;}
    img{position: absolute;}
  <div class="box">
      <div style="position:relative">
          <img src="item.jpg" alt="">
      </div>
  </div>
```

## 4. 依赖overflow属性才能起作用的一些属性介绍.

css属性 resize 可以拉伸元素尺寸:  
resize:both 水平垂直两边拉伸  
resize:horizontal 只有水平方向拉伸  
resize:vertiacl 只有垂直方向拉伸  
起作用的前提是必须设置overflow,且值不能为visible
```html
.box{width: 300px; height: 300px; background-color:#999;overflow: auto;resize: both;
<div class="box"></div>
```
css属性 text-overflow 文字溢出时元素如何显示  
text-overflow:ellipsis 文字溢出后显示省略号  
text-overflow:clip 文字溢出后直接裁掉.  
起作用的前提是容器必须设置`overflow:hidden`,同时文本要一行显示.设置`white-space: nowrap`;
```html
.box{width: 300px; height: 50px; background-color:#eee;overflow: hidden;text-overflow:ellipsis; white-space: nowrap;}
<div class="box">
      今天好累今天好累今天好累今天好累今天好累今天好累今天好累
</div>
```

## 5. BFC详解

5.1 不同盒子的渲染方式介绍:  
```
block-level box: display 属性为 block, list-item, table 的元素，会生成 block-level box。并且参与 block fomatting context；
```
```
inline-level box: display 属性为 inline, inline-block, inline-table 的元素，会生成 inline-level box。并且参与 inline formatting context；
```

5.2 BFC定义  

BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。(说句白话就是当一个元素生成BFC后里面的不管发生什么和外面一点关系都没有.)

5.3 怎样才能发生BFC  

根元素  
float属性不为none  
position为absolute或fixed  
display为inline-block, table-cell, table-caption, flex, inline-flex 
overflow不为visible(这点就解释了为什么父元素加overflow:hidden,不会发生margin重叠)

5.5 BFC布局规则  

BFC布局规则：  
5.5.1.内部的Box会在垂直方向，一个接一个地放置。(就和普通的div会换行一样)

5.5.2 Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠(BFC里面的元素一样会发生margin重叠,切记里面的元素不会和外面的元素发生发生margin重叠)  

5.5.3. 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此.  

5.5.4. BFC的区域不会与float box重叠。(白话解释加了float的元素不会飘到BFC区域的上面)  

5.5.5.BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。(BFC区域就是个隔离区.里面和外面不会发生任何关系.)  

5.5.6. 计算BFC的高度时，浮动子元素也参与计算(内部浮动不会导致父元素高度塌陷)  

总结:当父元素生成BFC的时候,里面的元素再怎么折腾都不影响父元素及其他元素.哪些元素会生成BFC.