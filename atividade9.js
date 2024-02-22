function main(args) {
    // codigo
    let valor = args;
    
    for(let index = args-1; index > 0; index--){
        valor *= index;
    }

    return valor;
}
module.exports = main;