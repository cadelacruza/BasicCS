var solution = function(firstArray, secondArray) {
  let comparedNums = [];
  for(let i = 0; i < firstArray.length; i++){
    comparedNums.push(Math.abs(firstArray[i] - secondArray[i]));
  }
  
  let result = (comparedNums.map(n => n * n).reduce((acc, current) => acc + current)) / comparedNums.length;
  
  return result;
}
