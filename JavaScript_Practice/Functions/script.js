/* ЗАДАНИЕ - 1
 * Написать функцию суммирования.
 * Принимает аргументы: первое число и второе число
 * Возвращаемое функцией значение: сумма двух аргументов
 * */

// function sum(a, b) {
//   return a + b;
// }
// let result = sum(4, 5);
// console.log(result);

/* ЗАДАНИЕ - 2
 * Написать функцию которая будет принимать два аргумента - число с которого начать отсчет и число до которого нужно досчитать.
 * Под отсчетом имеется в виду последовательный вывод чисел в консоль с увеличением на единицу.
 */

// function countRange(start, end) {
//   if (start > end) { - тут ми робимо перевірку просто, переверталка, якщо просто
//     let temp = start;
//     start = end;
//     end = temp;
//   }
//   for (let i = start; i <= end; i++) {
//     console.log(i);
//   }
// }
// countRange(45, 90);

/* ЗАДАНИЕ - 3
 * Написать функцию, которая будет суммировать ВСЕ числа, которые будут переданы ей в качестве аргументов.
 * */
//   console.log(arguments);
//   console.log(arguments.length);

// function sumAll() {
//   let res = 0;
//   for (let item of arguments) {
//     res = res + item;
//   }
//   return res;
// }
// console.log(sumAll(2, 3, 4, 5));

/* ЗАДАНИЕ - 4
 * Написать функцию, которая из всех переданных аргументов возвращает только выбранный тип данных.
 * Аргументы:
 *   1 - выбранный тип данных, который нужно отоборать
 *   2 и далее - елементы, из которых нужно отобрать
 *
 * ДОП. ЗАДАНИЕ: Написатьвторую реали зацию, где элементы из которых нужно отбирать переданы в массиве.
 * */
// function getData() {
//   let res = [];
//   let type = arguments[0];

//   for (let i = 1; i < arguments.length; i++) {
//     if (typeof arguments[i] === type) {
//       res.push(arguments[i]);
//     }
//   }
//   return res;
// }
// let res = getData("number", 2, 3, 44, null, "5", 404, "909", "");
// console.log(res);

// function getData(arg) {
//   return arg + "s";
// }
// let cup = prompt("Enter your number");
// cup = getData(cup);
// console.log(cup);

// function argsLength() {
//   return arguments.length;
// }
// console.log(argsLength(1, "as"));

// function count(start, end) {
//   if (start > end) {
//     console.log("Error! Counting is unreal");
//     return;
//   } else if (start === end) {
//     console.log("Error! There is nothing to count");
//     return;
//   } else {
//     console.log("Counting begin");
//   }
//   for (let counter = start; counter <= end; counter++) {
//     console.log(counter);
//   }
//   console.log("Counting finish");
// }
// count(5, 8);

// return  пишемо, щоб не доходити до циклу

// function countAdvanced(start, end, thirdParam) {
//   if (arguments.length === 3) {
//     if (
//       start &&
//       !isNaN(+start) &&
//       end &&
//       !isNaN(+end) &&
//       thirdParam &&
//       !isNaN(+thirdParam)
//     ) {
//       if (start > end) {
//         console.log("Error! Counting is unreal");
//         return;
//       } else if (start === end) {
//         console.log("Error! There is nothing to count");
//         return;
//       } else {
//         console.log("Counting begin");
//       }

//       for (let counter = start; counter <= end; counter++) {
//         if (counter % thirdParam === 0) {
//           console.log(counter);
//         }
//       }

//       console.log("Counting finish");
//     } else {
//       console.log("Enter the number");
//     }
//   } else {
//     console.log("Error! Enter the third number");
//   }
// }
// countAdvanced(5, 15, 25);

// function summArgs() {
//   let summ = 0;
//   if (arguments.length < 2) {
//     console.log("Error! Not enough arguments");
//     return;
//   } else {
//     for (let arg = 0; arg < arguments.length; arg++) {
//       arguments[arg];
//       if (!isNaN(+arguments[arg]) && typeof arguments[arg] === "number") {
//         summ += arguments[arg];
//       } else {
//         console.log(`Index ${arguments[arg]} element ${arg} is not a number`);
//         return;
//       }
//     }
//     return summ;
//   }
// }
// console.log(summArgs(1, 2, 3, 4, 5, true, 7, 8));
