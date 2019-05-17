console.log('执行js009.js');
let a = 10;
let b = 5;
let result;
//数学运算符
console.log(a + b); //加法
console.log(a - b); //减法
console.log(a * b); //乘法
console.log(a / b); //除法
//注意，只有加法可以不是数，支持字符串，结果是拼接
console.log('字符' + a + b);
//取模运算(余商)
console.log(99 % 4);
console.log(3 % 8);
//简写运算符
a = a + 1;
console.log('=================');
console.log(a);
a += 1; // a=a+b;可以简写成a+=b,加减乘除都可以
console.log(a);
//自增1可以简写成a++就是a=a+1，自减1可以写成a--;
a++;
console.log(a);
//========================================
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let btnMath = document.getElementById('btnMath');
let divResult = document.getElementById('divResult');

//点击按钮计算
btnMath.addEventListener('click', function() {
  //获取输入框的值是value属性
  //parseFloat是将数据尝试转换成数值
  //如果数据不能转换成数值返回是NaN
  let x = parseFloat(num1.value);
  let y = parseFloat(num2.value);
  divResult.innerHTML = divResult.innerHTML + (x + y) + '<br>';
  //简写+运算
  divResult.innerHTML += x - y + '<br>';
  divResult.innerHTML += x * y + '<br>';
  divResult.innerHTML += x / y + '<br>';
  divResult.innerHTML += (x % y) + '<br>';
});

//逻辑运算符(结果只有真和假(true/false)两种)
//用于流程判断
let logic;
console.log('逻辑======================');
//>大于
console.log(10 > 5); //true
console.log(6 > 7); //false
console.log(6 > 6); //false
//<小于
console.log(10 < 5); //false
console.log(6 < 7); //true
console.log(6 < 6); //false
//==相等测试
console.log(10 == 5); //false
console.log(6 == 7); //false
console.log(6 == 6); //true

let btnLogic = document.getElementById('btnLogic');
let divLogic = document.getElementById('divLogic');

btnLogic.addEventListener('click', function() {
  let w = parseFloat(num1.value);
  let z = parseFloat(num2.value);
  divLogic.innerHTML += w + '是否大于' + z + ':' + (w > z) + '<br>';
  divLogic.innerHTML += w + '是否小于' + z + ':' + (w < z) + '<br>';
  divLogic.innerHTML += w + '是否等于' + z + ':' + (w == z) + '<br>';
});

//总结
//数值运算符加减乘除取模+,-,*,/,%
//逻辑运算大于，小于，等于>,<,==
//注意点：
//1：加法运算是可以用于字符操作，但是结果是拼接
// 例如1+1结果是2，但是'1'+1的结果11
//2：逻辑运算的结果只有两种，true，false
//3：等值判断是两个等于号！！！！！
// 1+1+'1'+1+1
