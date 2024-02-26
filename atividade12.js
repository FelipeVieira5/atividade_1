function main(args) {

    if (!args.length) {
        return; // Or `return undefined;` if you want to emphasize the return value
    }
    
    return args.reduce((menor, atual) => {
        return atual < menor ? atual : menor;
    }, Infinity);

}
module.exports = main;