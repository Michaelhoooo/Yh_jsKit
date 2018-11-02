/**
 *
 *
 * @param {*} string 字符串;
 * @param {*} str 指定字符;
 */
function getStr(string, str){
  var str_before = string.split(str)[0];
  var str_after = string.split(str)[1];
  console.log('前：'+str_before+' - 后：'+str_after);
}
getStr('string', '')