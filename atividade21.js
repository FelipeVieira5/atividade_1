function main(listaPalavras,acronimo) {
  // codigo
  if(!listaPalavras.length || acronimo == undefined)return false;

  acronimo = acronimo.toLowerCase();

  let palavra = "";
  for(let index in listaPalavras){
    palavra += listaPalavras[index].charAt(0).toLowerCase();
  }

  return acronimo == palavra;
}
module.exports = main;