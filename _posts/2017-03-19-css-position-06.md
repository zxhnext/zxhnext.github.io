---
layout: post
title:  "position布局"
date:   2017-03-19 15:50:21
categories: css
tags: css position
author: Zxhnext
---

* content
{:toc}
## 1. position的属性值:

static 静态  
relative 相对定位  
absolute 绝对定位  
fixed 固定定位  

1.1. position属性且值不为static的时候,可以使用偏移属性来达到定位效果.有四种属性:  
top 上偏移  
bottom 下偏移  
left 左偏移  
right 右偏移  



1.2. 不同定位的基本特性认识  

static 这个基本可以无视.  

relative 相对于元素原来的位置定位.定位后原来的元素位置将会保留.  

absolute相对于最近的已定位祖先元素，如果元素没有已定位的祖先元素，那么它的位置相对于最初的包含块。(白话解释:absolute定位时先找最近的父元素看有没有设置position且值不为static,如果有,相对于这个元素定位.如果没有发现已定位的父元素,就是相对浏览器定位.)  

最初包含块解释:"根元素"的包含块 也称初始包含块由用户代理建立.在HTML中,根元素就是html元素,不过有些浏览器会使用body作为根元素.在大多数浏览器中,初始包含块是一个视窗大小的矩形.------参考<< css权威指南 >>  

对于一个非根元素,如果其positon值是absolute,包含块设置为最近的position值不是static的祖先元素,如果没有祖先,元素的包含块定义为初始包含块.  

1.3 简单的postion定位应用案例:  

zara官网的定位案例  
```html
*{margin: 0; padding: 0}
    .large{width: 1000px; height: 800px; position: relative;}
    .text1{color: red; font-weight:bold;font-size: 50px; position: absolute; right: 30px; top: 30px;}
    .text2{color: red;position: absolute; right: 30px;}
   <div class="large">
       <p class="text1">ZARA WOMAN STUDIO</p>
        <p class="text2">CAPSULE <span style="font-weight:bold">COLLECTION /</span> 2016</p>
       <img src="zara.jpg" alt="" width="100%">
   </div>
```
# 2. 思考左侧边栏能否使用定位制作

2.1 三级导航的制作:  
```html
    *{margin: 0; padding: 0}
    .clearfix { *zoom: 1;} 
    .clearfix:before, .clearfix:after { display: table; line-height: 0; content: "";}
    .clearfix:after { clear: both;}
    a{color: #fff; text-decoration: none;}
    .nav{width: 600px; height: 25px; line-height: 25px;background-color: #08c;}
    .nav li{list-style: none;width: 100px; float: left;text-align: center;}
    .nav li>ul { background-color: green; display: none;}
    .nav li:hover>ul{display: block;}
    .nav ul li{width: 100px; position: relative;}
    .nav ul li>ul{position: absolute; width: 100px; right: -100px;top: 0; background-color: orange;visibility: hidden;}
    .nav li ul li:hover>ul{visibility: visible;}
   <ul class="nav">
       <li><a href="">首页</a></li>
       <li><a href="">关于我们</a>
           <ul class="clearfix">
              <li><a href="">公司简介</a></li> 
              <li><a href="">发展历程</a></li> 
           </ul>
       </li>
       <li><a href="">产品</a>
           <ul class="clearfix">
               <li><a href="">热销产品</a>
                   <ul class="clearfix">
                      <li><a href="">A款产品</a></li> 
                      <li><a href="">B款产品</a></li> 
                      <li><a href="">C款产品</a></li> 
                   </ul>
               </li>
               <li><a href="">最新产品</a></li> 
               <li><a href="">促销产品</a>
                   <ul class="clearfix">
                      <li><a href="">D款产品</a></li> 
                      <li><a href="">E款产品</a></li> 
                      <li><a href="">F款产品</a></li> 
                   </ul>
               </li>
           </ul>
       </li>
   </ul>
```
三级导航其实就是利用父元素为relative子元素为absolute实现精准定位.其中visibility属性表示元素是否可见.之所以不用display:none是因为子元素依托父元素定位,完全隐藏会出现问题.  

2.2 利用fixed固定定位制作广告效果  
```html
    *{margin: 0; padding: 0}
    .container{height: 2000px; background-color:aquamarine}
    .banner1{position: fixed; width: 800px;height: 300px; background-color: antiquewhite; margin: auto; left: 0px; right: 0px;top: 50px;}
    .banner2{position: fixed;width: 200px;height: 200px; background-color: yellow;bottom: 0;right: 0;}
 <div class="banner1">这里是一个大图广告.一般门户网站会显示不到10秒时间.双十一要到了.这种广告随时会出现</div>
 <div class="banner2">这里是右侧底角广告.尤其在电影网站出现的特别多.</div>
  <div class="container"></div>
```
fixed最常见的应用就是广告和固定导航.本身不复杂.不需要做很深的理解.会用就行.

## 3. 进阶内容

父元素设置position为relative,子元素设置position为absoult的使用方法非常简单,也很好理解.但是就像吃糖一样,吃多了会牙疼.这种布局方式在ie8以下浏览器会出现兼容问题.  
使用relative最小化原则将这种布局的副作用降到最小.
```html
    *{margin: 0; padding: 0}
    .large{width: 1000px; height: 800px;}
    .text1{color: red; font-weight:bold;font-size: 50px; position: absolute; right: 30px; top: 30px;}
    .text2{color: red;position: absolute; right: 30px;}
    <div class="large">
      <!-- 套一个裸div加position: relative -->
       <div style="position: relative">
           <p class="text1">ZARA WOMAN STUDIO</p>
        <p class="text2">CAPSULE <span style="font-weight:bold">COLLECTION /</span> 2016</p>
       <img src="zara.jpg" alt="" width="100%">
       </div>
   </div>
```
设置relative的元素再设置偏移有以下需要注意:  
1.top和bottom属性同时设置,bottom不起作用  
2.left和right属性同时设置,right不起作用  

absolute与float都有相同的特性表现  
1.包裹性  
2.破坏性  
3.使元素块状化  

absolute的行为表现  
1.脱离文档流  
2.去浮动  
3.位置跟随  

因为设置absolute后有以上特性表现,所以在不进行偏移设置的情况下利用价值更大.  
使用绝对定位配合margin做布局来替代父元素为相对定位且子元素为绝对定位的布局.无副作用.兼容性好.(使用前提是一定要想明白以上特性及行为表现.最起码要明白设置绝对定位后不使用偏移,虽然脱离了文档流,但是元素非常安全.不用担心它不受控制.)
```html
    .dingwei{ width: 60px; height: 30px; background-color:#fa46ae;line-height: 30px;color: #fff;text-align: center;position: absolute; margin-top: -20px;margin-left:160px;}
    .box{width: 240px; height: 240px; margin:0 30px; padding: 20px 0; border: 2px solid red;}
    <div class="box">
       <div class="dingwei">秒杀价</div>
        <img src="img.jpg" alt="">
    </div>
```
总结:并不是所有的position属性都要设置偏移.设置绝对定位后不设置偏移,用margin来布局反而效果特别的好.

设置absolute的元素再设置偏移有以下需要注意:  
1.top和bottom属性同时设置,元素有水平拉伸效果  
2.left和right属性同时设置,元素有垂直拉伸效果 
```html
    .father{width: 1000px;height: 500px;  background-color: green;margin: 0 auto;position: relative;}
    .box{height: 100px; background-color: red;position: absolute;left: -100px;right: -100px;}
    <div class="father">
        <div class="box"></div>
    </div>
```
因为拉伸特性.可以利用这个特效让元素垂直居中