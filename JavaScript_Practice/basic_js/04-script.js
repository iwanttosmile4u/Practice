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

// let creditID = prompt("Enter credit card number");
// let cardCvv = prompt("Enter card cvv");

// debugger;

// if (isNaN(creditID) || isNaN(cardCvv)) {
//   alert("Enter numbers");
// }

/* TASK - 1
 * Get any integer number from user.
 * After you get the number, show modal window with message about is number even or odd.
 */

// let userNumber = prompt("Enter your number");
// if (isNaN(userNumber)) {
//   alert("It is not a number");
// } else if (userNumber % 2) {
//   alert("Your number is odd");
// } else if (userNumber === 0) {
//   alert("Your number is zero");
// } else {
//   alert("Your number is even");
// }

/* TASK - 2
 * Ask user in witch language he wants to see the list of the days.
 * User should enter one of three values, they are - urk, en, ru
 * Show the list of days on selected language.
 * */

// let userLanguage = prompt("Enter your language: ukr, en or ru");

// switch (userLanguage) {
//   case "ukr":
//     console.log("Пон, вів, сер, чет, п'ят, суб, нед");
//     break;
//   case "en":
//     console.log("Mon, tue, wed, thu, fri, sat, sun");
//     break;
//   case "ru":
//     console.log("Пон, вто, сре, чет, пят, суб, нед");
//     break;
//   default:
//     console.log("There is no language in this list");
// }

/* TASK - 3
 * Get the access group name from the user, it can be - 'admin', 'manager' or 'user'.
 * And show different message for different access group:
 *   - for admin - "Hello, admin!"
 *   - for manager - "Hello, manager!"
 *   - for user - "Hello, user!"
 * */

// let accessName = prompt("Enter your role: admin, manager or user");

// switch (accessName) {
//   case "admin":
//     console.log("Hello, admin!");
//     break;
//   case "manager":
//     console.log("Hello, manager!");
//     break;
//   case "user":
//     console.log("Hello, user!");
//     break;
//   default:
//     console.log("Sorry, there is no role for you");
// }

/* TASK - 4
 * We can simulate the staff list with the role for each particular member.
 * User enters the name of the employee, after that the message with the role of this employee needs to be shown.
 * The list is:
 * Boss - the main Boss in the building
 * Boss Junior - right hand of the Boss
 * John Doe - the worker of the month
 * Kicki - schedule writer
 * */

/* TASK - 5
 * Write a coffee-machine program.
 * Program can accept the coins and prepare the drinks
 * (Coffee - 30 UAH, Cappuccino - 40 UAH, special extra vegan no gluten herbal tea - 200 UAH).
 *
 * It means that the user enters the amount of money that he gives in the modal window,
 * next - he enters the name of the drink he wants.
 *
 * Depending of the drink, you need to calculate the change and show the message:
 * `Your drink *DRINK_NAME* and change *CHANGE*`
 * If the change equals to 0, show next message:
 * `Your drink *DRINK_NAME. Thank you for the exact amount of money!*`
 * */

const userMoney = prompt("Pay for the drink");

if (isNaN(userMoney)) {
  alert("This is not a money. Please, pay for coffee");
} else {
  const drink = prompt("What drink do you want?");
  if (drink === "Coffee") {
    const change = +userMoney - 30;
    if (change >= 0) {
      alert(`Here is your ${drink}`);
    } else {
      alert("Not enough money");
    }
    if (change) {
      alert(`${change} is your change`);
    } else {
      alert(`Enjoy your ${drink}!`);
    }
  } else if (drink === "Cappuccino") {
    const change = +userMoney - 40;
    if (change >= 0) {
      alert(`Here is your ${drink}`);
    } else {
      alert("Not enough money");
    }
    if (change) {
      alert(`${change} is your change`);
    } else {
      alert(`Enjoy your ${drink}!`);
    }
  } else if (drink === "Tea") {
    const change = +userMoney - 200;
    if (change >= 0) {
      alert(`Here is your ${drink}`);
    } else {
      alert("Not enough money");
    }
    if (change) {
      alert(`${change} is your change`);
    } else {
      alert(`Enjoy your ${drink}!`);
    }
  } else {
    alert("This is not even a word");
  }
}
