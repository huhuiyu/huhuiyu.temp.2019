# 闰年的页面逻辑

```flow
  s=>start: 开始
  e=>end: 结束
  op=>inputoutput: 输入年份信息
  cond1=>condition: 判断是否输入了数
  cond2=>condition: 判断是否输了整数
  cond3=>condition: 判断是否在1900-3000之间
  cond4=>condition: 判断是否为闰年
  op1=>operation: 显示正确信息
  op2=>operation: 显示错误信息

  s->op->cond1
  cond1(no)->op
  cond1(yes)->cond2
  cond2(no)->op
  cond2(yes)->cond3
  cond3(no)->op
  cond3(yes)->cond4
  cond4(no)->op2->e
  cond4(yes)->op1->e
```