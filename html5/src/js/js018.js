console.log('执行js018.js');
//显示时间
let divTime = document.getElementById('divTime');

//function代码块定义
//如果有重复的代码块需要多个地方使用
//可以将代码块定义在function中
//需要使用的时候，通过function名称召唤
//格式 function 名称(){ //代码 }
function showTime() {
  //获取当前时间
  let now = new Date();
  let year = now.getFullYear(); //年
  let month = now.getMonth() + 1; //月
  let day = now.getDate(); //日
  let hour = now.getHours(); //时
  let minute = now.getMinutes(); //分
  let second = now.getSeconds(); //秒
  divTime.innerHTML = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second;
}

//更新时间
//setInterval是定时任务
//第一个参数是定时执行的function（代码）
//第二个参数是时间间隔（毫秒值）
setInterval(function() {
  //通过名称召唤代码
  showTime();
}, 1000);

showTime();
