function main(args) {
    // codigo
    return ((args%4===0 && args%100 !== 0) || args%400 === 0)?true:false;
}
module.exports = main;