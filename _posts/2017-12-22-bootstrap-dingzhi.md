---
layout: post
title:  "webpack实现bootstrp的功能定制"
date:   2017-12-22 15:50:21
categories: css
tags: css Bootstrap less 响应式
author: Zxhnext
---

* content
{:toc}
## 一 配置webpack
1. 新建一个文件夹,初始化`npm init`(文件夹不能命名为webpack,默认已安装git node,建议使用翻墙工具,如蓝灯,[下载地址](https://github.com/getlantern/forum/issues/833)),然后下载webpack(时间较长)
```
npm install --save-dev webpack
```
[webpack官网](https://webpack.js.org/guides/asset-management/)  
2. 在根目录新建dist目录,src目录,并在dist目录中新建index.html,引入<script type="text/javascript" src="build.js"></script>  
在src目录中新建index.js,在根目录新建webpack.config.js,并进行如下配置
```js
const path = require('path');
module.exports = {
  entry: './src/index.js',
  /*实时编译*/
  devServer: {
    contentBase: './dist'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js'
  }
}
```
在package.json中添加"build": "webpack"(意思可查看 webpack官网),按照官网步骤,安装css,并按照步骤对文件进行配置,然后安装less,并在index.js中引入less,安装webpack-dev-server(注意仔细查看官网,如果为sublime或其他编辑器需进行配置)  
到这里就可以写less了,运行并编译
3. 建议使用ExtractTextPlugin将样式表抽取到生产中的专用文件中。这样你的样式不依赖于JavaScript
[参考网址](https://webpack.js.org/loaders/less-loader/)
下载安装:
```
npm install --save-dev extract-text-webpack-plugin
```
按照文档要求对webpack.config.js进行配置
将`stylesheets/[name]-two`改为自己的目录,并删掉postcss-loader,将下载好的bootstrap源码放入src目录,
在index.js中引入bootstrap.less,删掉原来的style.less
```
import './bootstrap/less/bootstrap.less';
```

装载"file-loader", "url-loader"(bootstrap自身有自己的字体图标),
然后在webpack.config.js进行配置
```js
{
    test: /.woff|.woff2|.svg|.eot|.ttf/,
    loader: 'url-loader',
    options:{
        limit:10000,
        publicPath: '../',
        outputPath: 'css/font/',
        name:'[path][hash].[ext]'
    }
}
```
最后webpack.config.js文件如下:
```js
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('css/style.css');
const extractLESS = new ExtractTextPlugin('css/bootstrap.css');
module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract([ 'css-loader'/*, 'postcss-loader' */])
      },
      {
        test: /\.less$/i,
        use: extractLESS.extract([ 'css-loader', 'less-loader' ])
      },
      {
         test: /.woff|.woff2|.svg|.eot|.ttf/,
         loader: 'url-loader',
         options:{
            limit:10000,
            publicPath: '../',
            outputPath: 'css/font/',
            name:'[path][hash].[ext]'
         }
      }
    ]
  },
  plugins: [
    extractCSS,
    extractLESS
  ]
};
```
package.json文件如下:
```js
{
  "name": "frontend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack-dev-server --open"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "css-loader": "^0.28.7",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^1.1.5",
    "less": "^2.7.3",
    "less-loader": "^4.0.5",
    "style-loader": "^0.19.0",
    "url-loader": "^0.6.2",
    "webpack": "^3.8.1",
    "webpack-dev-server": "^2.9.5"
  }
}
```

index.js文件如下:
```js
import './css/index.css';
import './bootstrap/less/bootstrap.less';
document.write("hello world");
```

到这里环境就配置完成了

## 二 对bootstrap进行功能化定制
在bootstrap官网下载bootstrap源码(下载Less、JavaScript 和 字体文件的源码，并且带有文档).这里以排水沟为例修改源文件,为bootstrp制作排水沟.主要修改grid.less和mixins文件夹中的grid.less和grid-framework 
修改 grid.less文件 
代码开头引入mixins
```css
@import "mixins/grid-framework.less";
@import "mixins/grid.less";
@import "variables.less";
// Row
//
// Rows contain and clear the floats of your columns.
.row {
  .make-row();
}
.row-sm {
  .make-row(4px);
}
.row-md {
  .make-row(10px);
}
.row-lg {
  .make-row(20px);
}
// Columns
//
// Common styles for small and large grid columns
.make-grid-columns();
.make-grid-columns-custom(".row-sm",4px);
.make-grid-columns-custom(".row-md",10px);
.make-grid-columns-custom(".row-lg",20px);
```
修改mixins文件夹中的grid-framework.less文件.增加一个minxins方法,来自定义排水沟样式
```css
.make-grid-columns-custom(@row,@width) {
  // Common styles for all sizes of grid columns, widths 1-12
  .col(@index) { // initial
      @item: ~"@{row} .col-xs-@{index}, @{row} .col-sm-@{index}, @{row} .col-md-@{index}, @{row} .col-lg-@{index}";
    .col((@index + 1), @item);
  }
  .col(@index, @list) when (@index =< @grid-columns) { // general; "=<" isn't a typo
    @item: ~"@{row} .col-xs-@{index}, @{row} .col-sm-@{index}, @{row} .col-md-@{index}, @{row} .col-lg-@{index}";
    .col((@index + 1), ~"@{list}, @{item}");
  }
  .col(@index, @list) when (@index > @grid-columns) { // terminal
    @{list} {
      position: relative;
      // Prevent columns from collapsing when empty
      min-height: 1px;
      // Inner gutter via padding
      padding-left:  ceil((@width / 2));
      padding-right: floor((@width / 2));
    }
  }
  .col(1); // kickstart it
}
```
bootstrap是非常庞大的框架.看似很复杂,还是有章可循的.通过less,可以很迅速的找到相应的模块的代码.
```css
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
// Core variables and mixins         核心变量和函数
@import "variables.less";            //变量
@import "mixins.less";               //函数 
// Reset and dependencies            重置与依赖管理
@import "normalize.less";
@import "print.less";
@import "glyphicons.less";
// Core CSS核心代码
@import "scaffolding.less";          //响应式脚手架
@import "type.less";                 //排版
@import "code.less";                 //代码
@import "grid.less";                 //栅格
@import "tables.less";               //表格
@import "forms.less";                //表单
@import "buttons.less";              //按钮样式
 //Components组件代码
@import "component-animations.less"; //组件动画
@import "dropdowns.less";            //下拉菜单
@import "button-groups.less";        //按钮组
@import "input-groups.less";         //输入框组
@import "navs.less";                 //导航
@import "navbar.less";               //导航条
@import "breadcrumbs.less";          //面包屑导航
@import "pagination.less";           //分页
@import "pager.less";                //页头
@import "labels.less";               //标签
@import "badges.less";               //徽章
@import "jumbotron.less";            //巨幕
@import "thumbnails.less";           //缩略图
@import "alerts.less";               //警告框
@import "progress-bars.less";        //进度条
@import "media.less";                //媒体对象
@import "list-group.less";           //列表组
@import "panels.less";               //面板
@import "responsive-embed.less";     //具有响应式特性的嵌入内容
@import "wells.less";                //Well
@import "close.less";
// Components w/ JavaScript          js组件
@import "modals.less";               //模态框 一般弹框插件效果
@import "tooltip.less";              //工具提示
@import "popovers.less";             //弹框
@import "carousel.less";             //幻灯片
// Utility classes                   暂时不知道
@import "utilities.less";
@import "responsive-utilities.less";
```

项目源码地址:[https://github.com/zxhnext/webpack-bootstrap](https://github.com/zxhnext/webpack-bootstrap)