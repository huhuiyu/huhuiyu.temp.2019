console.log('执行js006.js');
//界面元素
//用户名输入框
let txtName = document.getElementById('txtName');
//密码输入框
let txtPwd = document.getElementById('txtPwd');
//学历的下拉选项
let selXueli = document.getElementById('selXueli');
//注册按钮
let btnReg = document.getElementById('btnReg');
//重置按钮
let btnReset = document.getElementById('btnReset');
//用于显示信息的div
let divInfo = document.getElementById('divInfo');

//初始化焦点到txtName
txtName.focus();

//重置按钮单击事件
btnReset.addEventListener('click', function() {
  //清除文本框内容
  txtName.value = '';
  txtPwd.value = '';
  //下拉选项是将select的值设置成某一个option的value
  selXueli.value = '-1';
  //清除divInfo中的信息
  divInfo.innerHTML = '';
  //焦点回到txtName
  txtName.focus();
});

//注册按钮单击事件
btnReg.addEventListener('click', function() {
  //获取注册的信息
  let name = txtName.value;
  let pwd = txtPwd.value;
  let xueli = selXueli.value;
  //显示到divInfo中
  divInfo.innerHTML = '输入的信息：<br>姓名：' + name + '<br>密码：' + pwd + '<br>学历：' + xueli;
});
