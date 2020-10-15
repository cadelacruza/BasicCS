function leastLarger(a,i) {
  let original = [...a]; //I do this because the a array is going to be sorted in place
  a.sort((a,b) => a - b);
  
  for(let j = 0; j < a.length; j++){
    if(a[j] > original[i] ){
      return original.indexOf(a[j]);
    }
  }
  
  return -1;
}
