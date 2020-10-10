var lengthOfLastWord = function(s) {
    let arrS = s.split(' ').filter(item => item.length > 0);
    console.log(typeof arrS);
    
    if(arrS[0] === undefined){
        return 0;
    }else{
        return arrS[arrS.length - 1].length;
    }
}
