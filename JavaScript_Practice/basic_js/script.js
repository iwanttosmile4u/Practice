// const firstName = "Tania";
// const age = 27;
// const $ = "some string";
// alert("Persone name: " + name + ", person age: " + age.toString());
// console.log("Persone name: " + name + ", person age: " + age.toString());

// const lastName = prompt("Enter your last name");
// alert(firstName + " " + lastName);

// const currentYear = 2020;
// const birthYear = 1993;
// const age = currentYear - birthYear;
// console.log(age);

// Типи даних
// const isProgrammer = true;
// const name = "Tania";
// const age = 27;
// let x;
// console.log(typeof isProgrammer);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof x);

// Пріоритет операторів
// const fullAge = 27;
// const birthYear = 1993;
// const currentYear = 2021;
// const isFullAge = currentYear - birthYear >= fullAge;
// console.log(isFullAge);

// Умовні оператори
// const coureStatus = "not ready";
// if (coureStatus === "ready") {
//   console.log("Course is ready");
// } else if (coureStatus === "pending") {
//   console.log("Course is on process");
// } else {
//   console.log("Course is not ready yet");
// }

// const num1 = 42;
// const num2 = "42";
// console.log(num1 === num2);

// const isReady = true;
// if (isReady) {
//   console.log("All is ready");
// } else {
//   console.log("All is not ready yet");
// }

// isReady ? console.log("All is ready") : console.log("All is not ready yet");

// function calculateAge(year) {
//   return 2020 - year;
// }
// const myAge = calculateAge(1993);
// console.log(myAge);

// function logInfoAbout(name, year) {
//   const age = calculateAge(year);
//   console.log("Person name: " + name + " and her age is" + " " + age);
// }
// logInfoAbout("Tania", 1993);

// let _c = document.body;
// console.log(_c);

// let $ = true;
// console.log($);

// let a = BigInt(123);
// console.log(typeof a);

// let myVar;
// console.log(typeof myVar);

// let a = 5;
// console.log(a++);
// console.log(a);

// var b = 10;
// if (b % 3 == 0) {
//   var i = 10;
// }
// console.log(i);

// var a = 5;
// var test = 5 == a ? "Yes" : "No";
// console.log(test);

// var a = false;
// if (a == `0`) {
//   alert(`==`);
// }
// if (a === `0`) {
//   alert(`===`);
// }

// var bool = new Boolean(false);
// if (bool) {
//   console.log(`Hello`);
// } else {
//   console.log(`Error`);
// }

// var a = 3;
// switch (a) {
//   default:
//     a += 4;
//   case 1:
//     a += 2;
//     break;
//   case 2:
//     a += 3;
//     break;
// }
// console.log(a);

// var x = 3;
// {
//   var x = 5;
// }
// console.log(x);

// var a = 5;
// var test = 5 == a ? "Yes" : "No";
// console.log(a);

// for (var i = 0; i < 10; ) {
//   i++;
// }
// console.log(i);

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// for (var i = 10; i < 35; i += 5) {
//   console.log(i);
// }

// var i = 0;
// while (i++ < 5) {
//   alert(i);
// }

// var i = 3;
// while (i) {
//   alert(i--);
// }

for (var i = 0; i > -10; i -= 3) {
  i++;
  console.log(i);
}
