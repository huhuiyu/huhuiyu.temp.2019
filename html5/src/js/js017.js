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
divBatman.innerHTML = batman01 + '<br>';
divBatman.innerHTML += '生命' + batman02 + '<br>';
divBatman.innerHTML += '最大攻击' + batman03 + '<br>';
divBatman.innerHTML += '最小攻击' + batman04 + '<br>';

divJoker.innerHTML = joker01 + '<br>';
divJoker.innerHTML += '生命' + joker02 + '<br>';
divJoker.innerHTML += '最大攻击' + joker03 + '<br>';
divJoker.innerHTML += '最小攻击' + joker04 + '<br>';

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
  //小丑受到伤害
  joker02 -= sh;
  divInfo.innerHTML += batman01 + '对' + joker01 + '造成了' + sh + '点伤害<br>';
  //小丑信息面板变化
  divJoker.innerHTML = joker01 + '<br>';
  divJoker.innerHTML += '生命' + joker02 + '<br>';
  divJoker.innerHTML += '最大攻击' + joker03 + '<br>';
  divJoker.innerHTML += '最小攻击' + joker04 + '<br>';
  //小丑攻击
  sh = parseInt(Math.random() * (joker03 - joker04 + 1) + joker04);
  batman02 -= sh;
  divInfo.innerHTML += joker01 + '对' + batman01 + '造成了' + sh + '点伤害<br>';
  //蝙蝠侠信息面板更新
  divBatman.innerHTML = batman01 + '<br>';
  divBatman.innerHTML += '生命' + batman02 + '<br>';
  divBatman.innerHTML += '最大攻击' + batman03 + '<br>';
  divBatman.innerHTML += '最小攻击' + batman04 + '<br>';
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

  divBatman.innerHTML = batman01 + '<br>';
  divBatman.innerHTML += '生命' + batman02 + '<br>';
  divBatman.innerHTML += '最大攻击' + batman03 + '<br>';
  divBatman.innerHTML += '最小攻击' + batman04 + '<br>';

  divJoker.innerHTML = joker01 + '<br>';
  divJoker.innerHTML += '生命' + joker02 + '<br>';
  divJoker.innerHTML += '最大攻击' + joker03 + '<br>';
  divJoker.innerHTML += '最小攻击' + joker04 + '<br>';
});
