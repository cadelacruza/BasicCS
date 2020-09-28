function anagrams(word, words) {
  let newWords = words.filter(item => item.length === word.length);
  
  if(newWords.length === 0){
    return [];
  }
  
  let sortedW = word.split('').sort().join('');
  let result = [];
  for(let i = 0; i < newWords.length; i++){
    if(newWords[i].split('').sort().join('') === sortedW){
      result.push(newWords[i]);
    }
  }
  
  return result;
}
