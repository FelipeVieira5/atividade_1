function main(args) {
  // codigo
  let soma=0;

 
  args.forEach(element => {
    soma+=element;
  });

  return soma/args.length;
}
module.exports = main;