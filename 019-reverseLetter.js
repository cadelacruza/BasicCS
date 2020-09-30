function reverseLetter(str) {
  let arrStr = str.split('').filter(char => (/[a-zA-Z]/).test(char));
  
  return arrStr.reverse().join('');
}
