function main(args) {
  // codigo
  let quantidadePares = args.filter((num) => num % 2 == 0).length;
  return quantidadePares;
}
module.exports = main;