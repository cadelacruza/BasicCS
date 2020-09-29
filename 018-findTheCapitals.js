var capitals = function (word) {
	let capitals = [];
  
  for(let i = 0; i < word.length; i++){
    if(word[i].toUpperCase() === word[i]){
      capitals.push(i);
    }
  }
  
  return capitals;
};
