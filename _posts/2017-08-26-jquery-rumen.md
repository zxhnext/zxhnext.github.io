---
layout: post
title:  "jquery"
date:   2017-08-26 22:14:54
categories: jquery
tags: jquery
author: Zxhnext
---

* content
{:toc}

## JQuery的属性与样式

.attr()与.removeAttr()

.addClass()与.removeClass()

.toggleClass()





样式操作.css()

JQuery基础修炼-DOM操作

## DOM节点的创建
```js
$("<div></div>") 
$("<div>我是文本节点</div>")
$("<div id='test' class='aaron'>我是文本节点</div>")
```
### DOM节点的插入

append 与 appendTo

append()前面是要选择的对象，后面是要在对象内插入的元素内容  
appendTo()前面是要插入的元素内容，而后面是要选择的对象  
总结：.append()和.appendTo()两种方法功能相同，主要的不同是语法——内容和目标的位置不同
```js
$('.content').append('<div>文本内容</div>');
$('<div>文本内容</div>').appendTo('.content');
```
after 与 before

after向元素的后边添加html代码，如果元素后面有元素了，那将后面的元素后移，然后将html代码插入  
before向元素的前边添加html代码，如果元素前面有元素了，那将前面的元素前移，然后将html代码插 

### DOM节点的删除

empty()的基本用法

empty 顾名思义，清空方法，但是与删除又有点不一样，因为它只移除了 指定元素中的所有子节点。

remove()的有参用法和无参用法

remove与empty一样，都是移除元素的方法，但是remove会将元素自身移除，同时也会移除元素内部的一切，包括绑定的事件及与该元素相关的jQuery数据。
```html
<h2>通过jQuery remove方法移除元素</h2>
<div class="test1">
    <p>p元素1</p>
    <p>p元素2</p>
</div>
<div class="test2">
    <p>p元素3</p>
    <p>p元素4</p>
</div>
<button>点击通过jQuery的empty移除元素</button>
<button>点击通过jQuery的empty移除指定元素</button>
<script type="text/javascript">
$("button:first").on('click', function() {
    //删除整个 class=test1的div节点
    $(".test1").remove()
})
$("button:last").on('click', function() {
    //找到所有p元素中，包含了3的元素
    //这个也是一个过滤器的处理
    $("p").remove(":contains('3')")
})
</script>
```
### DOM节点的复制与替换

DOM拷贝clone()

克隆节点是DOM的常见操作，jQuery提供一个clone方法，专门用于处理dom的克隆

.clone()方法深度 复制所有匹配的元素集合，包括所有匹配元素、匹配元素的下级元素、文字节点。 
clone() 浅拷贝  
clone(true) 深拷贝  
HTML部分
```html
<div></div>
```
JavaScript部分
```
$("div").on('click', function() {//执行操作})
//clone处理一
$("div").clone()   //只克隆了结构，事件丢失
//clone处理二
$("div").clone(true) //结构、事件与数据都克隆
```
### DOM替换replaceWith()和replaceAll()

.replaceWith( newContent )：用提供的内容替换集合中所有匹配的元素并且返回被删除元素的集合 
.replaceAll( target ) ：用集合的匹配元素替换每个目标元素 
总结：.replaceAll()和.replaceWith()功能类似，主要是目标和源的位置区别

### DOM节点的遍历

children()方法

jQuery是一个合集对象，如果想快速查找合集里面的第一级子元素，此时可以用children()方法。这里需要注意：.children(selector) 方法是返回匹配元素集合中每个元素的所有子元素（仅儿子辈，这里可以理解为就是父亲-儿子的关系）

find()方法

如果想快速查找DOM树中的这些元素的后代元素，此时可以用find()方法，这也是开发使用频率很高的方法。这里要注意 children与find方法的区别，children是父子关系查找，find是后代关系（包含父子关系） 
总结： .find()和.children()方法是相似的

1.children只查找第一级的子节点  
2.find查找范围包括子节点的所有后代节点  
## JQuery基础修炼-事件

鼠标事件

click 与 dbclcik 事件

hover 事件

表单事件

focus 与 blur 事件

change事件

submit事件

键盘事件

keydown 与 keyup事件

事件的绑定与解绑

on()与off()

JQuery基础修炼-动画

显示与隐藏

hide()与show()

显示与隐藏切换toggle方法

上拉下拉效果

下拉slideDown与上拉slideUp

上卷下拉切换slideToggle

淡入淡出动画

淡出fadeOut与淡入fadeIn

淡入淡出切换fadeToggle

fadeToggle切换fadeOut与fadeIn效果，所谓"切换"，即如果元素当前是可见的，则将其隐藏(淡出)；如果元素当前是隐藏的，则使其显示(淡入)。