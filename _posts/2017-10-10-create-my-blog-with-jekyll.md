---
layout: post
title:  "Jekyll 搭建静态博客"
date:   2017-10-10 22:14:54
categories: jekyll
tags: jekyll RubyGems
---

* content
{:toc}

一直以来都想搭建一个自己的博客，通过老师和前辈的指点，选择了在github上用jekyll搭建博客。


## 搭建过程

在jekyll的官网上 [http://jekyllrb.com/](http://jekyllrb.com/) (我用的Windows系统)。  
主要环节有：安装Ruby，安装RubyGems，安装jekyll，安装代码高亮插件，安装node.js

### 安装Ruby

ruby官网下载安装：[https://rubyinstaller.org/downloads/](https://rubyinstaller.org/downloads/)  
安装完成后配置环境变量,先把gem源设置修改一下，我们来使用淘宝的ruby镜像源:

```
gem sources --remove https://rubygems.org/
gem sources -a https://ruby.taobao.org/
gem sources -l
```

## 安装jekyll
设置好之后执行以下命令：

```
$ gem install jekyll
```

一般情况下可能会报错(没有权限)：

```
While executing gem ... (Gem::FilePermissionError)
You don't have write permissions for the /Library/Ruby/Gems/2.0.0 directory.
```

那就使用：

```
$ sudo gem install jekyll
```

接下来执行`bundler install`，这样jekyll已经安装好了。

## 新建jekyll项目
使用以下命令快速创建一个jekyll站点的经典目录结构：

```
$ jekyll new myBlog
```

然后访问到该目录，执行：

```
$ cd myBlog
$ jekyll server
```

打开浏览器，输入：http://localhost:4000/
这样一个基本的jekyll站点就建立好了。

## 创建Github-Pages
> 首先创建一个git仓库：[Create a new repository][https://github.com/new]

仓库名为：`username.github.io`，`username` : 为你的github用户名。

> **一定记得把`username`改成你的github用户名!**

比如我的用户名是`zxhnext`，同理仓库名就是`zxhnext.github.io`。
然后点击`Create repository`完成仓库创建。

## 推送到Github
将你刚刚创建的jekyll站点代码推送到你新创建的`username.github.io`仓库。
然后访问你的github-Pages页面地址，比如我的：https://vimplus.github.io

到这里你的Github-Pages博客站点就大功告成啦！

## 博客主题
作为强迫症的我怎能容忍丑陋的博客页面，当然是找[jekyll主题][http://jekyllthemes.org/]或者自己设计，找到喜欢的主题后下载主题代码自行替换你站点目录的代码（你可以全部替换，因为一个主题就是有基本功能的jekyll站点）。


##添加评论插件
可以选择disqus或[livere][https://livere.com/login_form]或[畅言][http://changyan.sohu.com/]作为评论系统，其中disqus和livere为国外网站，可自行百度设置。

