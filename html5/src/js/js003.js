console.log('执行js003.js');
/**
 * 英雄一信息
 */
var yx01sm = 1000; //生命值
var yx01xm = '蝙蝠侠'; //姓名
var yx01zdgj = 50; //最大攻击
var yx01zxgj = 15; //最小攻击
/**
 * 英雄二信息
 */
var yx02sm = 500; //生命值
var yx02xm = '小丑'; //姓名
var yx02zdgj = 100; //最大攻击
var yx02zxgj = 30; //最小攻击
//信息面板
var yx01 = document.getElementById('yx01');
var yx02 = document.getElementById('yx02');
//通过变量值显示信息
yx01.innerHTML = yx01xm + '<br>生命值：' + yx01sm + '<br>最小攻击：' + yx01zxgj + '<br>最大攻击：' + yx01zdgj;
yx02.innerHTML = yx02xm + '<br>生命值：' + yx02sm + '<br>最小攻击：' + yx02zxgj + '<br>最大攻击：' + yx02zdgj;
//攻击信息处理
var btnStart = document.getElementById('btnStart');
var divInfo = document.getElementById('divInfo');
var count = 0; //攻击计数器
var sh = 0; //攻击伤害值

btnStart.addEventListener('click', function() {
  //攻击次数显示
  count = count + 1;
  divInfo.innerHTML = divInfo.innerHTML + '第' + count + '次攻击<br>';
  //英雄一攻击(随机攻击值，范围在最大值和最小值之间)
  sh = parseInt(Math.random() * (yx01zdgj - yx01zxgj + 1) + yx01zxgj);
  yx02sm = yx02sm - sh; //英雄二受到伤害，生命值减少
  divInfo.innerHTML = divInfo.innerHTML + yx01xm + '对' + yx02xm + '造成了' + sh + '点伤害<br>';

  //更新英雄二信息面板
  yx02.innerHTML = yx02xm + '<br>生命值：' + yx02sm + '<br>最小攻击：' + yx02zxgj + '<br>最大攻击：' + yx02zdgj;
  //英雄二攻击
  sh = parseInt(Math.random() * (yx02zdgj - yx02zxgj + 1) + yx02zxgj);
  yx01sm = yx01sm - sh; //英雄一受到伤害
  divInfo.innerHTML = divInfo.innerHTML + yx02xm + '对' + yx01xm + '造成了' + sh + '点伤害<br>';
  //更新英雄一信息面板
  yx01.innerHTML = yx01xm + '<br>生命值：' + yx01sm + '<br>最小攻击：' + yx01zxgj + '<br>最大攻击：' + yx01zdgj;
});
