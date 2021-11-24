/* TASK - 3
 * Create a function that will receive an array as a single argument.
 * return value: new array, which is the exact copy of the source one.
 * Task needs to be done using: for, map(), spread operator. It means three implementations.
 */

const showNewArr = (arr) => {
  //   const newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     newArr.push(arr[i]);
  //   }

  //   return newArr;

  //   const newArr = arr.map((el) => el);
  //   return newArr;

  return [...arr];
};

console.log(showNewArr([1, 2, 3, 4, 5, 6, 7]));
