// Метод splice:
// const arr = ["I", "learn", "Js"];
// arr.splice(1, 1);
// console.log(arr);

// Видаляємо перші три елементи масиву і заміняємо їх на два інші:
// const arr = ["I", "learn", "Js", "right", "now"];
// arr.splice(0, 3, "Let`s", "dance");
// console.log(arr);

// Повертаємо масив із видалених елементів:
// const arr = ["I", "learn", "Js", "right", "now"];
// const removed = arr.splice(0, 2);
// console.log(removed);

// Можна додати елементи у масив без видалення - достатньо встановити deleteCount у 0:
// const arr = ["I", "learn", "Js", "right", "now"];
// arr.splice(2, 0, "so", "difficult");
// console.log(arr);

// Метод slice

// const arr = ["I", "learn", "Js", "right", "now"];
// const changed = arr.slice(1, 3);
// console.log(changed);

// Метод concat:

// Якщо об'єкт має спеціальну властивість Symbol.isConcatSpreadable, тоді він обробляється concat, як масив.
// Також для коректної обробки в об'єкті має бути вказана властивість length:

// let arr = [1, 2];
// let arrayLike = {
//   0: "something",
//   1: "else",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2,
// };
// const changed = arr.concat(arrayLike);
// console.log(changed);

// let arr = [1, 2];

// // створюємо масив із [3,4] і arr:
// const changedArr = arr.concat([3, 4]);
// console.log(changedArr);

// const arr = [1, 2];
// arr.forEach((i) => {
//   i++;
//   console.log(i);
// });

// Пошук у масиві:

// const arr = [1, 2, false];
// console.log(arr.indexOf(0));
// console.log(arr.indexOf(false));
// console.log(arr.includes(1));

// Метод arr.find():
// const users = [
//   { id: 1, name: "Tom" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Piter" },
// ];
// const user = users.find((i) => {
//   return i.id === 1;
// });
// console.log(user.name);

// Метод filter():

// const users = [
//   { id: 1, name: "Ann" },
//   { id: 2, name: "Tom" },
//   { id: 3, name: "Bred" },
// ];
// const result = users.filter((person) => {
//   return person.id < 3;
// });
// console.log(result.length);

// Методи split() і join():

// const names = "Ann, Robert, Alisia";
// const arr = names.split(", ");
// console.log(arr);
// for (let name of arr) {
//   console.log(`This message will be send to: ${name}.`);
// }

// По відео про методи масивів від Мініна

// const people = [
//   { name: "Vlad", age: 33, budget: 330000 },
//   { name: "Tom", age: 16, budget: 20000 },
//   { name: "Ann", age: 24, budget: 41000 },
//   { name: "Cris", age: 35, budget: 65000 },
//   { name: "Piter", age: 17, budget: 11000 },
// ];

// map

// const newPeople = people.map((person) => `${person.name} (${person.age})`);
// console.log(newPeople);

// filter
// const adults = people.filter((person) => {
//   if (person.age >= 18) {
//     return true;
//   }
// });
// console.log(adults);

// reduce

// let amount = 0;
// for (let i = 0; i < people.length; i++) {
//   amount += people[i].budget;
// }
// const amount = people.reduce((total, person) => {
//   return total + person.budget;
// }, 0);
// console.log(amount);

//find

// const cris = people.find((person) => person.name === "Cris");
// console.log(cris);

//findIndex

// const crisIndex = people.findIndex((person) => person.name === "Cris");
// console.log(crisIndex);

// =========

// const amount = people
//   .filter((person) => person.budget > 21000)
//   .map((person) => {
//     return {
//       info: `${person.name} (${person.age})`,
//       budget: person.budget,
//     };
//   })
//   .reduce((total, person) => total + person.budget, 0);

// console.log(amount);

// По відео Сергія Пузанкова

// forEach

// const items = ["item1", "item2", "item3"];
// const copy = [];

// for (let i = 0; i < items.length; i++) {
//   copy.push("New " + items[i]);
// }

// items.forEach((elem, index) => {
//   copy.push(index + "New " + elem);
// });

// console.log(copy);

//filter

// let array = [12, 5, 8, 130, 44];
// let isBigEnough = (elem) => elem > 15;

// let newArray = array.filter(isBigEnough);
// console.log(newArray);

// map

// const nums = [1, 4, 9, 12, 50];
// const multiplyByTwo = (elem) => elem * 2;
// const result = nums.map(multiplyByTwo);
// console.log(result);

// reduce

// const array = [1, 2, 3, 4, 5];
// const total = array.reduce((acc, elem) => {
//   return acc + elem;
// }, 10);
// console.log(total);

// Лекція Марченка

// const arr = [1, 2, "text", true, undefined, {}, ["a", "b"]];
// arr[9] = "9";
// console.log(arr);

// Перебір forEach:
// arr.forEach((el, i) => {
//   //   el = i;
//   arr[i] = i;
//   console.log(el);
// });
// console.log(arr);

// ========

// arr.splice(4, 0, "splice element");
// console.log(arr);

// const res = arr.slice(4, 7);
// console.log(res);

// const res = arr.concat(arr, "arr3");
// console.log(res);

// const filteredArr = arr.filter((item) => {
//   return typeof item === "number";
// });
// console.log(filteredArr);

// const newMappedArr = arr.map((element) => {
//   return `${element}`;
// });
// console.log(newMappedArr);

// const days = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];
// for (let i = 0; i < days.length; i++) {
//   console.log(days[i]);
// }

// for (let day of days) {
//   console.log(day);
// }

// days.forEach((item) => console.log(item));

// const days = {
//   en: [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ],
//   ua: [
//     "Понеділок",
//     "Вівторок",
//     "Середа",
//     "Четвер",
//     "П'ятниця",
//     "Субота",
//     "Неділя",
//   ],
//   ru: [
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четвер",
//     "Пятница",
//     "Субота",
//     "Неделя",
//   ],
// };

// function organaiser(language) {
//   const langs = Object.keys(days);
//   const findLang = langs.find((item) => item === language);
//   const arrOfDays = days[findLang];
//   arrOfDays.forEach((element) => {
//     console.log(element);
//   });
// }
// const userLang = prompt("Enter the lenguage");
// organaiser(userLang);

// Task 3
//function mergeArrays(...args) {
//   let error = false;
//   let resulrArr = [];
//   args.forEach((item, index) => {
//     if (!Array.isArray(item)) {
//       console.log(`Your element ${index + 1} is not an array`);
//       error = !error;
//       return;
//     }
//   });
//   if (error) {
//     return;
//   }
//   args.forEach((arr) => {
//     resultArr = resulrArr.concat(...arr);
//   });
//   return resulrArr;
// }
// console.log(mergeArrays([1, 2], [3, 4, 5]));

// Task 4

// let storage = [
//   "apple",
//   "water",
//   "banana",
//   "pineapple",
//   "tea",
//   "cheese",
//   "coffee",
// ];
// function replaceItems(deletedProduct, addedProduct) {
//   if (!storage.find((value) => value === deletedProduct)) {
//     console.log("Product not found");
//     return;
//   }
//   if (!Array.isArray(addedProduct)) {
//     console.log("New product is not array");
//     return;
//   }
//   storage.splice(storage.indexOf(deletedProduct), 1, ...addedProduct);
// }
// replaceItems("water", ["lemon", "watermelon"]);
// console.log(storage);

// За відео Тимура Шемседінова:

const arr = ["a", "b", "c"];
console.log(arr.every((el) => el > "a"));
