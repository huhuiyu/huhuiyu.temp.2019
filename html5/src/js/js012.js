console.log('执行js012.js');
let divIndex = document.getElementById('divIndex');
let divIntro = document.getElementById('divIntro');
let divCont = document.getElementById('divCont');
let divQues = document.getElementById('divQues');
let divNav = document.getElementById('divNav');

let div01 = document.getElementById('div01');
let div02 = document.getElementById('div02');
let div03 = document.getElementById('div03');
let div04 = document.getElementById('div04');

divIndex.addEventListener('click', function() {
  //js动态修改class属性的方法
  //元素.classList可以获取到元素的class属性集合
  //因为元素可以有0-n个class值，所以取回来是集合
  //通过remove(class名称)来移除指定名称的class
  divNav.classList.remove('index');
  divNav.classList.remove('intro');
  divNav.classList.remove('cont');
  divNav.classList.remove('ques');
  //通过add(class名称)来添加指定名称的class
  divNav.classList.add('index');
  //上面的代码表示移除掉divNav名称为intro的class
  //然后添加名称为index的class
  div01.classList.remove('active');
  div02.classList.remove('active');
  div03.classList.remove('active');
  div04.classList.remove('active');
  div01.classList.add('active');
});

divIntro.addEventListener('click', function() {
  divNav.classList.remove('index');
  divNav.classList.remove('intro');
  divNav.classList.remove('cont');
  divNav.classList.remove('ques');
  divNav.classList.add('intro');

  div01.classList.remove('active');
  div02.classList.remove('active');
  div03.classList.remove('active');
  div04.classList.remove('active');
  div02.classList.add('active');
});

divCont.addEventListener('click', function() {
  divNav.classList.remove('index');
  divNav.classList.remove('intro');
  divNav.classList.remove('cont');
  divNav.classList.remove('ques');
  divNav.classList.add('cont');

  div01.classList.remove('active');
  div02.classList.remove('active');
  div03.classList.remove('active');
  div04.classList.remove('active');
  div03.classList.add('active');
});

divQues.addEventListener('click', function() {
  divNav.classList.remove('index');
  divNav.classList.remove('intro');
  divNav.classList.remove('cont');
  divNav.classList.remove('ques');
  divNav.classList.add('ques');

  div01.classList.remove('active');
  div02.classList.remove('active');
  div03.classList.remove('active');
  div04.classList.remove('active');
  div04.classList.add('active');
});

//切换的逻辑就是点击谁就把所有的样式先移除
//然后再加上自己要的样式
//重点！！！classList属性可以动态添加和移除样式表
