function pigIt(str){
  let arrStr = str.split(' ');
  let temp;
  for(let i = 0; i < arrStr.length; i++){
    if(!arrStr[i].match(/[.,:;?!]/)){
    temp = arrStr[i].split('');
    temp.push(temp.shift());
    temp.push("ay");
    arrStr[i] = temp.join('');
    }
  }
  
  return arrStr.join(' ');
}
