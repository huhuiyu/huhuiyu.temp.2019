console.log('执行js015.js');
//输入年月，判断当月有多少天
//例如输入2000 2，结果29（闰年2月）
//2015 9，结果30
let txtYear = document.getElementById('txtYear');
let txtMonth = document.getElementById('txtMonth');
let btnOk = document.getElementById('btnOk');
let divInfo = document.getElementById('divInfo');

btnOk.addEventListener('click', function() {
  //错误样式
  txtYear.classList.remove('error');
  txtMonth.classList.remove('error');

  let year = txtYear.value;
  let month = txtMonth.value;
  //需要对输入做检测================
  if (isNaN(year)) {
    divInfo.innerHTML = '年份必须是数';
    txtYear.classList.add('error');
    txtYear.focus();
    return;
  }
  let fyear = parseFloat(year);
  year = parseInt(year);
  if (fyear != year) {
    divInfo.innerHTML = '年份必须是整数';
    txtYear.classList.add('error');
    txtYear.focus();
    return;
  }
  if (year < 1900 || year > 3000) {
    divInfo.innerHTML = '年份在1900-3000之间';
    txtYear.classList.add('error');
    txtYear.focus();
    return;
  }
  //========================================
  if (isNaN(month)) {
    divInfo.innerHTML = '月份必须是数';
    return;
  }
  let fmonth = parseFloat(month);
  month = parseInt(month);
  if (fmonth != month) {
    divInfo.innerHTML = '月份必须是整数';
    return;
  }
  if (month < 1 || month > 12) {
    divInfo.innerHTML = '月份必须是1-12之间';
    return;
  }
  //计算日期逻辑
  let day; //天数
  //闰年判断 ! && || not and or
  let run = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
  if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    //1,3,5,7,8,10,12月是31;
    day = 31;
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    day = 30;
  } else if (run && month == 2) {
    day = 29;
  } else {
    day = 28; //如果上面的都不成立就是非闰年2月
  }
  divInfo.innerHTML = year + '年' + month + '月有' + day + '天';
});
/*
  if结构完整总结！！！
  if(逻辑表达式){
    //逻辑表达式为true时要执行的代码
  }else if(逻辑表达1) {
    //逻辑表达1为true时要执行的代码
  }
  ...[可以有多个else if形成逻辑判断阶梯]
  else {
    //上面所有逻辑表达式都为false时要执行的代码
  }
  //注意！！！！！！！
  //1，除了第一个if是必须的，其它都可以根据情况省略
  //2，如果出现阶梯，那么要注意，只要任何一个阶梯
  // 判断为true，后面的阶梯表达式都不会进入
  //例如 if(m==1){ 1的代码 }
  //     else if(m==2) { 2的代码 }
  //     else if(m==3) { 3的代码 }
  //     else{ 其它的代码 }
  // 如果m是1，2，3，其它都不会执行
  //     m是2，1，3，其它都不会执行
  // else要阶梯表达式都为false才会进入
 */
