---
layout: post
title:  "postcss详解"
date:   2017-09-11 15:50:21
categories: webpack
tags: webpack postcss
author: Zxhnext
---

* content
{:toc}
如果less 和 sass 是预处理,那么 psotcss就是后处理.  
less和sass 是经过编译后 生成css  
postcss是对写好的css进行重新处理  

## 使用步骤: 
### 1. 安装webpack
### 2. 安装postcss包和 autoprefixer包.
```
npm i -D  postcss-loader
npm i -D  autoprefixer
```
### 3. 项目根目录下创建一个postcss.config.js 
webpack官网代码如下:



```webpack
module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'autoprefixer': {},
    'cssnano': {}
  }
}
```
要实现官网的demo需要实现这些包.包括 sugarss postcss-import postcss-cssnext autoprefixer cssnano 在3.4.1版本的webpack安装sugarss会有报错.为了更好的测试postcss用法.这里不装多余的扩展.只装autoprefixer 自动为css代码加前缀.代码如下:
```webpack
module.exports = {
  plugins: {
    'autoprefixer': {}
  }
}
4.配置webpack.config.js

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ]
  }
}
```
配置完成后跑一遍webpack 
构建之前的css
```css
.hello{color: red; box-shadow: 10px 10px 5px #888888}
```
构建之后的css
```css
.hello{color: red; -webkit-box-shadow: 10px 10px 5px #888888; box-shadow: 10px 10px 5px #888888}
```