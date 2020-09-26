var moveZeros = function (arr) {
  let noZeros = arr.filter(char => char !== 0);
  while(noZeros.length < arr.length){
    noZeros.push(0);
  }
  return noZeros;
}
