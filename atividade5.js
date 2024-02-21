function main(args) {
  // codigo
  let valor = args[0];

  for (let index = 1; index < args.length; index++){
    valor+=args[index];
  }

  return valor;
}
module.exports = main;