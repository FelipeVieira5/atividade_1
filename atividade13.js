function main(args) {
  // codigo
  let fiboArray = [];
    
  if (args >= 1) {
      fiboArray.push(0);
  }
  if (args >= 2) {
      fiboArray.push(1);
  }
  
  for (let i = 2; i < args; i++) {
    fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
  }
  
  return fiboArray;
}
module.exports = main;