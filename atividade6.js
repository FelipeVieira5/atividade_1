const vogais = "aeiou"
//const vogais = "aeiouáéíóúâêîôûàèìòùãõäëïöü";

function main(args) {
    // codigo
    let contador = 0;

    args = args.toLowerCase();

    for(let index = 0; index < args.length; index++){
        if(vogais.includes(args[index]))contador++;
    }

    return contador;
}
module.exports = main;