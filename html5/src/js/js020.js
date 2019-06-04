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
