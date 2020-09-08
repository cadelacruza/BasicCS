var kidsWithCandies = function (candies, extraCandies) {
    const greatest = Math.max(...candies);
    let result = [];
    for (let i = 0; i < candies.length; i++) {
        result.push(candies[i] + extraCandies >= greatest)
    }

    return result;
};