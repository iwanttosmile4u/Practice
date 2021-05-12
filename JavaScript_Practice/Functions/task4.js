// Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.

let x = +prompt("Enter number");
let n = +prompt("Enter the pow");

function pow(x, n) {
  let result = x ** n;
  return result;
}

alert(pow(x, n));

// console.log(pow(3, 2));
// console.log(pow(3, 3));
// pow(1, 100) = 1 * 1 * ...* 1 = 1
