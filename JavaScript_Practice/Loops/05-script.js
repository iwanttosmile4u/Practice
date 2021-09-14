/* ЗАДАНИЕ - 3
 * Осуществляем проверку на корректность введения данных.
 * Пользователь должен ввести два числа и операцию.
 * Если пользователь ввел НЕ числа или операцию, которой нет в списке - спрашиваем все по новой, ДО ТЕХ ПОР ПОКА не введет правильно.
 *  Список операций:
 *   * - умножение
 *   + - добавление
 *   - - вычетание
 *   / - деление
 * */

// const isNumberInValid = (number) => {
//   if (number === null) {
//     return false;
//   }
//   number = +number;
//   if (!number) {
//     return true;
//   }
//   if (isNaN(number)) {
//     return true;
//   }
//   return number < 0;
// };

// let firstNum;
// while (isNumberInValid(firstNum)) {
//   firstNum = prompt("Enter the first number");
// }

// let secondNum;
// while (isNumberInValid(secondNum)) {
//   secondNum = prompt("Enter the second number!");
// }

// let operation = prompt(
//   "Enter the operation: addition, subtraction, multiplication, division"
// );
// while (
//   operation !== "+" &&
//   operation !== "-" &&
//   operation !== "*" &&
//   operation !== "/"
// ) {
//   operation = prompt("Enter operation correctly!");
// }
// alert(`${firstNum} ${operation} ${secondNum}`);

// let i = 0;

// do {
//   i++;
// } while (i < 5);
// console.log(i);

// for (; i < 5; i++) {
//   i++;
//   console.log(i);
// }

// for (i = 0; i < 5; ) {
//   i++;
//   console.log(i);
// }
