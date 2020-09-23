function solve(arr){
  let result = [...new Set (arr.reverse())].reverse();
  return result;
}
