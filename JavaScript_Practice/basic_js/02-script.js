"use strict";
// let message = "hello";
// let hello;
// hello = message;

// alert(hello);
// alert(message);

// let admin, firstName;
// firstName = "John";
// admin = firstName;
// alert(admin);

// let age = prompt("How old are you", 27);
// alert(`You are ${age} years old`);

// let userName = prompt("What is your name?");
// alert(`My name is ${userName}`);

// var user = 0;

// function getUser() {
//   user = 12;
// }

// getUser();

// console.log(user);

// const user = {
//   name: "John",
//   age: 20,
// };

// user.pets = null;
// console.log(user);

/* ЗАДАНИЕ 1
 * Записать в переменную '123', вывести в консоль typeof этой переменной.
 * Преобразовать эту переменную в численный тип при помощи parseInt(), parseFloat(), унарный плюс +
 * После этого повторно вывести в консоль typeof этой переменной.
 * */

// const number = "123.4gjtj778kgk";
// console.log(typeof number);
// console.log(parseInt(number));
// console.log(parseFloat(number));
// console.log(+number);

/* ЗАДАНИЕ 2
 * Вывести на экран уведомление с текстом "Hello! This is alert" при помощи модального окна alert
 * */
// const greeting = "Hello! This is alert";
// alert(greeting);

/* ЗАДАНИЕ 3
 * Вывести на экран модальное окно prompt с сообщением "Enter the number".
 * Результат выполнения модального окна записать в переменную, значение которой вывести в консоль.
 * */

// const userNumber = parseInt(prompt("Enter the number"));
// console.log(userNumber);

/* ЗАДАНИЕ 4
 * При помощи модального окна prompt получить от пользователя два числа.
 * Вывести в консоль сумму, разницу, произведение, результат деления и остаток от деления их друг на друга.
 * */

// const firstNum = parseInt(prompt("Enter the first number"));
// const secondNum = parseInt(prompt("Enter the second number"));
// console.log(firstNum + secondNum);
// console.log(firstNum - secondNum);
// console.log(firstNum * secondNum);
// console.log(firstNum / secondNum);
// console.log(firstNum % secondNum);

/* TASK 5
 * Use browser modal windows for getting three numbers from user.
 * Then execute into console:
 *   - arithmetic average
 *   - max number
 *   - min number
 * */

// const firstNum = parseInt(prompt("Enter the first number"));
// const secondNum = parseInt(prompt("Enter the second number"));
// const thirdNum = parseInt(prompt("Enter the third number"));

// console.log((firstNum + secondNum + thirdNum) / 3);
// console.log(Math.max(firstNum, secondNum, thirdNum));
// console.log(Math.min(firstNum, secondNum, thirdNum));
