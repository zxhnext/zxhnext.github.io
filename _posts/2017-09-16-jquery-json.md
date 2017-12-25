---
layout: post
title:  "Ajax与Json数据"
date:   2017-08-26 22:14:54
categories: Ajax
tags: jquery Ajax
author: Zxhnext
---
* content
{:toc}

JQuery第二节-

JQuery 课程提纲

JQuery第二节-Ajax与Json数据
Ajax
JS原生XMLHttpRequest对象
JQuery的Ajax
JSON
示例
天气接口实战练习
Ajax

概念：一种请求数据的方式，不需要刷新整个页面
ajax的技术核心是 XMLHttpRequest 对象；
ajax 请求过程：创建 XMLHttpRequest 对象、连接服务器、发送请求、接收响应数据；
JS原生XMLHttpRequest对象

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
JQuery的Ajax

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