//const mdc = require("./atividade17");

function mdc(num1,num2) {
  // codigo
  let sobra = 1;
  if(num2 == 0) return num1;

  while(sobra!=0){
    sobra = num1 % num2;
    num1 = num2;
    num2 = sobra;
  }
  
  return num1;
}

function main(args) {
  let mdcArray = [];

  for (let i = 0; i < args.length - 1; i++) {
    let mdcAtual = mdc(args[i], args[i + 1]);
    mdcArray.push(mdcAtual);
  }

  mdcArray.push(mdc(args[args.length - 2], args[args.length - 1]));
  return mdcArray[0];
}
module.exports = main;