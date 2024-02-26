function main(args) {
  let bufferValores = [];

  for (let index in args) {
    if (!bufferValores.includes(args[index])) {
      bufferValores.push(args[index]);
    }
  }

  return bufferValores.length;
}

module.exports = main;