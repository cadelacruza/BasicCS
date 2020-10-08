function parse( data )
{
  let tracker = 0;
  let result = [];
  
  for(let i = 0; i < data.length; i++){
    if(data[i] === "i"){
      tracker++;
    }else if(data[i] === "d"){
      tracker--;
    }else if(data[i] === "s"){
      tracker = tracker * tracker;
    }else if(data[i] === "o"){
      result.push(tracker);
    }
  }
  
  return result;
}
