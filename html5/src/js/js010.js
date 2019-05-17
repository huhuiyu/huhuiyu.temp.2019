console.log('执行js010.js');
//获取页面元素============================
let txtAge = document.getElementById('txtAge');
let btnOk = document.getElementById('btnOk');
let divInfo = document.getElementById('divInfo');
//事件处理
btnOk.addEventListener('click', function() {
  divInfo.innerHTML = '';
  //读取年龄值
  let age = txtAge.value;
  //isNaN是判断参数是否不是数
  //如果不是数返回的true，否则是false
  //if是流程判断，如果的意思
  //格式是 if(逻辑表达式的true/false){
  //    如果表达式为true就会执行大括号里面的代码
  //    否则跳过
  //   return关键字是强制中断所在function的执行
  //}
  if (isNaN(age)) {
    divInfo.innerHTML = '输入的不是数！';
    return;
  }
  //转换成数(上面已经判断过是否为数，所以转换肯定成功)
  age = parseFloat(age);
  console.log(age);
  //<=就是小于或者等于都为true
  if (age <= 0) {
    divInfo.innerHTML = '年龄不能小于或者等于0';
    return;
  }
  if (age >= 200) {
    divInfo.innerHTML = '年龄不能大于或者等于200';
    return;
  }
  divInfo.innerHTML = '你输入的年龄是：' + age;
});

//整数判断
let btnInt = document.getElementById('btnInt');

btnInt.addEventListener('click', function() {
  let age = txtAge.value;
  if (isNaN(age)) {
    return;
  }
  //转换成整数
  let ageInt = parseInt(age);
  //转成数
  let ageFloat = parseFloat(age);
  console.log(ageInt, ageFloat);
  // != 是不等于
  if (ageInt == ageFloat) {
    divInfo.innerHTML = '输入的' + age + '是整数。';
    return;
  }
  divInfo.innerHTML = '输入的' + age + '是小数。';
});

//练习作业1级，
//两个文本框，一个确定按钮
//确定点击效果为，两个框都必须是整数
//否则提示输入错误
//2级，第一个框的数要小于第二个框的数
//3级，生成第一个数和第二个数之间的随机数
