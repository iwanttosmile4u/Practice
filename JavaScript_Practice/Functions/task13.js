// Реализовать функцию, которая будет производить математические операции с введеными пользователем числами. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

// Технические требования:

// Считать с помощью модального окна браузера два числа.
// Считать с помощью модального окна браузера математическую операцию, которую нужно совершить. Сюда может быть введено +, -, *, /.
// Создать функцию, в которую передать два значения и операцию.
// Вывести в консоль результат выполнения функции.

// Необязательное задание продвинутой сложности:

// После ввода данных добавить проверку их корректности. Если пользователь не ввел числа, либо при вводе указал не числа, - спросить оба числа заново (при этом значением по умолчанию для каждой из переменных должна быть введенная ранее информация).

let firstNumb = +prompt("Enter the first number");
while (isNaN(firstNumb)) {
  firstNumb = +prompt("Please, enter the number");
}

let secondNumb = +prompt("Enter the second number");
const operation = prompt("Enter math operation");

function countNumbers(firstNumb, secondNumb, operation) {
  if (operation === "+") {
    return firstNumb + secondNumb;
  } else if (operation === "-") {
    return firstNumb - secondNumb;
  } else if (operation === "*") {
    return firstNumb * secondNumb;
  } else if (operation === "/") {
    return firstNumb / secondNumb;
  }
}

const res = countNumbers(firstNumb, secondNumb, operation);

console.log(res);
