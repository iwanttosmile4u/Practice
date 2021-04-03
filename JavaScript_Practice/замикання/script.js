// let name = "John";
// function sayHi() {
//   alert("Hi, " + name);
// }
// name = "Pete";
// sayHi();

// function makeWorker() {
//   let name = "Pete";
//   return function () {
//     alert(name);
//   };
// }
// let name = "John";
// let work = makeWorker();
// work();

// function makeCounter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }
// let counter1 = makeCounter();
// let counter2 = makeCounter();
// alert(counter1());
// alert(counter1());
// alert(counter2());

// function sum(operation, ...numbers) {
//   const result = numbers.every((num) => typeof num === "number");
//   if (!result) {
//     throw new TypeError("not a number");
//   } else {
//     return operation(...numbers);
//   }
// }
// const check = sum(
//   function (...numbers) {
//     return numbers.reduce((acc, curr) => acc + curr);
//   },
//   90,
//   1,
//   100,
//   9,
//   10
// );
// console.log(check);

/**
 * ЗАДАНИЕ - 2
 *
 * Написать функцию-кнструктор для объектов типа Table.
 *
 * Аргументы:
 * 1 - название
 * 2 - наличие выдвижных полок
 * 3 - размеры столешницы в формате {x:10, y:20}
 * 4 - материал столешницы
 * 5 - материал ножек
 *
 * Если хотябы один из размеров столешницы является не целым числом - бросать исключение TypeError.
 * Если название материала нет в списке разрешенных материалов - бросать исключение.
 * Если материал ножек выбран НЕ метал, то проверить чтобы столешница была не из мрамора. В пртивном случае - бросать исключение.
 *
 * Разрешенный список материалов столешницы - дуб, ясень, мрамор, мрамор с инкрустрацией, мрамор с подогревом, МДФ
 * Список материалов ножек - метал, дуб, ясень, МДФ, мрамор
 */

function Table(name, polki, size, deskMaterial, legsMaterial) {
  const deskMaterials = [
    "дуб",
    "ясень",
    "мрамор",
    "мрамор с инкрустрацией",
    "мрамор с подогревом",
    "МДФ",
  ];
  const legsMaterials = ["метал", "дуб", "ясень", "МДФ", "мрамор"];
  if (
    !size ||
    !size.x ||
    !size.y ||
    !Number.isInteger(size.x) ||
    !Number.isInteger(size.y) ||
    size.x < 0 ||
    size.y < 0
  ) {
    throw new TypeError("wrong size");
  }
  const resultMaterials = deskMaterials.includes(deskMaterial);
  if (!resultMaterials) {
    throw new TypeError("wrong name of material");
  }
}
const someTable = new Table("ghghg", 2, null);
