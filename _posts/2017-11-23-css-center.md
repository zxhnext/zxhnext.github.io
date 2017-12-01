---
layout: post
title:  "CSS 居中布局技巧"
date:   2017-11-23 22:14:54
categories: css
tags: css
author: Zxhnext
---

* content
{:toc}
## 水平居中元素：

### 方式一：CSS3 transform
```css
.parent{
    position:relative;
}
.child{
    position :absolute;
    left:50%;
    transform:translateX(-50%);
}
```




### 方式二：flex 布局
```css
.parent{
    display:flex;
    justify-content: center;
}
```

适用于子元素为浮动，绝对定位，内联元素，均可水平居中。

### 居中的元素为常规文档流中的内联元素   (display: inline)
常见的内联元素有：span, a, img, input, label 等等
```css
.parent{
    text-align:center;
}
```
### 居中的元素为常规文档流中的块元素  (display: block)
常见的块元素：div, h1~h6, table, p, ul, li 等等

方式一：设置 margin  
```css
.parent{
    width:100%;
}
.child {
    width: 600px;
    height: 50px;
    margin: 0 auto;
    background: #999;
}
```

### 方式二：修改为 inline-block 属性
```css
.parent {
    text-align: center;
}
.child {
    display: inline-block;
}
```

### 方式三：
```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    width: 100px;
    left: 50%;
    margin-left: -50px;
}
```
### 方式四：
```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    width: 100px;
    left: 0;
    right: 0;
    margin: 0 auto;
}
```

## 垂直居中元素：

### 方式一：CSS3 transform
```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
```
## 方式二：flex 布局
```css
.parent {
    display: flex;
    align-items: center;
}
```

适用于子元素为浮动，绝对定位，内联元素，均可垂直居中。  
### 居中的元素为常规文档流中的内联元素   (display: inline)
常见的内联元素有：span, a, img, input, label 等等
```css
.text {
    line-height: 200px;
    height: 200px;
}
```
### 居中的元素为常规文档流中的块元素  (display: block)
常见的块元素：div, h1~h6, table, p, ul, li 等等
```css
.parent {
    position: relative;
}
.child{
    position: absolute;
    top: 50%;
    height: 100px;
    margin-top: -50px;
}
```
方式二：
```css
.parent {
    position: relative;
}
.child{
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100px;
    margin: auto 0;
}
```

## 垂直居中元素：

```css
div {
    width: 100px;
    height: 100px;
    margin: auto;
    position: fixed;
    //absolute is ok
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
```
优点：  
1. 不仅可以实现在正中间，还可以在正左方，正右方  
2. 元素的宽高支持百分比 % 属性值和 min-/max- 属性  
3. 可以封装为一个公共类，可做弹出层  
4. 浏览器支持性好  

```css
.child {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
}
```
特点：  
1. 良好的跨浏览器特性,兼容 IE6 - IE7  
2. 灵活性差，不能自适应，宽高不支持百分比尺寸和 min-/max- 属性

```css
.child {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  
}
```
特点：  
1. 内容可自适应，可以封装为一个公共类，可做弹出层
2. 可能干扰其他 transform 效果

```css
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}
```
这是 CSS 布局未来的趋势。Flexbox 是 CSS3 新增属性，设计初衷是为了解决像垂直居中这样的常见布局问题。