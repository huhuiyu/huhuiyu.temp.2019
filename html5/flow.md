# 流程图 flow.md

```flow
  s=>start: 开始流程
  e=>end: 流程结束
  op=>operation: 输入用户名和密码
  cond=>condition: 校验登陆信息

  s->op->cond
  cond(yes)->e
  cond(no)->op
```