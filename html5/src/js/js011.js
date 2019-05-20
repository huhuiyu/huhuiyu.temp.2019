console.log('执行js011.js');
//页面元素
let input01 = document.getElementById('input01');
let txtName = document.getElementById('txtName');
let err01 = document.getElementById('err01');
let btnOk = document.getElementById('btnOk');

let err02 = document.getElementById('err02');
let err03 = document.getElementById('err03');
let err04 = document.getElementById('err04');
let txtPwd = document.getElementById('txtPwd');

//初始化错误信息状态(将display样式设置成none就不显示)
err01.style.display = 'none';
//确定按钮单击事件
btnOk.addEventListener('click', function() {
  //先清除错误信息
  err01.style.display = 'none';
  err02.style.display = 'none';
  err03.style.display = 'none';
  err04.style.display = 'none';
  //校验输入的用户名
  let name = txtName.value;
  //获取字符串长度(length属性)
  //||是逻辑或，表示前面的逻辑表达式和后面的逻辑表达式
  //只要一个为true，结果就是true
  if (name.length < 6 || name.length > 18) {
    //让错误提示出现
    err01.style.display = 'block';
    //焦点回到文本框上
    txtName.focus();
    return;
  }
  //密码相关校验
  let pwd = txtPwd.value;
  //必须填写校验
  if (pwd == '') {
    //注意！！！span是非块级元素，显示是inline
    err02.style.display = 'inline';
    txtPwd.focus();
    return;
  }
  if (pwd.length < 6) {
    err03.style.display = 'inline';
    txtPwd.focus();
    return;
  }
  if (pwd.length > 12) {
    err04.style.display = 'inline';
    txtPwd.focus();
    return;
  }
  //alert是弹出对话框
  //（慎用！非常的不友好！如果用户不处理，
  //后面代码不会执行，且不会响应其它操作）
  //参数是要弹出显示的信息
  alert('用户名：' + name + ',密码：' + pwd);
});

//作业1
//编写虚拟用户登陆界面
//需要输入用户名和密码
//用户名必须输入且长度是6-10位
//密码必须输入且长度是8-16位
//所有校验错误都显示在一个div中
//校验错误的时候将焦点回到错误的输入框中
//级别2
//用户名的错误信息出现在用户名输入框的后面（同一行）
//密码的错误信息出现在密码的输入框后面（同一行）
//级别3
//完成级别2，但是要求错误提示信息不影响排版
// 也就是页面其它元素不会因为出现错误信息而移动位置
