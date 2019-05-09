console.log('执行js005.js');
//变量来源于表单元素
let divInfo = document.getElementById('divInfo');
//txtName是表单元素（文本输入框）
let txtName = document.getElementById('txtName');
//表单元素特有的属性value,表示获取或者设置元素的输入值
//写在等号的右边表示设置值
txtName.value = '请输入姓名';
//表单元素特有方法focus，表示让表单元素获得焦点
//也就是输入状态
txtName.focus();
//=======================================
let btnOk = document.getElementById('btnOk');
//用户名
let username;
//密码
let password;
let txtPwd = document.getElementById('txtPwd');
btnOk.addEventListener('click', function() {
  //value写在等号右边，表示获取输入值
  //也就是username就是文本框txtName输入的值
  username = txtName.value;
  //只要是表单元素都可以获取值(不管是否能看见)
  password = txtPwd.value;
  console.log(username, password);
  divInfo.innerHTML = '你输入的用户名是：' + username + '<br>密码：' + password;
});
//重置按钮
let btnClear = document.getElementById('btnClear');
btnClear.addEventListener('click', function() {
  txtName.value = '';
  txtPwd.value = '';
  txtName.focus();
});
