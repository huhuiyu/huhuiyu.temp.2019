console.log('执行js007.js');
//页面元素
let divStyle = document.getElementById('divStyle');
let btnStyle = document.getElementById('btnStyle');
//按钮单击事件
btnStyle.addEventListener('click', function() {
  //js获取和设置元素的属性：style
  //style属性可以获取到所有设置的样式值
  console.log(divStyle.style);
  //也可以直接获取指定的样式值
  console.log(divStyle.style.color);
  //如果样式名称带有减号，需要转换成驼峰表达式
  //也就是去掉减号，将减号后面的第一个字母转大写
  console.log(divStyle.style.backgroundColor);
  //修改样式值（通过随机数生成颜色）
  let r = parseInt(Math.random() * 255); //红色
  let g = parseInt(Math.random() * 255); //绿色
  let b = parseInt(Math.random() * 255); //蓝色
  divStyle.style.color = 'rgb(123,123,0)';
  divStyle.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
  divStyle.style.backgroundColor = 'rgb(255,255,255)';
});

//修改body的背景图片
let btnImage = document.getElementById('btnImage');

btnImage.addEventListener('click', function() {
  //body比较特殊，可以直接获取到
  document.body.style.backgroundImage = 'url("images/bg0002.png")';
});

let btnImage1 = document.getElementById('btnImage1');

btnImage1.addEventListener('click', function() {
  //body比较特殊，可以直接获取到
  document.body.style.backgroundImage = 'url("images/bg0001.png")';
});

/*
js可以控制style的值
任何页面元素都有style属性，
该属性可以获取或者设置元素样式
通过style.具体样式名称来控制具体的属性值
例如 元素.style.color='#ff0000'来修改元素的字体颜色
元素.style.width='100px'来修改元素的宽度
需要注意！！！样式的名称如果带有减号需要转换成驼峰表达式
反过来也需要转换
例如，要设置font-size样式
需要写成 元素.style.fontSize=....
同理 元素.style.backgroundImage是设置background-image
样式名称的减号要去掉，然后将减号后的字母转大写
反过来就是将大写字母转小写前面补减号
 */
