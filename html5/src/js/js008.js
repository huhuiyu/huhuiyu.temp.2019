console.log('======执行js008.js=======');
/*
获取系统时间
*/
let now = new Date();
console.log('当前时间：', now);
let year = now.getFullYear(); //年
let month = now.getMonth() + 1; //月(是0-11)
let day = now.getDate(); //日
let hour = now.getHours(); //时
let minute = now.getMinutes(); //分
let second = now.getSeconds(); //秒
console.log(year, month, day, hour, minute, second);

let divTime = document.getElementById('divTime');
divTime.innerHTML = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second;

//通过定时任务实时更新时间信息
setInterval(function() {
  now = new Date();
  year = now.getFullYear();
  month = now.getMonth() + 1;
  day = now.getDate();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
  divTime.innerHTML = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second;
}, 1000);

//定时更换背景图片
//控制图片在指定的范围内变化
let index = 0; //通过变量指定图片
setInterval(function() {
  index = index + 1; //增加值
  //%是取模运算符，表示第一个数整除第二个数的余数
  //也就是余商，比如8%3 2 9%3 0
  index = index % 4;
  console.log(index);
  document.body.style.backgroundImage
   = 'url("images/bg' + index + '.png")';
}, 1000);
