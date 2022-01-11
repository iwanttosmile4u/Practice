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

// function callBack() {
//   console.log('I am callback');
// }

// function foo(callBack) {
//   console.log('I am function');
//   callBack();
// }
// foo(callBack);

// function a() {
//   console.log('a was called');
// }
// function b(incomingFunction) {
//   incomingFunction();
// }
// b(a);

// function b() {
//   return function a() {
//     console.log(a.name + ' ' + 'was called');
//   };
// }
// const returnedFunction = b();
// returnedFunction();

// function writeToScope(a, b) {
//   const c = {};
//   function innerFunction() {}
// }
// writeToScope('a', 10);

// function tryHoisting(a) {
//   console.log(a);
//   var a = 10;
//   console.log(a);
// }
// tryHoisting('someText');

// hoisted();
// console.log(hoisted);

// var hoisted = 10;
// console.log(hoisted);

// function hoisted() {
//   console.log('a function was called');
// }

// function tryArguments(a, b) {
//   console.log(a);
//   console.log(b);
//   console.log(arguments[2]);
// }
// tryArguments(1, 2, 4, 4);

// function doNothing() {
//   return;
// }
// alert(doNothing() === undefined);

// function greeting(name) {
//   alert('Hello' + name);
// }

// function processUserInput(callback) {
//   var name = prompt('Enter your name');
//   callback(name);
// }
// processUserInput(greeting);

// function myConcat(separator) {
//   var result = '';
//   for (var i = 1; i < arguments.length; i++) {
//     result += arguments[i] + separator;
//   }
//   return result;
// }
// console.log(myConcat('; ', 'red', 'orange', 'blue'));

// function multiply(a, b) {
//   b = typeof b !== 'undefined' ? b : 1;
//   return a * b;
// }
// console.log(multiply(5));

// function multiply(a, b = 1) {
//   return a * b;
// }
// console.log(multiply(5));

// function multiply(a, b = 2 * a) {
//   return a * b;
// }
// console.log(multiply(5));

// var value = 0;
// function f() {
//   if (value) {
//     return 1;
//   } else {
//     return false;
//   }
// }
// f();
// alert(value);
var a = 1;
function func() {
  var a = 10;
}
func();
alert(a);
