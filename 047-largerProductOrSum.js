function sumOrProduct(array, n) {
  let sortedArr = array.sort((a, b) => b - a);
  let largestNumbers = [];
  let smallestNumbers = [];
  for(let i = 0, j = sortedArr.length - 1; i < n; i++){
    largestNumbers.push(sortedArr[i]);
    smallestNumbers.push(sortedArr[j]);
    j--;
  }
  
  let sum = largestNumbers.reduce((acc, current) => acc + current);
  let product = smallestNumbers.reduce((acc, current) => acc * current);
  
  
  if(sum > product){
    return "sum";
  }else if(product > sum){
    return "product";
  }
  
  return "same";
}
