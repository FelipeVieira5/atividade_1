function main(args) {
  // codigo
  args = args.toLowerCase();

  for (let letra = 'a'; letra <= 'z'; letra++) {
    if(!args.includes(letra))return false;
  }
  return true;
}
module.exports = main;