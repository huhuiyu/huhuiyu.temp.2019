console.log('=====>执行zy001.js<=====');
//页面元素
let txtNum1 = document.getElementById('txtNum1');
let txtNum2 = document.getElementById('txtNum2');
let btnRand = document.getElementById('btnRand');
let divInfo = document.getElementById('divInfo');
//按钮点击事件
btnRand.addEventListener('click', function() {
  //清除原有的信息
  divInfo.innerHTML = '';
  //获取数据
  let num1 = txtNum1.value;
  let num2 = txtNum2.value;
  //校验第一个数
  if (isNaN(num1)) {
    divInfo.innerHTML = '第一个输入的不是数！';
    return;
  }
  //校验第一个是否为整数
  let num1int = parseInt(num1);
  let num1float = parseFloat(num1);
  //如果转换整数的结果不等于转换小数的结果，就不是整数
  //!=是不等于的逻辑判断 !在计算机里面是not
  if (num1int != num1float) {
    divInfo.innerHTML = '第一个输入的不是整数';
    return;
  }
  //校验第二个数
  if (isNaN(num2)) {
    divInfo.innerHTML = '第二个输入的不是数';
    return;
  }
  let num2int = parseInt(num2);
  let num2float = parseFloat(num2);
  if (num2int != num2float) {
    divInfo.innerHTML = '第二个输入的不是整数';
    return;
  }
  //判断数值大小,第二个数必须大于第一个数
  if (num1int >= num2int) {
    divInfo.innerHTML = '第二个数必须大于第一个数';
    return;
  }
  //范围随机数(随机*(上界-下届+1)+下界)
  let rand = parseInt(Math.random() * (num2int - num1int + 1) + num1int);
  divInfo.innerHTML = '随机数：' + rand;
});
