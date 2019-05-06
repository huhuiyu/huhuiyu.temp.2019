console.log('开始执行js002.js');
//声明变量（就是可以在运行时变化的数据）
//1：let（新版本方式，建议使用方式）
//2：var（兼容性更好的原始版本）
//声明一个变量xingming，值是皮皮鹿
//单引号或者双引号里面是字符串数据
let xingming = '皮皮鹿';
//age的值是17（数不用放在引号中）
var age = 17;
//直接使用变量名称获取对应的值
console.log(xingming, age);
//变量的值可以随时根据需要修改,通过变量名=新值即可修改
xingming = '老年皮皮鹿';
age = 38;
console.log(xingming, age);
//将变量数据放置到页面中
//变量也可以是页面元素
let info01 = document.getElementById('info01');
console.log(info01);
//修改元素里面的html内容
//(和文本内容的区别是可以接受html标记效果)
info01.innerHTML = '姓名：' + xingming + '<br>年龄：' + age;
let info02 = document.getElementById('info02');
//对照效果（修改文本内容）
info02.textContent = '姓名：' + xingming + '<br>年龄：' + age;
//(伪)随机数,Math.random()会产生0-1之间的随机小数
let rand = Math.random();
console.log('随机数：', rand);
//通过按钮点击切换随机数
let btnRand = document.getElementById('btnRand');
let spRand01 = document.getElementById('spRand01');
let spRand02 = document.getElementById('spRand02');
//按钮点击事件
btnRand.addEventListener('click', function() {
  //让rand的值修改为新的随机数
  rand = Math.random();
  //显示到spRand01中
  spRand01.textContent = rand;
  //区间内随机整数
  //Math.random()*(上界-下界+1)+下界
  //比如两个骰子是2-12,2是下届，12是上界
  // Math.random() *(12-2+1)+2
  //三个骰子
  //Math.random() *(18-3+1)+3
  rand = Math.random() * (18 - 3 + 1) + 3;
  //parseInt是将数据转换成整数
  //注意！！！！！，在计算机语言里面=号是赋值
  //不是测试是否相等，所以可以出现x=x+1;
  //表示x的值是原来x的值+1的结果
  rand = parseInt(rand);
  spRand02.textContent = rand;
});
