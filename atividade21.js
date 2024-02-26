function main(listaPalavras,acrostico) {
  // codigo
  if(!listaPalavras.length || acrostico == undefined)return false;

  acrostico = acrostico.toLowerCase();

  let palavra = "";
  for(let index in listaPalavras){
    palavra += listaPalavras[index].charAt(0).toLowerCase();
  }

  return acrostico == palavra;
}
module.exports = main;