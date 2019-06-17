let animates = [
  'bounce',
  'flash',
  'pulse',
  'rubberBand',
  'shake',
  'headShake',
  'swing',
  'tada',
  'wobble',
  'jello',
  'bounceIn',
  'bounceInDown',
  'bounceInLeft',
  'bounceInRight',
  'bounceInUp',
  'bounceOut',
  'bounceOutDown',
  'bounceOutLeft',
  'bounceOutRight',
  'bounceOutUp',
  'fadeIn',
  'fadeInDown',
  'fadeInDownBig',
  'fadeInLeft',
  'fadeInLeftBig',
  'fadeInRight',
  'fadeInRightBig',
  'fadeInUp',
  'fadeInUpBig',
  'fadeOut',
  'fadeOutDown',
  'fadeOutDownBig',
  'fadeOutLeft',
  'fadeOutLeftBig',
  'fadeOutRight',
  'fadeOutRightBig',
  'fadeOutUp',
  'fadeOutUpBig',
  'flipInX',
  'flipInY',
  'flipOutX',
  'flipOutY',
  'lightSpeedIn',
  'lightSpeedOut',
  'rotateIn',
  'rotateInDownLeft',
  'rotateInDownRight',
  'rotateInUpLeft',
  'rotateInUpRight',
  'rotateOut',
  'rotateOutDownLeft',
  'rotateOutDownRight',
  'rotateOutUpLeft',
  'rotateOutUpRight',
  'hinge',
  'jackInTheBox',
  'rollIn',
  'rollOut',
  'zoomIn',
  'zoomInDown',
  'zoomInLeft',
  'zoomInRight',
  'zoomInUp',
  'zoomOut',
  'zoomOutDown',
  'zoomOutLeft',
  'zoomOutRight',
  'zoomOutUp',
  'slideInDown',
  'slideInLeft',
  'slideInRight',
  'slideInUp',
  'slideOutDown',
  'slideOutLeft',
  'slideOutRight',
  'slideOutUp'
];

let divShow = document.getElementById('divShow');
let divButtons = document.getElementById('divButtons');

//循环生成按钮
for (let i = 0; i < animates.length; i++) {
  //动态创建html元素！！！！
  //document.createElement('元素标记名称')
  //可以动态创建元素标记名称对应的元素！！！
  //document.createElement('span')
  //是创建一个span元素，等同于页面<span></span>
  let spButton = document.createElement('span');
  //创建的元素和页面上编写的功能是一模一样
  spButton.innerHTML = animates[i];
  //将创建的元素添加到指定位置
  //元素.appendChild(子元素)，表示将子元素添加到元素中
  divButtons.appendChild(spButton);
  //动态创建的元素也可以绑定事件！！！！
  spButton.addEventListener('click', function() {
    divShow.setAttribute('class', '');
    divShow.classList.add('animated', 'infinite', animates[i]);
    divShow.innerHTML = animates[i] + '的效果';
  });
}

//总结！
//js可以动态创建任意html元素并且添加到页面上
//(其实也可以移除获取替换任意页面元素)
//document.createElement方法用于创建页面元素
//方法参数是页面元素的标签名，例如span,br,div...
//该方法也可以创建功能标签，例如link,script
//这些元素会影响页面的样式和功能
//比如有的网站支持换肤，就是通过替换link css标签做到的
//通过for循环可以快速的创建页面元素
//动态创建的元素和html定义的元素没有任何的功能差别！
//通过元素.appendChild(子元素)方法
//可以将子元素动态的加入到元素中
//上面两方法组合起来可以任意追加html的内容!!!!
//作业1
//给一个文本框，一个按钮，一个div
//点击按钮后，将文本框里面输入的元素名称创建出来
//追加到div中，如果输入的元素名称是需要文本才能显示的
//那么都显示文本为动态追加的内容
//例如文本框中输入的div，点击按钮后，演示的div中
//会追加一个div，内容为动态追加的内容
//例如文本框中输入的span，点击按钮后，演示的div中
//会追加一个span，内容为动态追加的内容
//例如文本框中输入的br，点击按钮后，演示的div中
//会追加一个br标签