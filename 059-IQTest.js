function iqTest(numbers){
  const nums = numbers.split(' ').filter(item => item !== " ");
  let evenNums = [];
  let oddNums = [];
  
  for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0){
      evenNums.push(i + 1);
    }else{
      oddNums.push(i + 1);
    }
  }
  
  return evenNums.length === 1 ? evenNums[0] : oddNums[0];
}
