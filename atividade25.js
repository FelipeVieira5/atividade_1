function main(args) {
  // codigo
  return args > 0 && (args & (args - 1)) === 0;
}
module.exports = main;