function menFromBoys(arr) {
    let men = [...new Set(arr.filter(num => num % 2 === 0).sort((a, b) => a - b))];
    let boys = [...new Set(arr.filter(num => num % 2 !== 0).sort((a, b) => b - a))];

    let result = men.concat(boys);
    return result;

}

