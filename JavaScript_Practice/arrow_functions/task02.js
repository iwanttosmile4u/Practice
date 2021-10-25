/* TASK - 2
 * Write a functions, that will be counting from start to end of range.
 * Arguments: start of the range, end of the range
 */

const counter = (startNum, endNum) => {
  let res = 0;
  for (let i = startNum; i < endNum; i++) {
    res = i;
    console.log(i);
  }
};
console.log(counter(2, 6));
