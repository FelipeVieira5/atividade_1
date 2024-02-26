function main(args) {
    // codigo
    args = args.toLowerCase();

    if( args.replace(/\s/g, '') === args.replace(/\s/g, '').split("").reverse().join(""))return true;
    return  false;
}
module.exports = main;