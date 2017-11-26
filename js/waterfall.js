/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  /**
     * 内容JSON
     */
  var demoContent = [
    {
      demo_link: 'http://www.zxhnext.top/qichenews/',
      img_link: '../demoImg/qichenews.png',
      code_link: 'https://github.com/zxhnext/qichenews',
      title: 'vue单页新闻',
      core_tech: 'Vue webpack less',
      description: '一个简单的手机端vue单页面应用,采用rem布局,使用了less,字体图标以及webpack打包工具'
    }, {
      demo_link: 'http://www.zxhnext.top/baohua/',
      img_link: '../demoImg/baohua.png',
      code_link: 'https://github.com/zxhnext/baohua',
      title: '仿宝华页面',
      core_tech: 'HTML CSS',
      description: '仿照宝华网站做了一个静态页面,运用到了一些轮播图插件,以及css3旋转属性'
    }, {
      demo_link: 'http://www.zxhnext.top/guanggunjie/',
      img_link: '../demoImg/guanggunjie.png',
      code_link: 'https://github.com/zxhnext/guanggunjie',
      title: '光棍节摇一摇',
      core_tech: 'jquery less velocity canvas',
      description: '做了一个光棍节摇一摇的移动端网页,运用到了jquery,less,调用了velocity动画库,每次可随机摇出一个光棍节陪你过的人'
    }, {
      demo_link: 'http://www.zxhnext.top/baidu/',
      img_link: '../demoImg/baidu.png',
      code_link: 'https://github.com/zxhnext/baohua',
      title: '仿宝华页面',
      core_tech: 'HTML CSS',
      description: '仿照宝华网站做了一个静态页面,运用到了一些轮播图插件,以及css3旋转属性'
    }, {
      demo_link: 'http://www.zxhnext.top/baohua/',
      img_link: '../demoImg/baidu.png',
      code_link: 'https://github.com/zxhnext/baidu',
      title: '仿百度搜索',
      core_tech: 'js',
      description: '调用百度接口做了一个百度搜索界面,由于同源策略问题,这里用secipt标签引入'
    }, {
      demo_link: 'http://www.zxhnext.top/translate/',
      img_link: '../demoImg/translate.png',
      code_link: 'https://github.com/zxhnext/translate',
      title: '百度翻译',
      core_tech: 'js jquery',
      description: '调用百度翻译接口做了一个翻译页面,实现自动检测输入语言,以及翻译和清空内容功能'
    }
  ];

  contentInit(demoContent) //内容初始化
  waitImgsLoad() //等待图片加载，并执行布局初始化
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
  // var htmlArr = [];
  // for (var i = 0; i < content.length; i++) {
  //     htmlArr.push('<div class="grid-item">')
  //     htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
  //     htmlArr.push('<img src="'+content[i].img_link+'">')
  //     htmlArr.push('</a>')
  //     htmlArr.push('<h3 class="demo-title">')
  //     htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
  //     htmlArr.push('</h3>')
  //     htmlArr.push('<p>主要技术：'+content[i].core_tech+'</p>')
  //     htmlArr.push('<p>'+content[i].description)
  //     htmlArr.push('<a href="'+content[i].code_link+'">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>')
  //     htmlArr.push('</p>')
  //     htmlArr.push('</div>')
  // }
  // var htmlStr = htmlArr.join('')
  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
    htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <p>主要技术：' + content[i].core_tech + '</p>' + '   <p>' + content[i].description + '       <a href="' + content[i].code_link + '">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>' + '   </p>' + '</div>'
  }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  //console.log(imgs)
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      //console.log('complete');
      count++
    } else {
      imgs[i].onload = function() {
        // alert('onload')
        count++
        //console.log('onload' + count)
        if (count == totalImgs) {
          //console.log('onload---bbbbbbbb')
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    //console.log('---bbbbbbbb')
    initGrid()
  }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    isFitWidth: true,
    gutter: 20
  })
}
