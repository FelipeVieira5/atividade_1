function main(listaPalavras,acrostico) {
  // codigo
  acrostico = acrostico.toLowerCase();

  for(let index in listaPalavras){
    let palavra = listaPalavras[index].toLowerCase();
    if(palavra.charAt(0) !== acrostico[index])return false;
  }

  return true;
}
module.exports = main;