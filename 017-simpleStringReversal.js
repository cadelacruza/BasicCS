function solve(str){
  let arr = str.split('').filter(char => char !== " ").reverse();
  for(let i = 0; i < str.length; i++){
    if(str[i] === " "){
      arr.splice(i, 0, " ");
    }
  }
  
  return arr.join('');
}
