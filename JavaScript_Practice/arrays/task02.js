// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
  let arr = [];
  while (true) {
    const userNumber = prompt("Enter a number");
    if (userNumber === "" || isNaN(userNumber) || userNumber === null) {
      break;
    } else {
      arr.push(userNumber);
    }
  }
  let numb = 0;
  for (let elem of arr) {
    numb += +elem;
  }
  return numb;
}

console.log(sumInput());
