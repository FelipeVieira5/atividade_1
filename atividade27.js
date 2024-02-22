function main(args) {
  // codigo
  let bufferLetras = {};
  args = args.toLowerCase();

  for (let letra of args) {
    // Se a letra já ocorreu antes na palavra, não é um isograma
    if (bufferLetras[letra]) {
      return false;
    }
    // Caso contrário, registra a ocorrência da letra
    bufferLetras[letra] = true;
  } 
// Se chegarmos até aqui, significa que todas as letras são únicas, então é um isograma
return true;
}
module.exports = main;