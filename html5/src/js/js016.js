console.log('执行js016.js');
let btnStart = document.getElementById('btnStart');
let btnClear = document.getElementById('btnClear');
let btnBig = document.getElementById('btnBig');
let btnSmall = document.getElementById('btnSmall');
let divInfo = document.getElementById('divInfo');

//定义猜数的区间
let min = 1;
let max = 1000;
//记录猜数次数和猜的数
let count = 1;
let guess;
//最大猜数次数
let maxCount = 10;

//重置按钮
btnClear.addEventListener('click', function() {
  //恢复区间
  min = 1;
  max = 100;
  count = 1;
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
  divInfo.innerHTML += '第' + count + '次，电脑猜是：' + guess + '<br>';
});

btnBig.addEventListener('click', function() {
  //电脑猜大了的情况，将最大值变成猜的值-1
  //这样就可以淘汰掉一半不正确的值
  max = guess - 1;
  count = count + 1;
  //重新查找中间值作为新的猜测值
  guess = parseInt((max + min) / 2);
  divInfo.innerHTML += '第' + count + '次电脑猜的是：' + guess + '<br>';
  if (count == maxCount) {
    alert('最后的结果是' + guess + ',游戏结束');
    //触发btnClean的单击事件
    btnClear.click();
  }
});

btnSmall.addEventListener('click', function() {
  //电脑猜小了的情况，将最小值变成猜的值+1
  //这样就可以淘汰掉小的一半不正确的值
  min = guess + 1;
  count = count + 1;
  guess = parseInt((max + min) / 2);
  divInfo.innerHTML += '第' + count + '次电脑猜的是：' + guess + '<br>';
  if (count == maxCount) {
    alert('最后的结果是' + guess + ',游戏结束');
    btnClear.click();
  }
});

/*
 23
min max
1-100
对分搜索
  50 
1 49
  25
1 24
  12
13 24
  18
18 24
  21
22 24
 23
 */
