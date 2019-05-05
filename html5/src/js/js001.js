// 单行注释
// console.log是在浏览器的控制台(console)中显示信息
// 参数是要显示的信息
console.log('执行js001.js');

/*
多行注释
document.getElementById方法表示获取页面中对应id的元素
const表示声明常量,spInfo是常量名称,=表示赋值
下面一行代码的意思表示
声明一个常量叫spInfo，值为页面id为spInfo的元素
*/
const spInfo = document.getElementById('spInfo');
console.log(spInfo);

/*
  元素.addEventListener表示给元素添加事件处理
  第一个参数是事件名称(click表示单击事件)，
  第二个参数是事件触发后要执行的function代码
 */
spInfo.addEventListener('click', function() {
  console.log('点击元素执行。。。');
  //prompt是提示用户输入的弹出式输入框
  //参数是提示用户输入的内容
  //let是变量声明，后面是变量名称，=号是赋值
  //下面的代码意思为：
  //声明一个叫name的变量，值是弹出输入框中的输入值
  let name = prompt('请输入您的姓名：');
  //元素.textContent是获取或者设置元素的文本内容
  //下面的代码表示将spInfo的内容设置成欢迎：加上name的值
  spInfo.textContent = '欢迎：' + name;
});

console.log('js001.js结束');
