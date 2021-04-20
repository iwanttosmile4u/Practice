/**
 * ЗАДАНИЕ - 1
 *
 * Написать функцию суммирования.
 * Аргументы:
 * 1 - callback функция с операцией
 * 2 и все последующие - числа с которыми ее нужно выполнить
 *
 * Возщвращаемое значение = возвращаемое значение callback функции
 *
 * В случае если хотябы один из аргументов является НЕ числом - выбрасывать исключение TypeError
 */

function summ(operarion, ...numbers) {
  const result = numbers.every((num) => typeof num === "number");

  if (!result) {
    throw new TypeError("Not a number");
  } else {
    return operarion(...numbers);
  }
}
console.log(
  summ(
    function (...args) {
      return args.reduce((acc, curr) => acc + curr);
    },
    90,
    60,
    10,
    50,
    100
  )
);
