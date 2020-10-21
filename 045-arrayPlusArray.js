function arrayPlusArray(arr1, arr2) {
  const arraOne = arr1.reduce((acc, current) => acc + current);
  const arraTwo = arr2.reduce((acc, current) => acc + current);
  return arraOne + arraTwo; //something went wrong
}
