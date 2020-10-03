function isTriangleNumber(number) {
  let magic = (8 * number) + 1;
  let square = Math.sqrt(magic);
  
  return Number.isInteger(square);
}
