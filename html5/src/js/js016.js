console.log('执行js016.js');
let btnStart = document.getElementById('btnStart');
let btnClear = document.getElementById('btnClear');
let btnBig = document.getElementById('btnBig');
let btnSmall = document.getElementById('btnSmall');
let divInfo = document.getElementById('divInfo');

//定义猜数的区间
let min = 1;
let max = 100;
//记录猜数次数和猜的数
let count = 1;
let guess;
//最大猜数次数
let maxCount = 7;

//重置按钮
btnClear.addEventListener('click', function() {
  //恢复区间
  min = 1;
  max = 100;
  //重置按钮状态(不显示猜大和猜小了，显示开始游戏按钮)
  btnBig.style.display = 'none';
  btnSmall.style.display = 'none';
  btnStart.style.display = 'inline';
  //清空信息
  divInfo.innerHTML = '';
});
//开始游戏
btnStart.addEventListener('click', function() {
  //隐藏开始按钮，显示猜大了和猜小了
  btnStart.style.display = 'none';
  btnBig.style.display = 'inline';
  btnSmall.style.display = 'inline';
  //显示游戏开始信息
  divInfo.innerHTML = '游戏开始<br>';
  //每次都是猜区间中间的数
  //第一次max是100，min是1，取整结果是50
  guess = parseInt((max + min) / 2);
  divInfo.innerHTML += '第' + count + '次，电脑猜是：' 
    + guess + '<br>';
  //计数器增加一次
  count=count+1;
});
