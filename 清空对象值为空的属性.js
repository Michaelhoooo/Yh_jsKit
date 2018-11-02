function filterParams(obj){
  let _newPar = {};
  for (let key in obj) {
      if ((obj[key] !== 0 && obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
          _newPar[key] = obj[key];
      }
  }
  return _newPar;
}

filterParams({a:0, b:1, c:"010", d:null, e:undefined,f:false}) 
// 当值等于0,null,undefined的时候，就会被过滤
