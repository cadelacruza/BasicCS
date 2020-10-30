function squareSum(numbers){
  if(numbers.length === 0){
    return 0;
  }
  return numbers.map(num => num * num).reduce((acc, current) => acc + current);
}
