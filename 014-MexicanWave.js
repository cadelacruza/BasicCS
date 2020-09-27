function wave(str){
  if(str.length === 0){
    return [];
  }
  let result = [];
  let arrStr = str.split('');
  for(let i = 0; i < str.length; i++){
    if(arrStr[i] !== " "){
    arrStr[i] = arrStr[i].toUpperCase();
    result.push(arrStr.join(''));
    arrStr[i] = arrStr[i].toLowerCase();
      }
  }
  return result;
}
