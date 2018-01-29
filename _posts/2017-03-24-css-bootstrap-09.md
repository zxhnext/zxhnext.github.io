---
layout: post
title:  "响应式网站和bootstrpBootstrap"
date:   2017-03-24 15:50:21
categories: css
tags: css Bootstrap less 响应式
author: Zxhnext
---

* content
{:toc}

## 1. 体验响应式网站
```css
@media ( min-width : 768px) {
    .container {width: 750px}
}
@media ( min-width : 992px) {
    .container {width: 970px}
}
@media ( min-width : 1200px) {
    .container {width: 1170px}
}
@media ( min-width : 1300px) {
    .container {width: 1270px}
}
@media ( min-width : 1400px) {
    .container {width: 95%}
}
@media print{
    .container{width:auto}
}
```



响应式网站和自适应网站的区别.响应式网站会改变页面布局,自适应网站不会改变布局

## 2. 体验bootstrp

bootstrp 由全局样式和组件构成.组件是在全局样式的基础上制作而成的  
[相关链接](http://v3.bootcss.com/)
## 3. 学习less基础

less是一种动态样式语言.是css的一种补充.目的是为了提升css的编写效率和维护效率.可以在[http://koala-app.com/](http://koala-app.com/)下载koala进行编译.这是一个非常棒的编译工具  

less参考文档: [http://www.bootcss.com/p/lesscss/](http://www.bootcss.com/p/lesscss/)
### 3.1. 变量  

变量和程序代码中的变量概念是一样的.将最常用的值,如ui的颜色,div的宽高,都定义成变量.在日后维护中会更加方便.less定义变量的方法是:@+变量名;赋值用的是冒号 如@color:#08c 如果变量需要放在字符串中显示,就需要将变量改为@{变量名}
```css
//定义常用颜色,方便日后修改
@textcolor : #000;//文字的颜色
@hrefcolor : #08c;//链接的颜色
@href_hover_color :#fff;//链接被覆盖的颜色
.box
{
  color:@textcolor;
}
```
变量的定义规则和程序中变量的定义类似.也可以使用大写字母和下划线.  

### 3.2. 混合  

混合类似于程序代码中的函数.有两种模式.带参数和不带参数的.带参数的还可以给参数直接复制.由于各家浏览器对css3的支持,都有自己的一套规则.使用起来特别麻烦.使用less中的混合写法,可以增加效率.  
```css
//定义一个分栏效果.目前谷歌和火狐浏览器虽支持,但要加前缀,IE10以上版本支持
.column-count(@value){
column-count: @value;
-moz-column-count:@value; 
-webkit-column-count:@value;
 }
.box2{
width: 200px;height: 200px;
.column-count(3);        //不用再为多个浏览器写样式
}
```
### 3.3. 嵌套  

应用嵌套规则可以更快速的使用继承规则.但有的时候我们不需要用这个写法实现继承.在需要为当前元素添加伪元素样式的时候,如:hover 那就要使用&
```css
.box{
  width:500px;
  height:200px;
  ul{
    background:#0fc;
    li{
      float:left;
      list-style:none;
      a{
         color:#000;
         &:hover{   
           color:#fff;
         }
      }
    }
  }
}
```
在实际写代码的时候,尽量不要用这么多继承,否则影响网站的相应速度.

### 3.4. 注释 保留变量 避免编译  

  less中有两种注释方法.一种是//,另一种是/* */.他们的区别是:第一种写法的注释只会在less文件中被看到.而第二种注释方法会同时被编译到css文件中.  

  less中有两个关键字.@import和arguments  
  less文件可以实现类似于php中的include功能.将其他的less文件或css文件加载进来.如果加载的是less文件.扩展名可加,可不加.如:@import "main";如要用到加载文件的代码,就必须要在写代码前,加载进来.  
  当混合的参数太多的时候,可以用arguments代替所有参数进行赋值.  

  有的时候我们不希望一些语句被编译.可以在语句前加一个~符号;  
```css
.border(@width:1px ,@color:#08c,@type:solid)
{
  border:arguments;
}
```
### 3.5. 命名空间  

  每个变量都有自己的作用域.当需要使用某个不在自己作用域下的混合的时候,可以考虑用命名空间.  
```css
.box1
{
  .margin(@value:5px)
  {
    margin:@value;
  }
  .margin(20px);
}
.box2{
   .box1>.margin(10px);
}
```