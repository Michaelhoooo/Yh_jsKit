var render = function(tpl,data){
  return tpl.replace(/\{\{(.+?)\}\}/g,function(m,m1){
      return data[m1]
  })
}

render('我是{{name}}，年龄{{age}}，性别{{sex}}',{
  name:'姓名',
  age:18,sex:'女',
}) 