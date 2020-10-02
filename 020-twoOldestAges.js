function twoOldestAges(ages){
  let result = [];
  result[1] = Math.max(...ages);
  result [0] = Math.max(...ages.filter(num => num !== result[1]));
  
  return result;
}
