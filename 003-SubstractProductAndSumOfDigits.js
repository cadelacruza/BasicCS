var subtractProductAndSum = function (n) {
    let numArray = n.toString().split('').map(char => parseInt(char));
    let sum = 0;
    let product = 1;
    // [1 ,2 ,3]

    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
        product *= numArray[i];
    }

    return product - sum;
};


console.log(subtractProductAndSum(10));
console.log(subtractProductAndSum(123));
console.log(subtractProductAndSum(569));
console.log(subtractProductAndSum(1900));
console.log(subtractProductAndSum(887534));