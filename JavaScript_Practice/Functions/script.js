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