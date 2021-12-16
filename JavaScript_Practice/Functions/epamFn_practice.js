// function doSomething(first, second, ...rest) {
//   console.log(first);
//   console.log(second);
//   console.log(rest);
//   //   console.log(rest[1]);
// }
// doSomething(1, 2, 3, 4, 5, 6);

// let original = [1, 2, 3, 4, 5];
// let clone = { ...original };
// console.log(clone);

// Callback

function callBack() {
  console.log('I am callback');
}

function foo(callBack) {
  console.log('I am function');
  callBack();
}
foo(callBack);
