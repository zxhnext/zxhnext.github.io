---
layout: post
title:  "css3动画"
date:   2017-09-23 22:14:54
categories: css3
tags: css3 animation
author: Zxhnext
---

* content
{:toc}
## 一：过渡动画---Transitions
含义：在css3中，Transitions功能通过将元素的某个属性从一个属性值在指定的时间内平滑过渡到另一个属性值来实现动画功能。




Transitions属性的使用方法如下所示：

transition: property | duration  | timing-function | delay

transition-property: 表示对那个属性进行平滑过渡。

transition-duration: 表示在多长时间内完成属性值的平滑过渡。

transition-timing-function 表示通过什么方法来进行平滑过渡。

transition-delay: 定义过渡动画延迟的时间。

浏览器支持程度：IE10，firefox4+，opera10+，safari3+及chrome8+

下面是transitions过渡功能的demo如下：

HTML代码如下：
```html
<div class="transitions">transitions过渡功能</div>
```
CSS代码如下：
```css
.transitions {
    -webkit-transition-property: background-color;
    -webkit-transition-duration: 1s;
    -webkit-transition-timing-function: linear;
        
    -moz-transition-property: background-color;
    -moz-transition-duration: 1s;
    -moz-transition-timing-function: linear;

    -o-transition-property: background-color;
    -o-transition-duration: 1s;
    -o-transition-timing-function: linear;
} 
.transitions:hover {
　　background-color: #00ffff;
}
```

transitions过渡功能演示--- 鼠标移上来即可看到效果！！

```css
 .transitions {
    -webkit-transition: background-color 1s linear;
    -moz-transition: background-color 1s linear;
    -o-transition: background-color 1s linear;
 }
.transitions:hover {
    background-color: #00ffff;
}
```
如果想要过渡多个属性，可以使用逗号分割，如下代码：
```css
div { -webkit-transition: background-color 1s linear, color 1s linear, width 1s linear;}
```
### 2.  我们可以使用Transitions功能同时平滑过渡多个属性值。

如下HTML代码：
```html
<h2>transitions平滑过渡多个属性值</h2>
<div class="transitions2">transitions平滑过渡多个属性值</div>
```
CSS代码如下：
```css
.transitions2 {
    background-color:#ffff00;
    color:#000000;
    width:300px;

    -webkit-transition: background-color 1s linear, color 1s linear, width 1s linear;
    -moz-transition: background-color 1s linear, color 1s linear, width 1s linear;
    -o-transition: background-color 1s linear, color 1s linear, width 1s linear;
}
.transitions2:hover {
    background-color: #003366;
    color: #ffffff;
    width:400px;
}
```

## 二：Transform功能：
Transform的含义是：改变，使…变形，转换的意思。

语法：none|<transform-function>[<transform-function>]*    初始值是none。

Transform-function 的取值如下：

matrix() 定义距阵变换。基本上很少使用。  
translate() 移动元素对象。  
scale() 缩放元素对象。  
rotate() 旋转元素对象。  
skew() 倾斜元素对象。  
下面我们来分解 2~5中的各个属性的使用吧！如下：

### 一：transform:rotate()

含义是旋转，其中的deg是 度 的意思，如”10deg”表示10度的意思。

如下HTML代码：
```html
<h2>transform属性-rotate旋转的demo</h2>
<div class="rotate">
    <img src="http://m1.img.srcdd.com/farm5/d/2015/0228/22/FD9886C5434AC71115812ED3DB6409B9_B500_900_500_269.jpeg"/>
</div>
```
CSS代码如下：
```css
.rotate img {
    -webkit-transform:rotate(0deg);
    -moz-transform:rotate(0deg);
    -o-transform:rotate(0deg);
    transition:1s all linear;
}
.rotate {width:520px;height:280px;overflow:hidden;}
.rotate img:hover {-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-o-transform:rotate(90deg)}
```

### 二：transform:skew(); 含义倾斜的意思。如下偏斜20度的demo

HTML代码如下：
```html
<h2>transform属性-skew倾斜的demo</h2>
<div class="skew">
    <img src="http://m1.img.srcdd.com/farm5/d/2015/0228/22/FD9886C5434AC71115812ED3DB6409B9_B500_900_500_269.jpeg"/>
</div>
```
CSS代码如下：
```css
.skew img {
    -webkit-transform:skew(0deg);
    -moz-transform:skew(0deg);
    -o-transform:skew(0deg);
    transition:1s all linear;
}
.skew {width:520px;height:280px;overflow:hidden;}
.skew img:hover {-webkit-transform:skew(20deg);-moz-transform:skew(20deg);-o-transform:skew(20deg)}
```

### 三：transform:scale();

含义：比如“1.5”表示以1.5的比例放大，-1.5 表示以1.5的比例缩小。

如：-webkit-transform:scale(1.5); 在chrome或者safari浏览器下放大1.5倍。

HTML代码如下：
```html
<h2>transform属性-scale缩放的demo</h2>
    <ul class="transform">
        <li>
            <img src="http://m3.img.srcdd.com/farm4/d/2015/0228/22/291A00ACAACA473D6EE206F118EB473C_B500_900_110_110.jpeg"/>
        </li>
        <li>
            <img src="http://m2.img.srcdd.com/farm5/d/2015/0228/22/2990B0DA0492FBEC9D71FCA00ACE814A_B500_900_110_110.jpeg"/>
        </li>
        <li>
            <img src="http://m2.img.srcdd.com/farm4/d/2015/0228/22/61DB5F16DAD802B61F976BE1FE09A4E9_B500_900_110_110.jpeg"/>
        </li>
        <li>
            <img src="http://m1.img.srcdd.com/farm5/d/2015/0228/22/3AE45F87A04F6F2C0B688F6C844F52CE_B500_900_110_93.jpeg"/>
        </li>
    </ul>
```

CSS代码如下：
```css
ul,li{list-style:none;}
.transform{ width:205px; margin:100px auto;overflow: hidden;padding: 50px;}
.transform li{ border-radius: 4px;background: #fff;width:45px; height:45px;margin:3px; float:left; transition:.1s all ease;}

.transform li img{border-radius: 4px;height: 43px;width: 43px;border: 1px solid #fff;cursor: pointer;}

.transform li:hover{-webkit-transform:scale(1.5);-moz-transform:scale(1.5);-o-transform:scale(1.5);transform:scale(1.5);}
```

### 四：transform:translate();

     含义：变动，位移

     如：-webkit-transform:translate(120px,0); 表示向右位移120px，向上位移0px；向左向下位移则为负 “-”，如下demo

    HTML代码如下：
```html
<h2>transform属性-translate变动位移的demo</h2>
<div class="translate">
        <img src="http://m1.img.srcdd.com/farm5/d/2015/0228/22/FD9886C5434AC71115812ED3DB6409B9_B500_900_500_269.jpeg"/>
</div>
```
CSS代码如下：
```css
.translate img {
    -webkit-transform:translate(0,0);
    -moz-transform:translate(0,0);
    -o-transform:translate(0,0);
    transition:1s all linear;
}
.translate {width:520px;height:280px;overflow:hidden;}
.translate img:hover {-webkit-transform:translate(120px,0);-moz-transform:translate(120px,0);-o-transform:translate(120px,0)}
```

## 三：Animations功能；
Animations功能与Transitions功能相同，都是通过改变元素的属性值来实现动画效果的。它们的区别在于：使用Transitions功能是只能通过指定属性的开始值与结束值。然后在这两个属性值之间进行平滑过渡的方式来实现动画效果，因此不能实现复杂的动画效果；而Animations则通过定义多个关键帧以及定义每个关键帧中元素的属性值来实现更为复杂的动画效果。

用法：@-webkit-keyframes 关键帧的集合名 {创建关键帧的代码}

如下面的代码：
```css
@-webkit-keyframes mycolor {

           0% {background-color:red;}

           40% {background-color:darkblue;}

           70% {background-color: yellow;}

           100% {background-color:red;}

}

.animate:hover {

           -webkit-animation-name: mycolor;

           -webkit-animation-duration: 5s;

           -webkit-animation-timing-function:linear;

}
```
如上：-webkit-animation-name属性中指定关键帧集合的名称，

-webkit-animation-duration属性指定完成整个动画所需要完成的时间，timing-function 值实现动画的方法。

可以看如下demo

HTML代码如下：
```html
<h2>使用animate实现更为复杂的动画</h2>
<div class="animate">使用animate实现更为复杂的动画</div>
```
CSS代码如下：

```css
.animate {background-color:red;height:100px;}
    
@-webkit-keyframes mycolor {
    0% {background-color:red;}
    40% {background-color:darkblue;}
    70% {background-color: yellow;}
    100% {background-color:red;}
}
@-moz-keyframes mycolor {
    0% {background-color:red;}
    40% {background-color:darkblue;}
    70% {background-color: yellow;}
    100% {background-color:red;}
}
    
.animate:hover {
    -webkit-animation-name: mycolor;
    -webkit-animation-duration: 5s;
    -webkit-animation-timing-function:linear;

    -moz-animation-name: mycolor;
    -moz-animation-duration: 5s;
    -moz-animation-timing-function:linear;
}
```

如上就可以实现在chrome，firefox，safari及opera浏览下上的效果了；

注意：在opera中写如下css代码是不生效的；如下：

```css
.animate:hover {

       -o-animation-name: mycolor;

       -o-animation-duration: 5s;

       -o-animation-timing-function:linear;

 }

 @-o-keyframes mycolor {

      0% {background-color:red;}

      40% {background-color:darkblue;}

      70% {background-color: yellow;}

      100% {background-color:red;}

 }
```
实现动画的方法如下：  
linear: 在动画开始时到结束的时候以同样的速度进行改变。

ease-in 在动画开始时候速度很慢，然后速度沿曲线值进行加快。

ease-out  在动画开始时 速度很快，然后速度沿曲线值进行放慢。

ease 动画开始时速度很慢，然后速度沿曲线值进行加快，然后再沿曲线值放慢。

ease-in-out 动画开始时速度很慢，然后速度沿曲线值进行加快，然后再沿曲线值放慢

下面我们继续使用  animate实现多个属性值同时改变的动画 demo如下：

HTML代码如下：
```html
<h2>使用animate实现多个属性值同时改变的动画</h2>
<div class="animate2">使用animate实现多个属性值同时改变的动画</div>
```
CSS代码如下：
```css
.animate2 {
    background-color:yellow;
    width:500px;
    height:100px;
}
@-moz-keyframes mycolor2 {
    0% {
        background-color: red;
        -moz-transform: rotate(0deg);
    }
    40% {
        background-color: darkblue;
        -moz-transform: rotate(30deg);
    }
    70% {
        background-color: yellow;
        -moz-transform: rotate(-30deg);
    }
    100% {
        background-color: red;
        -moz-transform: rotate(0deg);
    }
}
@-webkit-keyframes mycolor2{
    0% {
        background-color: red;
        -webkit-transform: rotate(0deg);
    }
    40% {
        background-color: darkblue;
        -webkit-transform: rotate(30deg);
    }
    70% {
        background-color: yellow;
        -webkit-transform: rotate(-30deg);
    }
    100% {
        background-color: red;
        -webkit-transform: rotate(0deg);
    }
}
.animate2:hover {
    -webkit-animation-name: mycolor2;
    -webkit-animation-duration:5s;
    -webkit-animation-timing-function: linear;

    /* 无限循环旋转 当count为整数时候，那么就旋转的次数就等于该整数值*/
    -webkit-animation-iteration-count:infinite;

    -moz-animation-name: mycolor2;
    -moz-animation-duration:5s;
    -moz-animation-timing-function: linear;

    /* 无限循环旋转 当count为整数时候，那么就旋转的次数就等于该整数值*/
    -moz-animation-iteration-count:infinite;
}
```
