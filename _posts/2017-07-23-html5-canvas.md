---
layout: post
title:  "HTML5之Canvas"
date:   2017-07-23 22:14:54
categories: canvas
tags: canvas
author: Zxhnext
---

* content
{:toc}

## 1、使用Canvas绘制直线
这里用到的两个API方法，moveTo和lineTo分别是线段的起点和终点坐标，变量为（X坐标,Y坐标）,strokeStyle、stroke分别路径绘制样式和绘制路径。




```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <style type="text/css">
        canvas{border:dashed 2px #CCC}
    </style>
    <script type="text/javascript">
        function $$(id){
            return document.getElementById(id);
        }
        function pageLoad(){
            var can = $$('can');
            var cans = can.getContext('2d');
            cans.moveTo(20,30);//第一个起点
            cans.lineTo(120,90);//第二个点
            cans.lineTo(220,60);//第三个点（以第二个点为起点）
            cans.lineWidth=3;
            cans.strokeStyle = 'red';
            cans.stroke();
        }
    </script>
    <body onload="pageLoad();">
        <canvas id="can" width="400px" height="300px">4</canvas>
    </body>
</html>
```

## 2、绘制渐变线条

渐变线条就是颜色有渐变的效果，当然渐变的样式可以遵循路径的方向也可以不遵循路径的方向：
```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <style type="text/css">
        canvas{border:dashed 2px #CCC}
    </style>
    <script type="text/javascript">
        function $$(id){
            return document.getElementById(id);
        }
        function pageLoad(){
            var can = $$('can');
            var cans = can.getContext('2d');
            cans.moveTo(0,0);
            cans.lineTo(400,300);
            var gnt1 = cans.createLinearGradient(0,0,400,300);//线性渐变的起止坐标
            gnt1.addColorStop(0,'red');//创建渐变的开始颜色，0表示偏移量，个人理解为直线上的相对位置，最大为1，一个渐变中可以写任意个渐变颜色
            gnt1.addColorStop(1,'yellow');
            cans.lineWidth=3;
            cans.strokeStyle = gnt1;
            cans.stroke();
        }
    </script>
    <body onload="pageLoad();">
        <canvas id="can" width="400px" height="300px">4</canvas>
    </body>
</html>
```
## 3、绘制矩形或正方形：

这种矩形框如果使用HTML4只能使用后台代码才能生成了，现在HTML5提供的Canvas功能却很容易就能绘制，所以说HTML5的优越性是相当高的。
```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <style type="text/css">
        canvas{border:dashed 2px #CCC}
    </style>
    <script type="text/javascript">
        function $$(id){
            return document.getElementById(id);
        }
        function pageLoad(){
            var can = $$('can');
            var cans = can.getContext('2d');
            cans.fillStyle = 'yellow';
            cans.fillRect(30,30,340,240);
        }
    </script>
    <body onload="pageLoad();">
        <canvas id="can" width="400px" height="300px">4</canvas>
    </body>
</html>
```
这里使用了一个方法——fillRect（）,从字面意思也能知道这个就是填充一个矩形，这里的参数值得说明一下fillRect(X,Y,Width,Height)，这个和数学里的坐标是不一样的,这里的X，Y是相对Canvas左上角的起点开始的，谨记！！

## 4、绘制一个简单的矩形框

上例中讲到要绘制一个矩形块，填充了颜色，这个例子只是简单地绘制一个矩形而不实现填充效果。
```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <style type="text/css">
        canvas{border:dashed 2px #CCC}
    </style>
    <script type="text/javascript">
        function $$(id){
            return document.getElementById(id);
        }
        function pageLoad(){
            var can = $$('can');
            var cans = can.getContext('2d');
            cans.strokeStyle = 'red';
            cans.strokeRect(30,30,340,240);
        }
    </script>
    <body onload="pageLoad();">
        <canvas id="can" width="400px" height="300px">4</canvas>
    </body>
</html>
```
这个很简单，和上例一样，就是将fill替换成了stroke，具体详见上例。

## 5、绘制一个线性渐变的矩形

渐变是填充的一种相当不错的效果，结合实例2和实例3，我们可以创建一个渐变的矩形
```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <style type="text/css">
        canvas{border:dashed 2px #CCC}
    </style>
    <script type="text/javascript">
        function $$(id){
            return document.getElementById(id);
        }
        function pageLoad(){
            var can = $$('can');
            var cans = can.getContext('2d');
            var gnt1 = cans.createLinearGradient(10,0,390,0);
            gnt1.addColorStop(0,'red');
            gnt1.addColorStop(0.5,'green');
            gnt1.addColorStop(1,'blue');
            cans.fillStyle = gnt1;
            cans.fillRect(10,10,380,280);
        }
    </script>
    <body onload="pageLoad();">
        <canvas id="can" width="400px" height="300px">4</canvas>
    </body>
</html>
```
不解释了，记住fillRect（X,Y,Width,Height）就行了。

## 6、填充一个圆形

圆形的用途很广，当然也包含了椭圆。
```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <style type="text/css">
        canvas{border:dashed 2px #CCC}
    </style>
    <script type="text/javascript">
        function $$(id){
            return document.getElementById(id);
        }
        function pageLoad(){
            var can = $$('can');
            var cans = can.getContext('2d');
            cans.beginPath();
            cans.arc(200,150,100,0,Math.PI*2,true);
            cans.closePath();
            cans.fillStyle = 'green';
            cans.fill();
        }
    </script>
    <body onload="pageLoad();">
        <canvas id="can" width="400px" height="300px">4</canvas>
    </body>
</html>
```
这里的arc方法的用法是 arc(X,Y,Radius,startAngle,endAngle,anticlockwise),意思是（圆心X坐标，圆心Y坐标，半径，开始角度（弧度），结束角度弧度，是否按照顺时针画）；

## 7、圆形区块
```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <style type="text/css">
        canvas{border:dashed 2px #CCC}
    </style>
    <script type="text/javascript">
        function $$(id){
            return document.getElementById(id);
        }
        function pageLoad(){
            var can = $$('can');
            var cans = can.getContext('2d');
            cans.beginPath();
            cans.arc(200,150,100,0,Math.PI*2,false);
            cans.closePath();
            cans.lineWidth = 5;
            cans.strokeStyle = 'red';
            cans.stroke();
        }
    </script>
    <body onload="pageLoad();">
        <canvas id="can" width="400px" height="300px">4</canvas>
    </body>
</html>
```
这里不解释了，和上边的例子相同，lineWidth是控制线条的宽度的。

## 8、圆形渐变
```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <style type="text/css">
        canvas{border:dashed 2px #CCC}
    </style>
    <script type="text/javascript">
        function $$(id){
            return document.getElementById(id);
        }
        function pageLoad(){
            var can = $$('can');
            var cans = can.getContext('2d');
            var gnt = cans.createRadialGradient(200,300,50,200,200,200);
            gnt.addColorStop(1,'red');
            gnt.addColorStop(0,'green');
            cans.fillStyle = gnt;
            cans.fillRect(0,0,800,600);
        }
    </script>
    <body onload="pageLoad();">
        <canvas id="can" width="800px" height="600px">4</canvas>
    </body>
</html>
```

这里需要说明的是createRadialGradient方法，参数有（Xstart,Ystart,radiusStart,XEnd,YEnd,radiusEnd），也就是说，它在实行渐变时，使用了两个圆，一个是原始的圆，一个是渐变式圆，其实，这种通过坐标与半径控制的方式可以实现很多样式，比如

立体圆  
```js
var gnt = cans.createRadialGradient(200,150,0,200,50,250);
gnt.addColorStop(0,'red');
gnt.addColorStop(1,'#333');
```
