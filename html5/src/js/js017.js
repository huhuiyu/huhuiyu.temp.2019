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
