function repeater(string, n) {
  let repeated = "";
  let counter = 0;
  while(counter < n){
    repeated += string;
    counter++;
  }
  
  return `"${string}" repeated ${n} times is: "${repeated}"`;
  
}
