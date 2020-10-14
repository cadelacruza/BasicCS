function getAverage(marks){
  return Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length);
}
