console.log('执行js023.js');
let txtName = document.getElementById('txtName');
let txtCount = document.getElementById('txtCount');
let btnStart = document.getElementById('btnStart');
let div01 = document.getElementById('div01');

btnStart.addEventListener('click', function() {
  div01.innerHTML = '';
  //获取并校验输入的数据
  let name = txtName.value;
  let count = txtCount.value;
  //name必须输入
  if (name.length <= 0) {
    div01.innerHTML = '请输入姓名';
    txtName.focus();
    return;
  }
  //count必须是1-100直接的数
  if (count.length <= 0 || isNaN(count)) {
    div01.innerHTML = '次数必须输入且是数';
    txtCount.focus();
    return;
  }
  count = parseInt(count);
  if (count < 1 || count > 100) {
    div01.innerHTML = '次数必须是1-100';
    txtCount.focus();
    return;
  }
  console.log(name, count);
  //循环显示！！！！
  //for是js循环语句
  //格式：
  //for(初始化动作;
  //    循环是否继续执行逻辑表达式;
  //    每次循环后执行一次的代码;)
  //下面的代码表示
  //首先执行let i=1;申明一个i变量，值为1
  //然后进入i<=count的逻辑判断，如果为true，进入循环代码
  //循环代码执行完毕后进入i=i+1;修改i的值+1，
  //然后再次进入逻辑判断，一直反复到逻辑判断为false
  //如果逻辑判断为false就退出循环
  for (let i = 1; i <= count; i = i + 1) {
    div01.innerHTML += '第' + i + '次欢迎：' + name + '<br>';
  }
  //for的流程解释
  //假如用户输入的name是黄一洋,count是5
  //首先执行的是初始化动作：let i=1;让i的值为1
  //然后进入逻辑判断动作,i<=count;i是1,count是5
  //表达式为true，执行for{}里面的代码，div01内容修改
  //然后进入第三部分，i=i+1;i的值变成2
  //然后重复逻辑判断动作，i<=count;2<5为true
  //执行for里面的代码...
  //一直到i的值变成6，i<=count为false才能中断循环
});

//通过数组循环显示数据
let names = ['何鹏希', '罗霖杰', '苏文希', '陈子鹏'];
let div02 = document.getElementById('div02');
//数组拥有length长度，且能通过下标访问
//所以可以和for循环完美配合！！！
//由于数组下标是从0开始的，所以程序猿养成了0开始计数的习惯
for (let m = 0; m < names.length; m++) {
  let name = names[m];
  div02.innerHTML += '<hr><h1>欢迎：' + name + '</h1>';
}
