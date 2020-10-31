function spinWords(words){
  let arrWords = words.split(' ');
  
  for(let i = 0; i < arrWords.length; i++){
    if(arrWords[i].length >= 5){
      arrWords[i] = arrWords[i].split('').reverse().join('');
    }
  }
  
  return arrWords.join(' ');
}
