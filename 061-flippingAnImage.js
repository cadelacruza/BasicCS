var flipAndInvertImage = function(A) {
    let result = A.map(arr => arr.reverse().map(item => item === 1 ? 0 : 1));
    return result;
};
