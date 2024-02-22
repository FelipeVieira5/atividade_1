function main(args) {
  // codigo
  let resul = 0;
  let numeroString = args.toString();

  for(let index = 0; index < numeroString.length; index++){
    resul += parseInt(numeroString[index])**numeroString.length;
  }
  return resul == args;
}
module.exports = main;