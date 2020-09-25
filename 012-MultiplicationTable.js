multiplicationTable = function(size) {
  let result = [];
  let nums = [];
  let temp = [];
  for(let i = 1; i <= size; i++){
    nums.push(i);
  }
  
  for(let i = 1; i <= size; i++){
    temp = nums.map(num => num * i);
    result.push(temp);
  }
  
  return result;

}
