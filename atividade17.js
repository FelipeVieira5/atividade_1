function main(num1,num2) {
  // codigo
  let sobra = 1;

  while(sobra!=0){
    sobra = num1 % num2;
    num1 = num2;
    num2 = sobra;
  }
  
  return num1;
}
module.exports = main;