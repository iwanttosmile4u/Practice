// let a = 1,
//   b = 1;
// let c = ++a;
// let d = c++;

// console.log(a);
// console.log(c);
// console.log(d);

// let a = null,
//   b = " 0 ";
// console.log(a == b);

// let userLogin = prompt("Who`s there?");

// if (!userLogin) {
//   alert("Canceled!");
// } else if (userLogin !== "Admin") {
//   alert("I don`t know you");
// } else if (userLogin === "Admin") {
//   let userPassword = prompt("Password?");
//   if (userPassword === "TheMaster") {
//     alert("Welcome!");
//   } else if (!userPassword) {
//     alert("Canceled");
//   } else if (userPassword !== "TheMaster") {
//     alert("Wrong password");
//   }
// }

// alert(null || 2 || undefined);
// alert(1 && null && 2);
// alert(null || (2 && 3) || 4);
// alert((!1 && !2) || 3);

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     console.log("Not enought");
//     break;
//   case 4:
//     console.log("It`s true!");
//     break;
//   case 5:
//     console.log("It`s too big value");
//     break;
//   default:
//     console.log("There is not correct value");
// }

// let browser = prompt("Enter your browser");

// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

let creditID = prompt("Enter credit card number");
let cardCvv = prompt("Enter card cvv");

debugger;

if (isNaN(creditID) || isNaN(cardCvv)) {
  alert("Enter numbers");
}
