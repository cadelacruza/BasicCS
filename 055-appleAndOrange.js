function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let locationA = apples.map(apple => a + apple);
    let locationB = oranges.map(orange => b + orange);

    let counterA = 0;
    let counterB = 0;

    for(let i = 0; i < locationA.length; i++){
        if(locationA[i] >= s && locationA[i] <= t){
            counterA++;
        }
    }

    for(let i = 0; i < locationB.length; i++){
        if(locationB[i] >= s && locationB[i] <= t){
            counterB++;
        }
    }

    console.log(counterA);
    console.log(counterB);
}

