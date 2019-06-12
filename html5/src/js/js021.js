console.log('执行js021.js');
//json是复合数据，而数组是一组数据
//最简单的数组声明方式：[数组值1，数组值2...]
//一般情况下数组中的值都是同一个类型的
let names = ['冯暄', '何鹏希', '黑暗骑士'];
//数组的常用属性和数据访问方式
// 1:获取长度(也就是获取数组中存放的数据数量)
console.log('数组中的数据数量：', names.length);
// 2:数组的特色，通过下标快速访问其中的某一项数据
//   下标是从0开始，到数组长度(length)-1
// 所以访问第二个数据要用下标1
console.log('数组中的第二个数据是：', names[1]);
//js通过css选择器表达式获取页面数据！！！！
//querySelectorAll('css选择器表达式')
//表示获取css选择器表达式对应的元素
//由于css选择器能作用到多个元素，所以该方法返回的是一组元素
//而不再是单一元素！！！而数组恰好是一组数据
let spans = document.querySelectorAll('#divSpans span');
console.log('#divSpans span选择器作用的元素数量：', spans.length);
//通过该方法获取是页面元素，所以数组中的每一个数据都是元素
//而不是简单的数据
let span2 = spans[1];
//获取到的是第二个span元素
console.log(span2);
span2.innerHTML = '可以通过代码修改内容';
//数组和json的组合(这两个可以组合成任意复杂的数据机构)
//描述一组超级英雄信息
let heros = [{ name: '蝙蝠侠', hp: 1000, max: 50, min: 15 }, { name: '小丑', hp: 500, max: 100, min: 30 }];

let divHeros = document.getElementById('divHeros');
//获取第一个英雄的信息（json格式）
let h1 = heros[0];
divHeros.innerHTML = h1.name + '的信息：<br>';
divHeros.innerHTML += '生命：' + h1.hp + '<br>';
divHeros.innerHTML += '最大伤害：' + h1.max + '<br>';
divHeros.innerHTML += '最小伤害' + h1.min + '<br>';
//作业一：将第二个英雄的信息也添加到divHeros中
//总结：数组的基本概念，简单的讲就是一组相同的数据
//最简单的定义方式：[数组值1, ...]
//数组可以通过length获得数组值的总数量（可以是0，表示没有数据）
//数组值是通过0到length-1的下标访问，0是第一个数据
//总结2：
//document.querySelectorAll('css选择器')
//方法是通过css选择器表达式来获取一组页面元素
//例如document.querySelectorAll('div')
//表示获取页面上的所有div元素
//document.querySelectorAll('#mydiv > p');
//表示获取页面上id为mydiv的元素里面第一级p元素
//总之就是css表达式对应的元素
//作业二：描述班上的学生信息（数组+json）
//作业三：描述班级信息，包括班级名称，班级创建年份，和学生信息（数组）
