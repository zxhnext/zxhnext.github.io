---
layout: post
title:  "关于js中的回调函数callback"
date:   2017-11-20 22:14:54
categories: callback
tags: js callback
author: Zxhnext
---

* content
{:toc}

## 一 .搞清楚异步和同步
### 同步sync/异步async
举个小例子  
1.早上起来不论你是先刷牙还是先洗脸，都要等一个事情完毕后才能进行下一项，这就是一个同步的例子  
2.然后刷牙的时候你也可以烧水喝 （不用等你刷完牙）这就是一个异步的例子
来段异步代码示例  
```javascript
function a(){
    console.log('执行a函数');
    setTimeout(function(){
         console.log('执行a函数的延迟函数');
        },1000)
};
function b(){
    console.log('执行b函数');
};
a();
b();
```



js里面最基础的异步实现 
![执行结果](http://www.zxhnext.top/images/callback.png)
运行结果  
以上代码会先执行函数a,而且不会等到a中的延迟函数执行完才执行函数b, 在延迟函数被触发的过程中就执行了函数b,当js引擎的event 队列空闲时才会去执行队列里等待的setTimeout的回调函数，这就是一个异步的例子

题外话：  
调用 setTimeout 函数会在一个时间段过去后在队列中添加一个消息。这个时间段作为函数的第二个参数被传入。如果队列中没有其它消息，消息会被马上处理。但是，如果有其它消息，setTimeout 消息必须等待其它消息处理完。因此第二个参数仅仅表示最少的时间 而非确切的时间
所以即使，时间设置为0，也是会照样先执行函数b

来段同步代码示例
```javascript
var a = 0;
function change(){
    a = 1;
}
function print(){
    console.log(a);
}
change();
print();
```
结果输出1
print函数会等change函数完成之后去执行，所以结构输出为1，因为change函数修改了全局变量a的值，change执行之后才执行的print函数

## 二.回调函数到底是什么

列举几个经典的回调函数代码
```javascript
$.get('ajax/text.html',function(data){
    $('.result').html(data);
    alert('Load was performed');
    });
```
异步请求的回调函数
```javascript
$('#target').click(function(){
    alert('Handler for .click() called');
    })
```
点击事件的回调函数
```javascript
this.tabs.forEach(function(tab,index)){
    if(tabs.selected){
        this.focustab = this.tabs[index];
    }
}.bind(this)
```
数组中遍历每一项调用的回调函数
```javascript
function getNodes(parms,callback){
    var list = JSON.stringify(parms) //从一个对象中解析出字符串
    typeof(callback)==='function'&&callback(list);
}
getNodes('[1,2,3]',function(nodes){
    //拿到nodes做一些操作
    });
```
同步回调的例子  
所以回调与同步、异步并没有直接的联系，回调只是一种实现方式，既可以有同步回调，也可以有异步回调，还可以有事件处理回调和延迟函数回调，这些在我们工作中有很多的使用场景  
所以其实并不是我们不认识回调函数，而是我们都萦绕在了这个“callback“ 这个词上，当你在一个函数中看到它是就会困惑，其实它只是一个形参名字而已。

## 三.为什么写回调函数
看了以上的简单介绍之后，是不是对callback不再陌生和觉得神秘，所以尽情的去使用吧。

1.关于回调函数和js单线程以及js异步机制  
我们都知道js是单线程的，这种设计模式给我们带来了很多的方便之处，我们不需要考虑各个线程之间的通信，也不需要写很多烧脑的代码，也就是说js的引擎只能一件一件事的去完成和执行相关的操作，所以所有需要执行的事情都像排队一样，等待着被触发和执行。

可是如果这样的话，如果在队列中有一件事情需要花费很多的时间，那么后面的任务都将处于一种等待状态，有时甚至会出现浏览器假死现象，例如其中有一件正在执行的一个任务是一个死循环，那么会导致后续其他的任务无法正常执行，所以js在同步机制的缺陷下设计出了异步模式

在异步执行的模式下，每一个异步的任务都有其自己一个或着多个回调函数，这样当前在执行的异步任务执行完之后，不会马上执行事件队列中的下一项任务，而是执行它的回调函数，而下一项任务也不会等当前这个回调函数执行完，因为它也不能确定当前的回调合适执行完毕，只要引它被触发就会执行。

举个例子,我要购买一个东西，当我点进物品的详情页之后，图片资源还未请求完毕，而此时我就可以点击add to cart, 发起另一个请求，js任务列表中的添加购物车事件就会开始执行，它的执行也不会干扰到图片资源的请求任务，这也是异步执行机制的妙处。

2.js的单线程浏览器内核的多线程  
说到js的单线程，顺便再了解一下关于浏览器内核的多线程
![cayley的草图](http://www.zxhnext.top/images/callback2.png)
cayley的草图
浏览器常驻三大线程:  js引擎线程，GUI渲染线程，浏览器事件触发线程
看到此图你是不是会豁然开朗许多，因为浏览器是一个多线程的执行环境，在浏览器的内核中分配了多个线程，最主要的线程之一即是js引擎的线程，同时js事件队列中的异步请求，交互事件触发，定时器等事件都是由浏览器的事件触发线程进行监听的，浏览器的事件触发线程被触发后会把任务加入到js 引擎的任务队列中，当js 引擎空闲时候就会开始执行该任务
