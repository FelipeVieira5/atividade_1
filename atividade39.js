function main(args) {
  // codigo
  let numeroString = args.toString();

  let divisor = 0;
  for(let index = 0; index < numeroString.length; index++){
    divisor += parseInt(numeroString[index]);
  }

  return args/divisor == parseInt(args/divisor, 10);
}
module.exports = main;