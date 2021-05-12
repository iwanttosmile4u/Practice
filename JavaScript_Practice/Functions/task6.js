/* ЗАДАНИЕ - 2
* Написать функцию которая будет принимать два аргумента - число с которого начать отсчет 
и число до которого нужно досчитать.
* Под отсчетом имеется в виду последовательный вывод чисел в консоль с увеличением на единицу.
*/

function countNumbers(startNumber, endNumber) {
  if (startNumber > endNumber) {
    let temp = startNumber;
    startNumber = endNumber;
    endNumber = temp;
  }
  for (let i = startNumber; i < endNumber; i++) {
    console.log(i);
  }
}
console.log(countNumbers(30, 10));
