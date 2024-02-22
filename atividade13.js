function main(args) {
  // codigo
  let fibonacci = [0,1];

  for(let index =2; index < args; index++){
    fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2]
  }
  return fibonacci;
}
module.exports = main;