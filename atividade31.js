const ePrimo = require("./atividade4");

function main(args) {
  // codigo
  if (!ePrimo(args)) return false;

  let contador = 2;
  for(;;) {
    let numeroMersenne = (2 ** contador) - 1;
    if (numeroMersenne === args) return true;
    else if (numeroMersenne > args) return false;
    contador++;
  }
}
module.exports = main;