console.log('执行js022.js');
//定义图片信息数组，src为图片地址，info是图片描述,ani是动画class名称
let images = [{ src: 'images/bg0.png', info: '科幻背景一', ani: 'tada' }, { src: 'images/bg1.png', info: '科幻背景二', ani: 'jello' }, { src: 'images/batman.jpg', info: '蝙蝠侠', ani: 'bounceInRight' }, { src: 'images/bg2.png', info: '科幻背景三', ani: 'heartBeat' }];

//显示信息的索引（数组下标）
let index = 0;
let myimg = document.getElementById('myimg');
let divInfo = document.getElementById('divInfo');

//切换图片的function
function changeImg() {
  //获取index对应的图片信息
  let img = images[index];
  //setAttribute('属性名称',属性值)，修改元素的属性值
  //把图片的src属性切换为img对象的src
  myimg.setAttribute('src', img.src);
  //修改divInfo的内容为img对象的info
  divInfo.innerHTML = img.info;
  //切换动画效果,两种方式控制class属性
  myimg.setAttribute('class', '');
  myimg.classList.add('animated', img.ani);
}

changeImg();

//定时动态切换图片
setInterval(function() {
  //切换索引
  index = (index + 1) % images.length;
  changeImg();
}, 3000);

//直接跳到索引对应的图片
//新知识点，可以定义参数的function
//跳转图片需要给出索引值，需要页面传递进来
//所以function提供了括号，用于传递参数信息
//参数在定义的时候只需要一个名称来标识，由调用者负责传递值
//toImg方法的()中定义了imgindex，表示图片的索引值
function toImg(imgindex) {
  //将index直接切换成传入的参数值，然后再调用切换图片方法
  index = imgindex;
  changeImg();
}

document.getElementById('sp1').addEventListener('click', function() {
  //由于toImg定义参数，所以调用者要明确给出参数的值
  toImg(0);
});

document.getElementById('sp2').addEventListener('click', function() {
  //由于toImg定义参数，所以调用者要明确给出参数的值
  toImg(1);
});

document.getElementById('sp3').addEventListener('click', function() {
  //由于toImg定义参数，所以调用者要明确给出参数的值
  toImg(2);
});

document.getElementById('sp4').addEventListener('click', function() {
  //由于toImg定义参数，所以调用者要明确给出参数的值
  toImg(3);
});

//作业一
//写一个页面演示所有的animate效果，并显示动画说明
//作业二
//切换图片的效果修改为随机切换
//作业三
//提供切换上一张，下一张功能
