function oddOrEven(array) {
  if(array.length === 0){
    return "even";
  }
  let sum = array.reduce((acc, current) => acc + current);
  
  return sum % 2 === 0  ?  "even" : "odd";
}
