var missingNumber = function(nums) {
    let n = nums.length;
    let fullSum = n * (n + 1) / 2;
    let numsSum = nums.reduce((acc, curr) => acc + curr);
    
    return fullSum - numsSum;
};
