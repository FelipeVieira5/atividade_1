function main(args,args1) {
  // codigo
  args = args.split("").sort().join("");
  args1 = args1.split("").sort().join("");

  if(args.length !== args1.length)return false;

  return (args === args1)?true:false;
}
module.exports = main;