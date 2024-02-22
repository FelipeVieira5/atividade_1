function main(args) {
  // codigo
  if (args <= 1) {
      return false; // 1 não é considerado um número perfeito
  }

  let divisores=0;
  for(let index = 1; index <= args/2; index++){
    if(args%index == 0){
      divisores+=index;
    }
  }
  return (divisores == args)?true:false;
}
module.exports = main;