function main(args) {

    return args.reduce((menor, atual) => {
        return atual < menor ? atual : menor;
    }, Infinity);
}
module.exports = main;