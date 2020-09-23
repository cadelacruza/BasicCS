function splitByValue(k, elements){
  let less = elements.filter(num => num < k);
  let greater = elements.filter(num => num >= k);
  let result = less.concat(greater);
  return result;
}
