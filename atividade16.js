function main(vetor1,vetor2) {
  // codigo
  if(vetor1.length !== vetor2.length)return 0;

  let resul = 0;
  for(let index in vetor1){
    resul += vetor1[index]*vetor2[index];
  }

  return resul;
}
module.exports = main;