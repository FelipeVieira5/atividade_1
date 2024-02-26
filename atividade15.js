function main(args,args1) {
  // codigo
  args = args.replace(/\s/g, '').split("").sort().join("");
  args1 = args1.replace(/\s/g, '').split("").sort().join("");

  if(args.length !== args1.length)return false;

  return (args === args1)?true:false;
}
module.exports = main;