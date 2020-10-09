function reverseBits (n) {
  let result = parseInt(n.toString(2).split('').reverse().join(''), 2);
  return result;
}
