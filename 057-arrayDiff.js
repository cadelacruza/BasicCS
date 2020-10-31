function arrayDiff(a, b) {
  if(a.length === 0){
    return a;
  }
  
  let tracker = a;
  for(let i = 0; i < a.length; i++){
    if(b.includes(a[i])){
      tracker = tracker.filter(item => item !== a[i]);
    }
  }
  
  return tracker;
}
