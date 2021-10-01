/* ЗАДАНИЕ - 2
 * Написать функцию которая будет принимать два аргумента - число с которого начать отсчет и число до которого нужно досчитать.
 * Под отсчетом имеется в виду последовательный вывод чисел в консоль с увеличением на единицу.
 */

function countRange(start, end) {
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  for (i = start; i <= end; i++) {
    console.log(i);
  }
}
countRange(+prompt("Enter start number"), +prompt("Enter end number"));
