function recCalc(length, width) {
  result = length * 3.28 * (width * 3.28);
  return result;
}

const arealet = recCalc(30, 40);

console.log(arealet);
