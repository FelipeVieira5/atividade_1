const mdc = require("./atividade17");

function main(args) {
  let mdcArray = [];

  for (let i = 0; i < args.length - 1; i++) {
    let mdcAtual = mdc(args[i], args[i + 1]);
    mdcArray.push(mdcAtual);
  }

  mdcArray.push(mdc(args[args.length - 2], args[args.length - 1]));
  return mdcArray;
}
module.exports = main;