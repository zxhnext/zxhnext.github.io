---
layout: post
title:  "Ajax与Json数据"
date:   2017-09-16 22:14:54
categories: Ajax
tags: jquery Ajax jsonp json
author: Zxhnext
---

* content
{:toc}

## 概念：一种请求数据的方式，不需要刷新整个页面
ajax的技术核心是 XMLHttpRequest 对象；
ajax 请求过程：创建 XMLHttpRequest 对象、连接服务器、发送请求、接收响应数据；





## 第一节：XMLHttpRequest 对象创建

所有现代浏览器均支持XMLHttpRequest 对象（IE5 和IE6 使用ActiveXObject）。
XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某
部分进行更新。
## 第二节：XMLHttpRequest 对象请求后台
open(method,url,async)  规定请求的类型、URL 以及是否异步处理请求。  
method：请求的类型；GET 或POST  
url：文件在服务器上的位置  
async：true（异步）或false（同步）  
send(string)  将请求发送到服务器。  
string：仅用于POST 请求  
GET 还是POST？  
与POST 相比，GET 更简单也更快，并且在大部分情况下都能用。然而，在以下情况中，请使用POST 请求：  
无法使用缓存文件（更新服务器上的文件或数据库）  
向服务器发送大量数据（POST 没有数据量限制）  
发送包含未知字符的用户输入时，POST 比GET 更稳定也更可靠  
setRequestHeader(header,value)  
向请求添加HTTP 头。  
header: 规定头的名称  
value: 规定头的值  
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
异步- True 或False？  
AJAX 指的是异步JavaScript 和XML（Asynchronous JavaScript and XML）。为True 的话，表示的是异步，异步表示程序请求服务器的同时，程序可以继续执行；能提高系统的运行效率；  
为False 的话，表示同步，JavaScript 会等到服务器响应就绪才继续执行。如果服务器繁忙或缓慢，应用程序会
挂起或停止。
我们一般都是用True；
## 第三节：XMLHttpRequest 对象响应服务器
onreadystatechange 事件  
当请求被发送到服务器时，我们需要执行一些基于响应的任务。每当readyState 改变时，就会触发onreadystatechange 事件。readyState 属性存有XMLHttpRequest 的状态信息。下面是XMLHttpRequest 对象的三个重要的属性：  
onreadystatechange存储函数（或函数名），每当readyState 属性改变时，就会调用该函数。
readyState  
存有XMLHttpRequest 的状态。从0 到4 发生变化。  
0: 请求未初始化  
1: 服务器连接已建立  
2: 请求已接收  
3: 请求处理中  
4: 请求已完成，且响应已就绪  
status  
200: "OK"  
404: 未找到页面  
在onreadystatechange事件中，我们规定当服务器响应已做好被处理的准备时所执行的任务。如需获得来自服务器的响应，请使用XMLHttpRequest 对象的responseText 或responseXML 属性。  
属性描述  
responseText 获得字符串形式的响应数据。  
responseXML 获得XML 形式的响应数据。（了解即可）  

JSON：JavaScript 对象表示法（JavaScript Object Notation）。  
JSON 是存储和交换文本信息的语法。类似XML。  
JSON 比XML 更小、更快，更易解析。  
JSON 对象  
```
{ "name":"张三" , "age":22}
```
JSON 数组
```
{
"student": [
{ "name":"张三" , "age":22 },
{ "name":"李四" , "age":23 },
{ "name":"王五" , "age":24 }
]
}
```
JSON 嵌套
```
{
"student": [
{ "name":"张三" , "age":22 ,"score":{"chinese":90,"math":100,"english":80} },
{ "name":"李四" , "age":23 ,"score":{"chinese":70,"math":90, "english":90} },
{ "name":"王五" , "age":24 ,"score":{"chinese":80,"math":60, "english":90} }
]
}
```
把Json 串换成Json 对象
```
var dataObj=eval("("+data+")");//转换为json 对象
```


```js
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "ajax_info.txt", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
               //callback
               document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
           }else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }else {
               alert('something else other than 200 was returned');
           }
        }
    };
}
```
JQuery的Ajax
```js
$.ajax({
    url: 'xxx.json',
    type:'GET',
    success: function (data) {},
    error: function (err) {}
})
JSON

一种轻量级的数据交换格式（一种数据格式）。

{
    "code": 10000,
    "data": {
        "list": [
            {
                "id": 2101,
                "name": "锅贴",
                "price": 600,
                "sku": "P23564545756"
            },
            {
                "id": 2202,
                "name": "回锅肉",
                "price": 1500,
                "sku": "P23564545789"
            },
            {
                "id": 2503,
                "name": "芒果",
                "price": 750,
                "sku": "P23564545758"
            },
            {
                "id": 3604,
                "name": "苹果",
                "price": 450,
                "sku": "P23564545753"
            },
            {
                "id": 5605,
                "name": "荔枝",
                "price": 2000,
                "sku": "P23564545759"
            }
        ],
        "page": 1,
        "size": 10,
        "total": 5
    },
    "msg": "请求正确"
}
```

## JSONP
### 一、JSONP的诞生

首先，因为ajax无法跨域

其次，开发者发现， <script>标签的src属性是可以跨域的
把跨域服务器写成 调用本地的函数 ，回调数据回来不就好了？

json刚好被js支持（object）

调用跨域服务器上动态生成的js格式文件（不管是什么类型的地址，最终生成的返回值都是一段js代码）

这种获取远程数据的方式看起来非常像ajax，但其实并不一样
便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP。

传递一个callback参数给跨域服务端，然后跨域服务端返回数据时会将这个callback参数作为函数名来包裹住json数据即可。  
相关链接: [深入理解 JavaScript 异步系列（1）](http://mp.weixin.qq.com/s/d2IgiekUMgqKOyvrw5fqJA)  

### 二、 与AJAX的区别是什么？  
ajax和jsonp本质上是不同的东西。  
ajax的核心是通过XmlHttpRequest获取非本页内容  
jsonp的核心则是动态添加<script>标签来调用服务器提供的js脚本。  

[利用jQuery实现多个ajax请求等待](http://mp.weixin.qq.com/s/DQZWi_PqnZU_F5VpPhC98w)  
[Ajax不能跨域访问的解决方案](https://mp.weixin.qq.com/s/ZUNQhhvj6_FOxmG2MDgRyg)