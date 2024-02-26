function main(args) {
  // codigo

  if(!args.lentgh){
    return 0;
  }
  let soma=0;

 
  args.forEach(element => {
    soma+=element;
  });

  
  return soma/args.length;
}
module.exports = main;