---
layout: post
title:  "CSS百分比padding制作图片自适应布局"
date:   2017-11-27 22:14:54
categories: css
tags: css padding
author: Zxhnext
---

* content
{:toc}

css知识点：当padding/margin取形式为百分比的值时，无论是left/right，还是top/bottom，都是以父元素的width为参照物的！




## 一、CSS百分比padding都是相对宽度计算的
在默认的水平文档流方向下，CSS margin和padding属性的垂直方向的百分比值都是相对于宽度计算的，这个和top, bottom等属性的百分比值不一样。  
对于padding属性而言，任意方向的百分比padding都现对于宽度计算可以让我们轻松实现固定比例的块级容器，举个例子，假设现在有个<div>元素：
```css
div { padding: 50%; }
/*或者：*/

div { padding: 100% 0 0; }
/*或者：*/
div { padding-bottom: 100%; }
```
则这个<div>元素尺寸就是一个宽高1:1的正方形，无论其父容器宽度是多少，这个<div>元素总能保持比例不变。

对于绝大多数都布局，我们并不要求非要比例固定，但是有一种情况例外，那就是图片，因为图片原始尺寸它是固定的。在传统的固定宽度的布局下，我们会通过给图片设定具体的宽度和高度值，来保证我们的图片占据区域稳固；但是在移动端或者在响应式开发情况下，图片最终展现的宽度很可能是不确定的，例如手机端的一个通栏广告，iPhone7下宽度是375，iPhone7 Plus下是414，还有360等尺寸，此时需要的不是对图片进行固定尺寸设定，而是比例设定。
通常有如下一些实现：

### 1. 固定一个高度，然后使用background-size属性控制，如下：
```css
.banner {
 height: 40px;
 background-size: cover;
}
```

此种做法随着宽度的变化，总会有部分图片区域（宽度或高度）无法显示，并不是完美的做法。
### 2. 使用视区宽度单位vw，如下：
```css
.banner {
 height: 15.15vw;
 background-size: cover;
}
```
如果对兼容性要求不是很高，使用vw也是一个不错的做法，至少理解起来要更轻松一点。
但是，如果我们的图片不是通栏，而是需要离左右各1rem的距离，此时，我们的CSS代码就要啰嗦点了，想要保持完美比例，就使用借助CSS3 calc()计算：
```css
.banner {
 height: calc(0.1515 * (100vw - 2rem));
 background-size: cover;
}
```
如果，图片距离两侧的宽度是动态不确定的，则，此时calc()也捉襟见肘了，但，恰恰是普普通通其貌不扬的padding属性，其兼容性和适应性都一级棒。
### 3. 使用百分比padding，如下：
```css
.banner {
 padding: 15.15% 0 0;
 background-size: cover;
}
```
此时无论图片的外部元素怎么变动，比例都是恒定不变的。
## 二、CSS百分比padding与宽度自适应图片布局
但是有时候我们的图片是不方便作为背景图呈现的，而是内联的<img>，百分比padding也是可以轻松应对的，求套路是比较固定的，图片元素外面需要一个固定比例的容器元素，例如下面的HTML结构：
```html
<div class="banner">
 <img src=""banner.jpg>
</div>
```
.banner元素同样负责控制比例，然后图片填充.banner元素即可，CSS代码如下：
```css
.banner {
 padding: 15.15% 0 0;
 position: relative;
}
.banner > img {
 position: absolute;
 width: 100%; height: 100%;
 left: 0; top: 0;
}
```

![效果展示](../images/0.gif)  
无论屏幕宽度多宽，我们的广告图片比例都是固定的，不会有任何剪裁，不会有任何区域缺失，布局就显得非常有弹性，也更健壮。  
————-  
（百分比特性IE6+支持，图片100%覆盖IE8+支持）。  
对于复杂布局，如果图片的宽度是不固定的自适应的，我们通常会想到这么一个取巧的做法，就是只设定图片的宽度，例如：
```css
img { width: 100%; }
```
此时浏览器默认会保持图片比例显示，图片宽度大了，高度也跟着一起变大；图片宽度小了，高度也跟着一起变小。开发人员似乎无需关心图片真实比例是怎样的。
然而这种技巧有一个非常不好的体验问题，那就是随着页面加载的进行，图片占据的高度会有一个从0到计算高度的图片变化，视觉上会有明显的元素跳动，代码层面会有布局重计算。
所以对图片高宽进行同时约定还是有必要的，但是同时要保证宽度自适应，似乎有点难度。如果遇到这种需求场景，没有比百分比padding布局更好的做法！
缩小浏览器宽度可以看到不同宽度下的布局效果，Gif效果截图如下：  
![效果展示](../images/1.gif)  
此demo难点就是图片自适应同时保持比例，以及页面刷新的时候没有布局稳固不晃动，其核心HTML和CSS代码如下：
```html
<div class="works-item-t">
  <img src="./150x200.png">
</div>
```

```css
.works-item-t {
 padding-bottom: 133%;
 position: relative;
}
.works-item-t > img {
 position: absolute;
 width: 100%; height: 100%;
}
```
可以看到，当把垂直方向padding值只使用padding-bottom表示的时候，如果没有text-align属性干扰，<img>元素的left:0;top:0是可以省略的。
对于这种图片宽度100%容器，高度按比例的场景，padding-bottom的百分比值大小就是图片元素的高宽比，就这么简单。
但，有时候，图片宽度并不是100%容器的，例如，图片宽度50%容器宽度，图片高宽比4:3，此时，CSS垂直方向百分比就666了，如下：
```css
.img-box {
 padding: 0 50% 66.66% 0;
}
```
