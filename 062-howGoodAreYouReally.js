function betterThanAverage(classPoints, yourPoints) {
  const average = classPoints.reduce((acc, curr) => acc + curr) / classPoints.length;
  
  return yourPoints > average ? true : false;
}
