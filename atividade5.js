function main(args) {
  // codigo
  let valor = 0;

  for (let index = 0; index < args.length; index++){
    valor+=args[index];
  }

  return valor;
}
module.exports = main;