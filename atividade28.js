function main(args) {
    let bufferValores = {};

    for (let index in args) {
      bufferValores[args[index]] = (bufferValores[args[index]] || 0) + 1;
    }

    let qtdaPalavrasUnicas = 0;
    args.forEach(element => {
      if(bufferValores.hasOwnProperty(element) && bufferValores[element] === 1)qtdaPalavrasUnicas++;
    });

    return qtdaPalavrasUnicas;
}

module.exports = main;