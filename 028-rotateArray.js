var rotate = function(nums, k) {
    let counter = 0;
    let temp;
    while(counter < k){
        temp = nums.pop() ;
        nums.unshift(temp);
        counter++;
    }
    return nums;
};
