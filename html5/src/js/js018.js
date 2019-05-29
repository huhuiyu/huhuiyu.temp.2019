console.log('执行js018.js');
//显示时间
let divTime = document.getElementById('divTime');

//function代码块定义
//如果有重复的代码块需要多个地方使用
//可以将代码块定义在function中
//需要使用的时候，通过function名称召唤
//格式 function 名称(){ //代码 }
function showTime() {
  //获取当前时间
  let now = new Date();
  let year = now.getFullYear(); //年
  let month = now.getMonth() + 1; //月
  let day = now.getDate(); //日
  let hour = now.getHours(); //时
  let minute = now.getMinutes(); //分
  let second = now.getSeconds(); //秒
  divTime.innerHTML = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second;
}

//更新时间
//setInterval是定时任务
//第一个参数是定时执行的function（代码）
//第二个参数是时间间隔（毫秒值）
setInterval(function() {
  //通过名称召唤代码
  showTime();
}, 1000);

showTime();

//用户登陆========================
//定义重置表单的动作，重置到初始化的状态
//也就是重置和初始化是一样，所以定义function
function reset() {
  let txtName = document.getElementById('txtName');
  let txtPwd = document.getElementById('txtPwd');
  txtName.value = 'admin';
  txtPwd.value = '';
  txtPwd.focus();
}

reset();

let btnReset = document.getElementById('btnReset');
btnReset.addEventListener('click', function() {
  reset();
});

//总结
//function格式：
//function 名称(){
//代码块
//}
//作用是将名称和代码块做一个绑定
//调用方式:
//名称();
//效果是执行名称对应的代码块
//function最大的优点就是相同的代码逻辑封装起来
//方便反复调用，避免的大量相同的代码反复复制
//而且修改起来也更加方便

//作业1，将蝙蝠侠大战小丑改版成function
//  相同的代码不在反复出现
//作业2，将时间显示格式前导补零
//   且：如果时间是0-12点，要显示上午
//          时间是13-23点，要显示下午
//作业3，蝙蝠侠大战小丑，提供暴击功能
//    实现方式为，随机产生1-5的随机数
//    如果结果是5就表示暴击，将伤害值加倍
