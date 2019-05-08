console.log('执行js004.js');
//知识点一
// document.getElementById('元素的id');
// 获取指定id的元素，注意！！！id不能有两个相同的
//知识点二
// 元素.textContent是获取和设置元素的文本内容
// 注意！！！如果内容包含html标记也会转换成文本显示
//  不会产生html标记的效果，例如<br>不会有换行效果
//知识点三
// 元素.innerHTML是获取和设置元素的html内容
// 和textContent的区别是，如果内容包含html标记
// 会产生html标记的效果，例如<br>不会显示，
// 而是换行效果
let div01 = document.getElementById('div01');
div01.textContent = '<h1>abc<br>123</h1>';
let div02 = document.getElementById('div02');
div02.innerHTML = '<h1>abc<br>123</h1>';
//知识点四
// 变量，用于记录信息的计算机内存中的数据
//   数据可以在运行时根据需求或者状态而变化，所以叫变量
//   计算机需要严格区分变量的类型来记录不同的数据
//   比如记录可以计算的数值，或者可以描述内容的字符串
//   数值表现为1，0.1这样的
//   字符串要界定在单引号或者双引号中
//   例如：'蜘蛛侠',"计算机软件开发"
// 由于javascript语言的特殊性，变量也可以是页面元素
// 变量声明格式 let 变量名称=变量值;
//   例如:let name='钢铁侠';
//        let age=48;
// 变量名称必须是_或者字母开头，
// 不能是全数字,不能有特殊符号
let xingming = '胡辉煜'; //字符类型
let xingbie = '男'; //字符类型
let yuexin = 12345.67; //数值，小数
let nianling = 44; //数值，整数
let div03 = document.getElementById('div03'); //页面元素
//拼接(+)变量信息并放置到div03元素中
div03.textContent = '姓名：' + xingming + '性别：' + xingbie + '月薪：' + yuexin + '年龄：' + nianling;

//知识点五，parseInt：转换数据为整数
// 例如:let intv=parseInt('123');
//      let v001=parseInt(12.345);
// 参数可以是任意类型，但是不保证一定能转换成功
//   let inte=parseInt('灭霸');
let v001 = parseInt('123'); //内容是整数的字符串
let v002 = parseInt('456.78'); //内容是小数的字符串
let v003 = parseInt(456.789); //小数数值
let v004 = parseInt('蜘蛛侠'); //内容不是数的字符串
//如果不能转换，结果是NaN，意思是Not a Number(不是数)
let div04 = document.getElementById('div04');
div04.textContent = 'v001：' + v001 + ',v002：' + v002 + ',v003：' + v003 + ',v004：' + v004;
//知识点六 Math.random() 生成随机0-1之间的小数
//  区间随机数公式Math.random()*(上界-下届+1)+下届
//  注意！！！由于是随机小数，需要将结果转换成整数
let div05 = document.getElementById('div05');
//显示10个1-6之间的随机数
div05.innerHTML = div05.innerHTML + parseInt(Math.random() * 6 + 1) + '<br>';

for (let i = 0; i < 5; i++) {
  div05.innerHTML = div05.innerHTML + parseInt(Math.random() * 6 + 1) + '<br>';
}
