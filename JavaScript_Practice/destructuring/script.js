// Деструктуризація об'єкта, використовувана як призначення функції:

// function displaySummary({
//   name,
//   scores: { maths = 0, english = 0, science = 0 },
// }) {
//   console.log("Hello, " + name);
//   console.log("Your Maths score is " + maths);
//   console.log("Your English score is " + english);
//   console.log("Your Science score is " + science);
// }

// Деструктуризуємо аргументи функції:

// function displaySummary({
//   name,
//   scores: { maths = 0, english = 0, science = 0 },
// }) {
//   console.log("Hello, " + name);
//   console.log("Your Maths score is " + maths);
//   console.log("Your English score is " + english);
//   console.log("Your Science score is " + science);
// }

// Приклад 1:

// const student = {
//   firstname: "Glag",
//   lastname: "Chinda",
//   country: "Nigeria",
// };
//  Деструктуруємо об'єкт:

// const { firstname, lastname, country } = student;
// console.log(firstname, lastname, country);

// Приклад 2:

// let country = "Canada";
// let firstname = "John";
// let lastname = "Doe";

// const student = {
//   firstname: "Glag",
//   lastname: "Chinda",
//   country: "Nigeria",
// };

// Перепризначаємо firstname і lastname за допомогою деструктуризації. Застосовуємо
// дужки, тому що це виражає значення.

// ({ firstname, lastname } = student);

// Країна буде незмінною - Canada:

// console.log(firstname, lastname, country);

// Приклад 3:

// const person = {
//   name: "John Doe",
//   country: "Canada",
// };

// Назначаємо дефолтне значення 25, якщо age - undefined:

// const { name: fullname, country: place, age: years = 25 } = person;
// console.log(`I am ${fullname} from ${place} and i am ${years} years old.`);

// Використання різних імен для змінних:

// const person = {
//   name: "John Doe",
//   country: "Canada",
// };
// Назначаємо дефолтне значення 25, якщо age - undefined:
// const { name: fullmane, country: place, age: years = 25 } = person;
// console.log(`i am ${fullmane} from ${place} and i am ${years} years old`);

// Деструктуризація вкладеного об'єкта:

// const student = {
//   name: "Joe Doe",
//   age: 16,
//   scores: {
//     maths: 74,
//     english: 63,
//   },
// };
// const {
//   name,
//   scores: { maths, science = 50 },
// } = student;
// console.log(
//   `${name} scored ${maths} in Maths and ${science} in Elementary Science`
// );

// Деструктуризація масивів

// Дефолтні значення:

// const rgb = [200];
// Назначаємо дефолтне значення 255 для red i blue:
// const [green, red = 255, blue = 255] = rgb;
// console.log(`G: ${green}, R: ${red}, B: ${blue}`);

// Пропускаємо змінні:

// const rgb = [200, 255, 100];
// Пропускаємо перших два елементиі назначаємо тільки третій елемент змінній blue:
// const [, , blue] = rgb;
// console.log(`Blue: ${blue}`);

// Елементи; rest

// const rainbow = [
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "indigo",
//   "violet",
// ];
// const [red, , yellow, ...otherColors] = rainbow;
// console.log(otherColors);

// Приклади дестуктуризації з відео:

// function calcValues(a, b) {
//   return [a + b, undefined, a * b, a / b];
// }
// const [sum, sub = "Nothing", mult, ...other] = calcValues(42, 10);
// const sum = result[0];
// const sub = result[1];
// const [sum, sub] = result;
// console.log(sum, sub, mult, other);

// Змінити місцями елементи масиву:
// const [k, b] = ["kefir", "bulka"];
// const food2 = [b, k];
// console.log(food2);

/* ЗАДАЧА - 1
 * Создать объект пользователя с его данными - имя, фамилия, дата рождения, о себе.
 * Создать по переменной для каждого из свойств объекта пользователя.
 * Выполнить задание И самым "в лоб" способом, И используя деструктуризацию
 *
 * ПРОДВИНУТАЯ СЛОЖНОСТЬ: при помощи деструктуризации сохранить значение каждого свойства объекта в переменную, имя которой отличается от названия свойства.
 * Если искомого свойства нет в объекте - по умолчанию в переменную присваивать пустую строку.
 * */

// let firstName = "Tom";
// let lastName = "Jons";
// let birthday = "20 of August";
// let userInfo = "books, movies, music";

// let person = {
//   firstName: "Tom",
//   lastName: "Jons",
//   birthday: {
//     day: 20,
//     month: 8,
//   },
//   userInfo: "books, movies, music",
// };

// ({
//   firstName,
//   lastName,
//   birthday: { day, month, year },
//   userInfo,
// } = person);

// console.log(
//   `I am ${firstName} ${lastName}. My date of birth is ${day}.${month}. I like ${userInfo}.`
// );

// Задача 2 і 3:

/* ЗАДАЧА - 3
 * У нас есть массив участников конкурса (в качестве него может выступать массив clickedLeads из прошлой задачи). По результатам конкурса выиграли только первые четыре участника из массива.
 * НАПИСАТЬ ФУНКЦИЮ, которая принимает аргументом массив участников,
 * после ее вызова на экране должны появиться только победители и перед списком победителей заголовок - WINNERS
 * имена остальных участников на странице должны появиться после заголовка LOSERS.
 */

// let fbLeeds = [
//   { name: "John", age: 23 },
//   { name: "Mia", age: 18 },
//   { name: "Leo", age: 70 },
//   { name: "Ed", age: 30 },
// ];

// let googleLeeds = [
//   { name: "Kiki", age: 27 },
//   { name: "Otto", age: 20 },
//   { name: "Ivan", age: 31 },
//   { name: "Bobbi", age: 30 },
// ];

// const allUsers = [...fbLeeds, ...googleLeeds];

// const userStr = (user) => `<div>
// <h3>${user.name}</h3>
// <p>${user.age}</p></div>`;

// function castPeople(people) {
//   const [winner, winner1, winner2, winner3, ...losers] = people;

//   document.body.insertAdjacentHTML("afterbegin", userStr(winner3));
//   document.body.insertAdjacentHTML("afterbegin", userStr(winner2));
//   document.body.insertAdjacentHTML("afterbegin", userStr(winner1));
//   document.body.insertAdjacentHTML("afterbegin", userStr(winner));

//   document.body.insertAdjacentHTML("afterbegin", "<h2>LOSERS</h2>");

//   losers.forEach((user) =>
//     document.body.insertAdjacentHTML("afterbegin", userStr(user))
//   );

//   document.body.insertAdjacentHTML("afterbegin", "<h2>WINNERS!</h2>");
// }
// castPeople(allUsers);

/* ЗАДАЧА - 4
 * Написать функцию, возвращаемым значением которой является объект простой кофемашины.
 *
 * Это задание для команд по 4 человека
 *
 * Функционал кофемашины:
 * 1 - хранит запасы продуктов в свойствах - milk, sugar, water, coffee. запасы перевычисляются каждый раз после выдачи напитка.
 * 2 - содержит метод getDrinkPrice(drinkName), где аргумнет drinkName содержит имя напитка, стоимость которого должен вернуть метод.
 * 3 - содержит метод recalculateSupplies(drink), где аргумент drink содержит в себе объект напитка с "рецептом" его приготовления
 * 4 - render метод, который появляет кофемашину на экране. тут должны происходить создание всех элементов, котрые появятся на странице
 *
 * на странице должны отображаться поле для ввода и кнопка ОК.
 * после того как пользователь ввел имя напитка - нужно найти нужный напиток в списке рецептов кофемашины, понять хватит ли припасов.
 * если припасов не хватит для пригоотовление - уведомить пользователя.
 * если припасов хватат - через 2 секунды вывести на экран пользователю `Here is your drink ${drinkName}`.
 * если такого напитка нет - показать сообщение о некорректном вводе и очистить инпут от значения.
 */

// function coffeMachine() {
//   return {
//     elements: {
//       form: document.createElement("form"),
//       input: document.createElement("input"),
//       button: document.createElement("button"),
//     },
//     milk: 1000,
//     sugar: 1000,
//     water: 5000,
//     coffee: 2000,
//     recipes: [
//       {
//         name: "Latte",
//         milk: 150,
//         sugar: 20,
//         water: 200,
//         coffee: 50,
//       },
//       {
//         name: "Decaf",
//         milk: 0,
//         sugar: 0,
//         water: 300,
//         coffee: 100,
//       },
//       {
//         name: "Kill my sleep",
//         milk: 0,
//         sugar: 0,
//         water: 50,
//         coffee: 150,
//       },
//       {
//         name: "No lactose latte",
//         milk: 250,
//         sugar: 0,
//         water: 0,
//         coffee: 50,
//       },
//     ],

//     getDrinkPrice() {},

//     recalculateSupplies(drink) {
//       let { milk, sugar, water, coffee } = drink;
//       this.milk -= milk;
//       this.sugar -= sugar;
//       this.water -= water;
//       this.coffee -= coffee;
//     },

//     checkSupplies(recipe) {
//       const { water, milk, sugar, coffee } = this;
//       const {
//         water: recWater,
//         milk: recMilk,
//         sugar: recSugar,
//         coffee: recCoffee,
//       } = recipe;
//       return (
//         water >= recWater &&
//         milk >= recMilk &&
//         sugar >= recSugar &&
//         coffee >= recCoffee
//       );
//     },

//     findDrink(drinkName) {
//       let { recipes } = this;
//       return recipes.find((d) => d.name === drinkName);
//     },

//     workLogic(drinkName) {
//       const drinkRecipe = this.findDrink(drinkName);

//       if (!drinkRecipe) {
//         alert("Bad name!");
//         this.elements.input.value = "";
//         return;
//       }

//       if (this.checkSupplies(drinkRecipe)) {
//         this.recalculateSupplies(drinkRecipe);
//         alert(`Here is your drink - ${drinkRecipe.name}`);
//       } else {
//         alert("Not enough supplies!");
//       }
//     },

//     render() {
//       let { input, button, form } = this.elements;

//       form.append(input, button);

//       button.addEventListener("click", (e) => {
//         e.preventDefault();
//         this.workLogic(input.value);
//       });
//       document.body.prepend(form);
//     },
//   };
// }

// const myCM = coffeMachine();
// myCM.render();

// Завдання 1:
// const clients1 = [
//   "Гилберт",
//   "Сальваторе",
//   "Пирс",
//   "Соммерс",
//   "Форбс",
//   "Донован",
//   "Беннет",
// ];
// const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

// const allClients = [...new Set([...clients1, ...clients2])];
// console.log(allClients);

// Завдання 2:

// const characters = [
//   {
//     name: "Елена",
//     lastName: "Гилберт",
//     age: 17,
//     gender: "woman",
//     status: "human",
//   },
//   {
//     name: "Кэролайн",
//     lastName: "Форбс",
//     age: 17,
//     gender: "woman",
//     status: "human",
//   },
//   {
//     name: "Аларик",
//     lastName: "Зальцман",
//     age: 31,
//     gender: "man",
//     status: "human",
//   },
//   {
//     name: "Дэймон",
//     lastName: "Сальваторе",
//     age: 156,
//     gender: "man",
//     status: "vampire",
//   },
//   {
//     name: "Ребекка",
//     lastName: "Майклсон",
//     age: 1089,
//     gender: "woman",
//     status: "vempire",
//   },
//   {
//     name: "Клаус",
//     lastName: "Майклсон",
//     age: 1093,
//     gender: "man",
//     status: "vampire",
//   },
// ];

// const charactersShortInfo = characters.map(({ name, lastName, age }) => ({
//   name,
//   lastName,
//   age,
// }));
// console.log(charactersShortInfo);

// Завдання 3:

// const user1 = {
//   name: "John",
//   years: 30,
// };

// const { name, years: age, isAdmin = false } = user1;
// console.log(name, age, isAdmin);

// Завдання 4:

// const satoshi2020 = {
//   name: "Nick",
//   surname: "Sabo",
//   age: 51,
//   country: "Japan",
//   birth: "1979-08-21",
//   location: {
//     lat: 38.869422,
//     lng: 139.876632,
//   },
// };

// const satoshi2019 = {
//   name: "Dorian",
//   surname: "Nakamoto",
//   age: 44,
//   hidden: true,
//   country: "USA",
//   wallet: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
//   browser: "Chrome",
// };

// const satoshi2018 = {
//   name: "Satoshi",
//   surname: "Nakamoto",
//   technology: "Bitcoin",
//   country: "Japan",
//   browser: "Tor",
//   birth: "1975-04-05",
// };

// const fullProfile = { ...satoshi2018, ...satoshi2019, ...satoshi2020 };
// console.log(fullProfile);

// Завдання 5:

// const books = [
//   {
//     name: "Harry Potter",
//     author: "J.K. Rowling",
//   },
//   {
//     name: "Lord of the rings",
//     author: "J.R.R. Tolkien",
//   },
//   {
//     name: "The witcher",
//     author: "Andrzej Sapkowski",
//   },
// ];

// const bookToAdd = {
//   name: "Game of thrones",
//   author: "George R. R. Martin",
// };

// const addNewBook = [...books, bookToAdd];
// console.log(addNewBook);

// Завдання 6:

// const employee = {
//   name: "Vitalii",
//   surname: "Klichko",
// };
// const renewedEmployee = { ...employee, age: 49, salary: "$2000" };
// console.log(renewedEmployee);

// Завдання 7:

// const array = ["value", () => "showValue"];
// const [value, showValue] = array;

// alert(value);
// alert(showValue());
