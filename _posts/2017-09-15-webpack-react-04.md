---
layout: post
title:  "webpack的react配置"
date:   2017-09-15 15:50:21
categories: webpack
tags: webpack
author: Zxhnext
---

* content
{:toc}
要使用react,需要理解react环境需要什么. 
### 1. 需要react模块 
### 2. 需要react-dom模块 
### 3. 需要babel 解析jsx语法



## 用webpack配置react步骤如下:

## 1. 安装react和react-dom 模块
```
npm install --save-dev react react-dom
```
写react用的是jsx文件.写代码前不要忘了引入模块
```
import React from "react";
import ReactDOM from "react-dom";
```
### 2. 安装babel以及babel所需要的模块
```
npm install babel-core babel-loader babel-preset-es2016 babel-preset-react --save
```
es2017已经出来了,如果es2016报错就输入es2017
### 3. 配置webpack.config.js
```
//套路
const path = require('path');
module.exports = {
  //输入       
  entry: {
    //输入的就是jsx文件了
     app:'./src/index.jsx',
  },
  //输出
  output: {
    //输出的文件名
    filename: '[name].bundle.js',
    //输出路径
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
     contentBase: './dist'
  },
   module: {
     rules: [
       {
        //使用正则表达式,如果有jsx语句就用下面的模块解析
         test: /\.jsx$/,
         use: [
             {
             //babel-loader模块来处理jsx文件
                 'loader':'babel-loader',
                 //options使用安装模块扩展
                  options: {
                    "presets": [
                      //安装的babel-preset-es2016
                      "es2016",
                      //babel-preset-react
                      "react"
                    ]
                 }
             }
         ]
       }
     ]
   }
}
```
测试代码  
源目录  
index.js
```
import React from "react";
import ReactDOM from "react-dom";
import {firstName, lastName, year} from './demo.jsx';
ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <h2>心中有一万个草泥马</h2>
        <ul>
            <li>{firstName}</li>
            <li>{lastName}</li>
            <li>{year}</li>
        </ul>
    </div>,
    document.getElementById('exp')
);
demo.js

import React from "react";
import ReactDOM from "react-dom";
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
```
经过测试react和es2016的使用都没有问题.下面就可以写react了