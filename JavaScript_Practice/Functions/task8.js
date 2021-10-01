/* ЗАДАНИЕ - 1
 * Написать функцию суммирования.
 * Принимает аргументы: первое число и второе число
 * Возвращаемое функцией значение: сумма двух аргументов
 * */

function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}
const sumUserNumbers = sum(
  +prompt("Enter the first number"),
  +prompt("Enter the second number")
);
console.log(sumUserNumbers);
