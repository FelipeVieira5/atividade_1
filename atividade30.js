function main(args) {
  // codigo
  const valores = [1,2];

  do{
    let buff = valores[1];
    valores[1] = valores[0]+valores[1];
    valores[0] = buff;

  }while(valores[1] < args);

  return valores[1] == args;
}
module.exports = main;