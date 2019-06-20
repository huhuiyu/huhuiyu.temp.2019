console.log('执行fuxi001.js');

let txtName = document.getElementById('txtName');
let txtPwd = document.getElementById('txtPwd');
let txtPwd2 = document.getElementById('txtPwd2');
let txtNickname = document.getElementById('txtNickname');
let btnReg = document.getElementById('btnReg');
let btnReset = document.getElementById('btnReset');

//重置表单的function
function reset() {
  txtName.value = '';
  txtPwd.value = '';
  txtPwd2.value = '';
  txtNickname.value = '';
  txtName.focus();
}

reset();

btnReset.addEventListener('click', function() {
  reset();
});

btnReg.addEventListener('click', function() {
  let name = txtName.value;
  let pwd = txtPwd.value;
  let pwd2 = txtPwd2.value;
  let nickname = txtName.value;

  if (!name) {
    alert('用户名必须填写！');
    txtName.focus();
    return;
  }
  if (!pwd) {
    alert('密码必须填写！');
    txtPwd.focus();
    return;
  }
  if (pwd != pwd2) {
    alert('确认密码不一致！');
    txtPwd2.focus();
    return;
  }
  alert(name + '注册成功，你的密码是：' + pwd + ',请牢记');
});
