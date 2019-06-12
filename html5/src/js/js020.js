console.log('执行js020.js');
//json是当前最常用的web数据传输格式
//主流编程语言都提供了对json的支持
//JavaScript更是可以无缝操作json
//json提供了复杂数据模型，且语法简洁
//官方网站:http://json.org/
//官方对json的描述：
//JSON(JavaScript Object Notation)
//是一种轻量级的数据交换格式。
//看一个简单的例子，用json来描述一个漫画人物信息
//比如蝙蝠侠，包含姓名，性别，昵称，
//生命值，最大伤害，最小伤害
//在以前需要六个变量来记录，那么json：
let batman = {
  name: '蝙蝠侠',
  sex: '男',
  nickname: '老爷',
  hp: 1000,
  max: 50,
  min: 15
};
//将信息显示在页面
function showBatMan() {
  let divBatman = document.getElementById('divBatman');
  //json可以描述复杂多重信息
  //通过json对象.属性名称获取指定的信息
  divBatman.innerHTML = '姓名：' + batman.name;
  divBatman.innerHTML += '<br>性别：' + batman.sex;
  divBatman.innerHTML += '<br>昵称：' + batman.nickname;
  divBatman.innerHTML += '<br>生命值：' + batman.hp;
  divBatman.innerHTML += '<br>最大攻击：' + batman.max;
  divBatman.innerHTML += '<br>最小攻击：' + batman.min;
}

showBatMan();
//json的规范
//数据是放在一对{}中
//里面是key:value格式定义json对象的属性
//例如{name:'张三'}，
//表示定义了一个json对象，拥有一个name属性，值是张三
//属性通过对象名.属性名访问，读写都可以。
//对象名称.name='李四'
//表示将对象的name属性修改为李四
//console.log(对象名称.name);表示输出对象的name属性值

let btnChange = document.getElementById('btnChange');
btnChange.addEventListener('click', function() {
  //点击按钮模拟生命值变化
  batman.hp = batman.hp - parseInt(Math.random() * 101 - 50);
  showBatMan();
});

//使用json保存用户注册信息==============
//本地储存不能保存复杂数据类型
//所以需要json和字符串相互转换
let txtName = document.getElementById('txtName');
let txtPwd = document.getElementById('txtPwd');
let txtNickname = document.getElementById('txtNickname');
let btnReg = document.getElementById('btnReg');
let btnReset = document.getElementById('btnReset');
let divReg = document.getElementById('divReg');
//json格式用户信息
let userinfo = {};
btnReset.addEventListener('click', function() {
  //直接重置json为空值
  userinfo = {};
  txtName.value = '';
  txtPwd.value = '';
  txtNickname.value = '';
  txtName.focus();
  divReg.innerHTML = '';
});

btnReg.addEventListener('click', function() {
  if (txtName.value == '') {
    divReg.innerHTML = '用户名必须填写';
    return;
  }
  if (txtPwd.value == '') {
    divReg.innerHTML = '密码必须填写';
    return;
  }
  if (txtNickname.value == '') {
    divReg.innerHTML = '昵称必须填写';
    return;
  }
  //校验完成，保存数据到本地
  //json的属性可以临时增加，不一定要定义后才能使用
  //给userinfo添加name属性，值为txtName的输入值
  userinfo.name = txtName.value;
  userinfo.password = txtPwd.value;
  userinfo.nickname = txtNickname.value;
  console.log(userinfo);
  //本地储存不能直接保存json，需要转换成字符串
  //javascript内置了JSON对象来处理转换
  //JSON.stringify方法可以将json对象转为标准格式字符串
  let strUser = JSON.stringify(userinfo);
  console.log(strUser);
  //保存信息（json格式字符串）
  localStorage.setItem('userinfo', strUser);
  divReg.innerHTML = '用户注册成功!';
});

//用户登陆======================
let loginName = document.getElementById('loginName');
let loginPwd = document.getElementById('loginPwd');
let btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', function() {
  //读取本地储存中的用户信息
  let saveuser = localStorage.getItem('userinfo');
  if (!saveuser) {
    divReg.innerHTML = '请先注册';
    return;
  }
  //转换本地储存的字符串为json格式
  //JSON.parse方法可以将json格式字符串还原为json对象
  let user = JSON.parse(saveuser);
  console.log('本地数据:', user);
  if (user.name == loginName.value && user.password == loginPwd.value) {
    alert(user.nickname + '登陆成功！');
  } else {
    alert('用户名或者密码错误，登陆失败');
  }
});

document.getElementById('btnClear').addEventListener('click', function() {
  localStorage.removeItem('userinfo');
  alert('注销成功');
});

//复合的json对象=====================
//描述一个学生对象
let student = {
  //学号
  sid: 1,
  //姓名
  name: '孙青峰',
  //性别
  sex: '男',
  //电话
  phone: '15888888888',
  //所在班级信息，也是一个json
  classInfo: {
    //班级名称
    name: '计算机1801',
    //班级创建日期
    created: '2018-08-24'
  }
};
//复合对象调用，可以通过多级名称调用
//简单的说就是，属性值也可以是json无限嵌套
console.log(student.classInfo.name,
  student.name);
