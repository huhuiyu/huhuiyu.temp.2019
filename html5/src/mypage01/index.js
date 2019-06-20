console.log('in index.js。。。');
//图片数组
let images = ['img/background/sample1.jpg', 'img/background/sample2.jpg', 'img/background/sample3.jpg', 'img/background/sample4.jpg', 'img/background/sample5.jpg', 'img/background/sample6.jpg'];
//显示图片的索引值
let index = 0;
//切换body的背景图片
document.body.style.backgroundImage 
  = 'url("' + images[index] + '")';

//定时任务，切换背景图片
setInterval(function() {
  index = (index + 1) % images.length;
  document.body.style.backgroundImage 
    = 'url("' + images[index] + '")';
}, 2000);
