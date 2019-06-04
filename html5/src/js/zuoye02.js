console.log('执行zuoye02.js');
let reg = document.getElementById('reg');
let info = document.getElementById('info');
let txtName = document.getElementById('txtName');
let txtPwd = document.getElementById('txtPwd');
let btnReg = document.getElementById('btnReg');

let spUser = document.getElementById('spUser');
let btnExit = document.getElementById('btnExit');
//通过本地储存判断是否已经注册过
let namekey = 'savenamekey'; //姓名的本地储存键
let passwordkey = 'savepasswordkey'; //密码的本地储存键
let name;
let password;
//尝试读取本地储存中的数据
name = localStorage.getItem(namekey);
password = localStorage.getItem(passwordkey);
if (name) {
  //信息如果存在就显示info界面
  info.style.display = 'block';
  spUser.innerHTML = '欢迎：' + name;
} else {
  //不存在就显示reg界面
  reg.style.display = 'block';
}

btnReg.addEventListener('click', function() {
  if (!txtName.value) {
    alert('用户名必须填写');
    return;
  }
  if (!txtPwd.value) {
    alert('密码必须填写');
    return;
  }
  //保存信息到本地存储
  localStorage.setItem(namekey, txtName.value);
  localStorage.setItem(passwordkey, txtPwd.value);
  alert('注册成功!');
  //刷新当前页面
  location.reload();
});

btnExit.addEventListener('click', function() {
  localStorage.removeItem(namekey);
  //刷新当前页面
  location.reload();
});
