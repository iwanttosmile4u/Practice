/* TASK - 3
 * Write a function, that will sum up all the arguments passed into it.
 * */

const sumAllArg = (...args) => {
  let res = 0;
  //   for (let arg of args) {
  //     res += arg;
  //   }
  for (let i = 0; i < args.length; i++) {
    res += args[i];
  }
  return res;
};
console.log(sumAllArg(1, 2, 3, 6, 7));
