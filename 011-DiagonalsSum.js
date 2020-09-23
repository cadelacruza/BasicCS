function sum(matrix) {
  let mainSum = 0;
  let secondarySum = 0;
  for(let i = 0, j = matrix.length - 1; i < matrix.length; i++){
    mainSum += matrix[i][i];
    secondarySum += matrix[i][j];
    j--;
  }
  
  return mainSum + secondarySum;
}
