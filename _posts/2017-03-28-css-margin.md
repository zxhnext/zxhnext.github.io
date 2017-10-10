---
layout: post
title:  "布局中用Margin还是用Padding"
categories: CSS
tags:  Margin Padding CSS
author: Zxhnext
date:   2017-03-28 22:14:54
---

* content
{:toc}
用margin还是用padding这个问题是每个学习CSS进阶时的必经之路。
CSS边距属性定义元素周围的空间。通过使用单独的属性，可以对上、右、下、左的外边距进行设置。也可以使用简写的外边距属性同时改变所有的外边距。——W3School
边界(margin)：元素周围生成额外的空白区。“空白区”通常是指其他元素不能出现且父元素背景可见的区域。——CSS权威指南
padding称呼为内边距，其判断的依据即边框离内容正文的距离，而我喜欢CSS权威指南解释的“补白”（或者叫“留白”），因为他很形象。补白(padding)：补白位于元素框的边界与内容区之间。很自然，用于影响这个区域的属性是padding。——CSS权威指南
关于什么时候用margin什么时候用padding，网上有许许多多的讨论，大多数似乎讨论到点上面，却又有些隔靴搔痒的感觉，总是答不到点上。而且margin和padding在许多地方往往效果都是一模一样，而且你也不能说这个一定得用margin那个一定要用padding，因为实际的效果都一样，你说margin用起来好他说padding用起来会更好，但往往争论无果。根据网上的总结归纳大致发现这几条还是比较靠谱的：



**何时应当使用margin：


需要在border外侧添加空白时。
空白处不需要背景（色）时。
上下相连的两个盒子之间的空白，需要相互抵消时。如15px + 20px的margin，将得到20px的空白。
何时应当时用padding：
需要在border内测添加空白时。
空白处需要背景（色）时。
上下相连的两个盒子之间的空白，希望等于两者之和时。如15px + 20px的padding，将得到35px的空白。
个人认为：margin是用来隔开元素与元素的间距；padding是用来隔开元素与内容的间隔。margin用于布局分开元素使元素与元素互不相干；padding用于元素与内容之间的间隔，让内容（文字）与（包裹）元素之间有一段“呼吸距离”。**

举个例子吧
```
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>用Margin还是用Padding</title>
<style>
.top{width:160px; height:50px; background:#ccf;}
.middle{width:160px; background:#cfc; border-top:1px solid #ccc;}
.middle .firstChild{margin-top:20px;}
.middle .secondChild{margin-top:15px;}
</style>
</head>
<body>
<div class="top"></div>
<div class="middle">
  <div class="firstChild">我是firstChild，我只是想和我的父元素隔开点距离，这样看起来舒服。</div>
  <div class="secondChild">我要和楼上隔开点的距离。恩，能与底边有点呼吸距离就更好了。</div>
</div>
</body>
</html>
```
上面这个效果看起来很不错，达到了我们需要实现的目标。然而，我们细细查看下这个代码，对照下我们上文所说的规则，firstChild用了margin-top:20px来隔开父元素与他的距离，secondChild也用margin-top:15来隔开他与firstChild的距离，咋看之下挺符合我们所说的margin是用来隔开元素与元素的间距。但是他符合我们所说的margin用于布局分开元素使元素与元素互不相干吗？
这里我想说的是NO，firstChild同middle属于一种父子元素关系，又是一种包裹元素与内容的关系，他们之间从拟人化的角度来讲，不应该是老死不相干的局面。我们再来看我们为什么要让firstChild与他的父元素隔开的距离，从表现的角度上来看，文字与边靠的太近，肯定不好看。让文字与元素边隔开的距离，既美观，又使得文字有了足够的“呼吸空间”，方便阅读，这恰恰符合padding用于元素与内容之间的间隔让内容（文字）与（包裹）元素之间有个“呼吸距离”。
我们再来看，firstChild使用margin-top引发了垂直外边距合并的隐患，middle如果不加一个类似border-top:1px solid #ccc的话标准浏览器下就会呈现子元素顶了父元素margin隐患（这是个垂直外边距合并问题，可以查看不要告诉我你懂margin，这篇文章内有详细介绍）。可见这个时候margin显然不是很好的选择。
我们来试着这么修改：
```
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>用Margin还是用Padding</title>
<style>
.top{width:160px; height:50px; background:#ccf;}
.middle_2{width:160px; background:#cfc; padding:20px 0px;}
.middle_2 .firstChild{}
.middle_2 .secondChild{margin-top:15px;}
</style>
</head>
<body>
<div class="top"></div>
<div class="middle_2">
  <div class="firstChild">我是firstChild，我只是想和我的父元素隔开点距离，这样看起来舒服</div>
  <div class="secondChild">我是secondChild，我要和楼上隔开点的距离。恩，能与底边有点呼吸距离就更好了。</div>
</div>
</body>
</html>
```
我们来看看这么写的好处吧：
1.外观依旧良好，结构清晰也没有破坏布局。
2.不会产生垂直外边距合并这样的问题。
3.书写规范、代码量减少、重用性好。
我们可以看到在middle_2中去除了不需要的border-top，改为更为实用的padding:20px 0，让middle_2中的内容有了足够的“呼吸空间”，以后还可以随时随地修改这个padding，让内容文字的“呼吸空间”增大或者缩小，随时随地只修改一个middle_2的padding就能搞定所有包裹元素与内部内容的规划。
请注意这里是父元素应用padding，使得与其内容产生间隙，这是符合我们翻译为“补白”精髓（所以我一直喜欢称padding为“补白”而不是内边距），而padding也恰恰是在这儿最能体检他的价值。这个例子把第一个元素的margin-top去除，在父元素中应用padding。反过来，你会想，既然margin-top不好用，那么我第一个元素用padding-top不是也能达到效果么。恭喜你，你已经前进了一步了，的确使用padding-top即让第一元素与外包裹元素产生了呼吸距离，而且也不会出现所谓的垂直外边距重叠问题， 但是我依旧不推荐你这么做。为什么呢？我们来设想这么一个情况吧，假如有一天，你这个模块要产生变动，新需求要删除这个firstChild，替换为otherChild，会怎么样呢？
新的需求要求我们新加一个otherChild，替换原来的firstChild：
```
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>用Margin还是用Padding</title>
<style>
.top{width:160px; height:50px; background:#ccf;}
.middle_3{width:160px; background:#cfc;}
.middle_3 .otherChild{font-weight:bold; font-style: italic;}
.middle_3 .secondChild{margin-top:10px;}
</style>
</head>
<body>
<div class="top"></div>
<div class="middle_3">
  <div class="otherChild">我是新来的otherChild，我也想和我的父元素隔开点距离，这样看起来舒服，咦？！为什么我是在顶部？</div>
  <div class="secondChild">我是secondChild，我要和楼上隔开点的距离。恩，能与底边有点呼吸距离就更好了。</div>
</div>
</body>
</html>
```
发现问题了么？如果你把原先的firstChild给删除掉了，新来的元素根本就没有定义上边距或者上补白，那么他就会自然顶在头部，不是理想的效果。的确，你可以为了他新写一个css来让他距离头部多一点空隙，但是你该怎么写？直接改otherChild吗？如果其他页面里面也有otherChild那么你会把其他地方的otherChild布局打乱。恩，那么我用.middle_3 .otherChild{padding-top:10px;}怎么样可以吧。恩，可以可以，可是你不觉得这么累吗？每次修改，都要增加这一个多余的代码就为了简简单单的隔开点距离，久而久之，你的css文件代码会臃肿不堪，可移植性大大削弱。
每次开发的时候我一直对自己讲，你写的代码总有一天会被别的开发人员所替换、修改、更新。而一个优秀的前端写出的css不但在现在结构坚固并且还能为日后的开发人员提供方便。修改我的代码，改前改后的式样位置都一样，让之后的开发人员根本上避免接触到再次“修复”开发的机会，那才是一名真正前端的追求。这里你把包裹的div类似“封装”好一个环境，而且这个div内已经留有足够的内容的“呼吸空间”，你只需要改内容，内容所要考虑到得位置边距问题，外包的div元素早已经帮你预留好了，你用起来方便，今后改起来也方便，直接找到middle修改padding即可。
To margin or to be padding, that is the question.
所谓大道万千，运用之妙存乎一心。该用margin的时候就大胆的用他，该用padding也不用退缩不前，实战中累积出来的经验往往是最有用的，而当你不确定是用margin好还是用padding，请在看看这个原则吧，或许你会有一个自己的答案。