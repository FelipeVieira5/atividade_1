function main(args) {
  // codigo
  let soma=0;

  //Viadagem de javascript, em Java é melhor
  args.forEach(element => {
    soma+=element;
  });

  return soma/args.length;
}
module.exports = main;