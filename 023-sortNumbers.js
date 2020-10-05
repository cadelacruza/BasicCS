function solution(nums){
  if(!nums){
    return [];
  }
  
  let newNums = nums.sort((a,b) => a - b);
  return newNums;
  

}
