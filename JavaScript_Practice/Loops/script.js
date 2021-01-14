// Як працює директива break у циклах:
// let num = 0;
// for (; num < 5; num++) {
//     console.log(num);
//     if (num == 2) break;
// }
// console.log(`Operation finished, num = ${num}`);

// Як працює директива continue у циклах:
// let num = 0;
// for (; num < 5; num++) {
//     if (num == 2) continue;
//     console.log(num);
// }

// Вивести в консоль числа від 0 до 5 за доп. циклів for і while:
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// let i = 0;
// while (i <= 5) {
//     console.log(i);
//     i++
// }

// Останній результат має бути 8:
// let num = 8;
// while (num) {
//     console.log(num);
//     num--;
// }

// Переробити код із for на while:
// for (let num = 0; num < 3; num++) {
//     console.log(`Число: ${num}`);
// }

// let num = 0;
// while (num < 3) {
//     console.log(`Число: ${num}`);
//     num++;
// }

// firstFor: for (let num = 0; num < 2; num++) {
//     for (let size = 0; size < 3; size++){
//         if (size == 1) {
//             break firstFor;
//         }
//         console.log(size);
//     }
// }

// ЗАДАНИЕ - 1
// * Пользователь должен ввести Имя, Фамилию и свой возраст.
// * В случае если он вводит не соответствующие данные, нужно переспрашивать его, ДО ТЕХ ПОР ПОКА данные не будут введены корректно.

// let userName = prompt ("Enter your name and surname");
// while (!isNaN(userName)) {
//     userName = prompt ("Enter your name using letters");
// }
// let userAge = prompt ("Enter your age");
// while (isNaN(userAge)) {
//     userAge = prompt ("Enter your age using numbers");
// }
// alert (`Welcome ${userName} ${userAge}`);

// ЗАДАНИЕ - 2
// Вывести в консоль первые 147 непарных чисел.
// ПРОДВИНУТАЯ СЛОЖНОСТЬ - не выводить в консоль те числа, которые делятся на 5.

// for (let i = 1; i <=294; i+=2) { - тут потрібно збільшити на 2, тому ітерація і+=2 (і = і +2;)
//     if (i % 5 !== 0) { - якщо число ділиться на 5 з остатком, то його виводити, а решту ні (тобто 1 ділиться на 5 з остатком). Я викладу в консоль, якощо і не ділиться на ціло на 5.
//         console.log(i);
//     }
// }

// ЗАДАНИЕ - 3
// Осуществляем проверку на корректность введения данных.
// Пользователь должен ввести два числа и операцию.
// Если пользователь ввел НЕ числа или операцию, которой нет в списке - спрашиваем все по новой, ДО ТЕХ ПОР ПОКА не введет правильно.
// Список операций:
// * - умножение
// + - добавление
// - - вычетание
// / - деление

// let num1 = prompt ("Enter the first number");
// while (isNaN(num1)) {
//     num1 = prompt ("Enter the first number correctly");
// }
// let num2 = prompt ("Enter the second number");
// while (isNaN(num2)) {
//     num2 = prompt ("Enter the second number correctly");
// }
// let operation = prompt ("Enter the operation");
// while (operation !== "*" && operation !== "-" && operation !== "+" && operation !== "/") {
//     operation = prompt ("Enter operation correctly");
// }

let userNumber = +prompt("Enter number");
while (userNumber !== parseInt(userNumber)) {
  userNumber = +prompt("Enter integer number");
}

let countOfFoundNumbers = 0;
for (let i = 1; i <= userNumber; i++) {
  if (i % 5 === 0) {
    countOfFoundNumbers++;
    console.log(i);
  }
}

if (!countOfFoundNumbers) {
  console.log("Sorry, no numbers");
}

Відповідь на теоретичне запитання: 
Цикли дають змогу виконати один і той же шматок коду багато разів. Тобто це певний блок команд, які повторюються до того моменту,
поки певна умова не виконається. Є такі види циклів у JS: for, while, do while (ще бачила for in та for of). 