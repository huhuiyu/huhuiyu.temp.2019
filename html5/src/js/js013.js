console.log('执行js013.js====>');
//闰年===========
let txtYear = document.getElementById('txtYear');
let btnYear = document.getElementById('btnYear');
let divYear = document.getElementById('divYear');

btnYear.addEventListener('click', function() {
  //初始化信息提示
  divYear.innerHTML = '';
  divYear.classList.remove('error');
  //基础校验
  let year = txtYear.value;
  if (year.length == 0 || isNaN(year)) {
    divYear.innerHTML = '输入的不是数';
    divYear.classList.add('error');
    txtYear.focus();
    return;
  }
  let iyear = parseInt(year);
  let fyear = parseFloat(year);
  //!加在逻辑表达式前面就是取反(not)
  if (!(iyear == fyear)) {
    divYear.innerHTML = '输入的不是整数';
    divYear.classList.add('error');
    txtYear.focus();
    return;
  }
  //年份必须在1900-3000之间
  if (iyear < 1900 || iyear > 3000) {
    divYear.innerHTML = '必须是1900-3000';
    divYear.classList.add('error');
    txtYear.focus();
    return;
  }
  //闰年判断（能被400整除或者能被4整除但不能被100整除）
  if (iyear % 400 == 0 || (iyear % 4 == 0 && iyear % 100 != 0)) {
    divYear.innerHTML = year + '是闰年';
  } else {
    divYear.innerHTML = year + '不是闰年';
  }
  //if-else流程
  //if(逻辑表达式){ 逻辑为true执行的代码 }
  //else{ //逻辑为false执行代码 }
  //也就表示不管逻辑表达式结果为什么
  //必然会有代码被执行，用于逻辑不同会有不同
  //的运行效果的时候
});
//模拟用户登陆效果
let txtName = document.getElementById('txtName');
let txtPwd = document.getElementById('txtPwd');
let btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', function() {
  let name = txtName.value;
  let pwd = txtPwd.value;
  //用户名是pipilu且密码是250250就登陆成功
  if ('pipilu' == name && '250250' == pwd) {
    alert('欢迎管理员登陆！');
  } else {
    alert('用户名或者密码错误，登陆失败！');
  }
});
//逻辑表达式总结
// == 等值判断
// != 不等判断
// > >= 大于和大于等于
// < <= 小于和小于等于
// 联合逻辑表达式 not and or
//  ! 逻辑取反
//  && 逻辑与 前后表达式都要为true才是true
//  || 逻辑或 前后表达式只要一个为true就是true
//流程判断
//第一种，单一if
//if(逻辑表达式){ 如果表达式为true要执行的代码 }
//注意！！！单一if在逻辑表达式为false时不会执行动作
//第二种，if-else结构
//if(逻辑表达式){ 如果表达式为true要执行的代码}
//else{ 如果表达式为false要执行的代码 }
//if-else适合逻辑不论true，false都会有动作的情况