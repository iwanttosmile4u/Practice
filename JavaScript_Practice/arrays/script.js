// let arr = ["Apples", "Oranges", "Bananas"];

// Змінили другий елемент (Банани) на Виноград:
// arr[2] = "Grapes";

// Додаємо новий елемент в масив:
// arr[3] = "Lemons";
// alert(arr);

// console.log(arr[0]); - звертаємося до окремого елемента
// console.log(arr[1]);
// console.log(arr[2]);

// У масиві можуть зберігатися елементи будь-якого типу:
// let arr = [
//   "Apple",
//   { name: "John" },
//   true,
//   function () {
//     alert("hello");
//   },
// ];

// Отримати елемент з індексом 1 (об'єкт) і потім показати його властивість:
// alert(arr[1].name);

// Отримати елемент з індексом 3 (функція) і виконати її:
// arr[3]();

// let arr = ["Apples", "Oranges", "Bananas"];
// alert(arr.pop()); - використовуємо метод pop і видаляємо останній елемент з масиву й відразу виводимо його (елем., що видалиться)
// alert(arr);

// let arr = ["Apples", "Oranges", "Bananas"];
// alert(arr.shift()); - видаляємо перший елемент з масиву (Apples) і відразу виводимо його
// alert(arr);

// let fruits = [];
// fruits[99999] = 5;
// fruits.age = 25;
// console.log(fruits);

// let fruits = ["Apples", "Oranges", "Bananas"];
// for (let fruit of fruits) {
//   alert(fruit);
// }

// Це метод splice - видаляємо один елемент із масиву:
// let arr = ["I", "am", "studing", "JavaScript"];
// arr.splice(1, 1); - починаючи з позиції 1 видалити один елемент
// console.log(arr);

// let arr = ["I", "am", "studing", "JavaScript"];
// arr.splice(1, 2); - починаючи з позиції 1 видалити два елементи
// console.log(arr);

// let arr = ["I", "am", "studing", "JavaScript"];
// arr.splice(1, 3, "here", "and", "now"); - видалили три елементи, починаючи з першої позиції і замінили їх на "here", "and", "now"
// alert(arr);

// let arr = ["I", "am", "studing", "JavaScript"];
// arr.splice(4, 0, "here", "and", "now"); - тут без видалення ми просто додаємо ще елементи, починаючи з позиції 4
// alert(arr);

// Метод concat:
// let arr = [1, 2];

// // Створити масив із arr та [3,4]:
// alert(arr.concat([3, 4]));

// // Створити масив із arr та [3,4] і [5,6]:
// alert(arr.concat([3, 4], [5, 6]));

// // Створити масив із arr та [3,4], а потім додати значення 5 і 6:
// alert(arr.concat([3, 4], 5, 6));

// Например, у нас есть массив пользователей, каждый из которых имеет поля id и name. Попробуем найти того, кто с id == 1:

// Метод find:
// let users = [
//   { id: 1, name: "Tom" },
//   { id: 2, name: "Ben" },
//   { id: 3, name: "Ann" },
// ];
// let user = users.find((item) => item.id == 1);
// alert(user.name);

// Метод filter:
// let users = [
//   { id: 1, name: "Tom" },
//   { id: 2, name: "Ben" },
//   { id: 3, name: "Ann" },
// ];
// let someUsers = users.filter((item) => item.id < 3);
// alert(someUsers.length); - поверне 2

// const users = [
//   { name: "Gogs-1" },
//   { name: "Gogs-2" },
//   { name: "Gogs-3" },
//   { name: "Gogs-4" },
//   { name: "Gogs-5" },
//   { name: "Gogs-6" },
// ];
// function forEachElem(sourceArray, callBack) {
//   for (let i = 0; i < sourceArray.length; i++) {
//     callBack(sourceArray[i], i, sourceArray);
//   }
// }
// forEachElem(users);

// ну два останні просто а перший ти створюєш пустий арай, потім пробігаєшся фор циклом по тому що прийшов і пушиш по одному елементи в новий

// друге - просто робиш ретурн отриманого арая з викликом мапа

// третє те що всі використовуюють return [...receivedArray]

/* TASK - 1
 * Create a function that does not receive any arguments
 * it will only ask the user what dishes he prefers to eat on breakfast.
 * User can enter only one dish simultaneously, so you need to ask him UNTIL he will enter 'end'.
 * Each dish needs to be placed into an array.
 * Return value: array with all of the dishes.
 * */

// function getData() {
//   let dishes = [];
//   let dish = prompt("Enter some dish");
//   while (dish !== "end") {
//     dishes.push(dish);
//     dish = prompt("Please, enter some dish");
//   }
//   return dishes;
// }
// console.log(getData());

/* TASK - 2
 * Create a function that will take one argument - array from the previous task result. - масив, який з'явл в результ виконання завд 1
 * The task is to show every dish from the array in the console and delete it from the source array.
 * After all of the dishes will be shown on the console, the array must be empty.
 * */

// function showDishes (dishes) {
//     let dishes = [];
//     let dish = prompt("Enter some dish");
//   while (dish !== "end") {
//     dishes.push(dish);
//     dish = prompt("Please, enter some dish");
//   }
//   return dishes;
//     for (let = 0; i < dishes.length; i++) {

//     }
// }

/* TASK - 3
 * Create a function that will receive an array as a single argument.
 * return value: new array, which is the exact copy of the source one.
 * Task needs to be done using: for, map(), spread operator. It means three implementations.
 */

// function createArray(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i]);
//   }
//   return result;
// }
// console.log(createArray([1, 2, 3, 4, 5, 6]));

// function createArrayMap(arr) {
//   return arr.map((item) => item);
// }

// function c(arr) {
//   return [...arr];
// }

// console.log(b([1, 2, 3, 4, 5, 6]));
