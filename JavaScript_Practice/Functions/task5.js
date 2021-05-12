// Реализовать функцию, которая будет производить математические операции с введеными пользователем числами.
// Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

// Технические требования:

// Считать с помощью модального окна браузера два числа.
// Считать с помощью модального окна браузера математическую операцию, которую нужно совершить. Сюда может быть введено +, -, *, /.
// Создать функцию, в которую передать два значения и операцию.
// Вывести в консоль результат выполнения функции.

// Необязательное задание продвинутой сложности:

// После ввода данных добавить проверку их корректности. Если пользователь не ввел числа,
// либо при вводе указал не числа, - спросить оба числа заново (при этом значением по умолчанию для
//     каждой из переменных должна быть введенная ранее информация).

function checkNumber(message, newMessage) {
  let num1 = +prompt(message);
  while (!num1 || Number.isNaN(num1)) {
    num1 = +prompt(newMessage);
  }
  return num1;
}

let num1 = checkNumber(
  "Enter the first number",
  "Enter the first number correctly"
);
let num2 = checkNumber(
  "Enter the second number",
  "Enter the second number correctly"
);

let operation = prompt("Enter the operator");
while (
  !operation &&
  operation !== "+" &&
  operation !== "-" &&
  operation !== "*" &&
  operation !== "/"
) {
  operation = prompt("Enter the operator correctly");
}

function calculateNumbers(num1, num2, operation) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}
console.log(calculateNumbers(num1, num2, operation));
