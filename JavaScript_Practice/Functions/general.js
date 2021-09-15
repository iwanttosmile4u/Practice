// function showMessage() {
//   alert("Hello");
// }
// showMessage();

// let userName = "Jhon";
// function showMessage() {
//   let userName = "Tom";
//   let message = "Hello, " + userName;
//   alert(message);
// }
// showMessage();

// function showMessage(from, text) {
//   from = "*" + from + "*";
//   alert(from + ":" + text);
// }
// let from = "Ann";
// showMessage(from, " hello");

// let userName = "John";
// function showMessage() {
//   let message = "Hello, " + userName;
//   console.log(message);
// }
// showMessage();

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// Сделайте два варианта функции checkAge:

// Используя оператор ?
// Используя оператор ||

// function checkAge(age) {
//   return age > 18 ? true : confirm("Do you have permission from your parents?");
// }

// checkAge(24);

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(min(512, 511));

// Функция pow(x,n)
// важность: 4
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

// Запустить демо

// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

// let x = +prompt("Enter the first number");
// while (x !== parseInt(x)) {
//   alert("Enter integer number");
// }

// let n = +prompt("Enter the second number");
// while (n !== parseInt(n)) {
//   alert("Enter integer number");
// }

// function pow(x, n) {
//   return Math.pow(x, n);
// }

// console.log(pow(x, n));
