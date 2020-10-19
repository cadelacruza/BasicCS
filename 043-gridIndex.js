function gridIndex(grid, indices) {
  const flat = grid.flat();
  const newIndices = indices.map(index => index - 1);
  let result = "";
  
  for(let i = 0; i < newIndices.length; i++){
    result += flat[newIndices[i]];
  }
  
  return result;
}
