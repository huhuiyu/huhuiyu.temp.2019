console.log('执行js017.js');
//蝙蝠侠信息
let batman01 = '蝙蝠侠'; //姓名
let batman02 = 1000; //生命
let batman03 = 50; //最大伤害
let batman04 = 15; //最小伤害
//小丑信息
let joker01 = '小丑'; //姓名
let joker02 = 500; //生命
let joker03 = 100; //最大伤害
let joker04 = 30; //最小伤害
//页面元素
let divBatman = document.getElementById('divBatman');
let divJoker = document.getElementById('divJoker');
let divInfo = document.getElementById('divInfo');
let btnStart = document.getElementById('btnStart');
//初始化信息
function batmaninfo() {
  //蝙蝠侠信息更新
  divBatman.innerHTML = batman01 + '<br>';
  divBatman.innerHTML += '生命' + batman02 + '<br>';
  divBatman.innerHTML += '最大攻击' + batman03 + '<br>';
  divBatman.innerHTML += '最小攻击' + batman04 + '<br>';
}

function jokerinfo() {
  //小丑信息更新
  divJoker.innerHTML = joker01 + '<br>';
  divJoker.innerHTML += '生命' + joker02 + '<br>';
  divJoker.innerHTML += '最大攻击' + joker03 + '<br>';
  divJoker.innerHTML += '最小攻击' + joker04 + '<br>';
}

batmaninfo();
jokerinfo();

//回合数
let count = 0;
//伤害值
let sh = 0;
//是否结束(只有真假两种结果)
let finish = false;
btnStart.addEventListener('click', function() {
  //判断是否已经结束
  if (finish) {
    alert('游戏已经结束');
    return;
  }
  //回合数+1
  count++;
  divInfo.innerHTML += '第' + count + '轮攻击<br>';
  //蝙蝠侠攻击
  sh = parseInt(Math.random() * (batman03 - batman04 + 1) + batman04);
  let bj = parseInt(Math.random() * 5 + 1);
  //只有随机数是5才会暴击
  if (bj == 5) {
    //暴击就是伤害加倍
    sh = sh * 2;
  }
  //小丑受到伤害
  joker02 -= sh;
  if (bj == 5) {
    //暴击的样式不一样
    divInfo.innerHTML += '<span class="bj-color">' + batman01 + '对' + joker01 + '造成了' + sh + '点伤害</span><br>';
  } else {
    divInfo.innerHTML += batman01 + '对' + joker01 + '造成了' + sh + '点伤害<br>';
  }
  //小丑信息面板变化
  jokerinfo();
  //小丑攻击
  sh = parseInt(Math.random() * (joker03 - joker04 + 1) + joker04);
  //暴击效果
  bj = parseInt(Math.random() * 5 + 1);
  if (bj == 5) {
    sh = sh * 2;
  }
  batman02 -= sh;
  if (bj == 5) {
    divInfo.innerHTML += '<span class="bj-color">'
     + joker01 + '对' + batman01 + '造成了' 
     + sh + '点伤害</span><br>';
  } else {
    divInfo.innerHTML += joker01 + '对' + batman01 + '造成了' + sh + '点伤害<br>';
  }
  //蝙蝠侠信息面板更新
  batmaninfo();
  //判断结果
  if (batman02 <= 0 && joker02 <= 0) {
    //同归于尽的结果
    divInfo.innerHTML += '同归于尽';
    finish = true;
  } else if (batman02 <= 0) {
    divInfo.innerHTML += joker01 + '获得胜利！';
    finish = true;
  } else if (joker02 <= 0) {
    divInfo.innerHTML += batman01 + '获得胜利！';
    finish = true;
  }
});

let btnReset = document.getElementById('btnReset');
btnReset.addEventListener('click', function() {
  //重置状态
  count = 0;
  finish = false;
  batman02 = 1000;
  joker02 = 500;
  divInfo.innerHTML = '';

  batmaninfo();
  jokerinfo();
});
