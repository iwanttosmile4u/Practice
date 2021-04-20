// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;
//   this.sell = function (thing) {
//     this.sales += 1;
//     return "Manager " + this.name + " sold" + thing;
//   };
// };
// const john = new Manager("John", 10);
// const mary = new Manager("Mary", 120);

// console.log(john.constructor.name);

// Прототип функції Manager:

// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;
// };
// Manager.prototype.sell = function (thing) {
//   this.sales += 1;
//   return "Manager " + this.name + " sold" + thing;
// };
// const john = new Manager("John", 10);
// const mary = new Manager("Mary", 120);
// console.log(john.sales, mary.sales);

// john.sell("Apple");
// mary.sell("Tomato");
// console.log(john.sales, mary.sales);

// let person = {
//   first: "John",
//   last: "Smith",
//   full: function () {
//     console.log(this.first + " " + this.last);
//   },
//   personTwo: {
//     first: "Allison",
//     last: "Jones",
//     full: function () {
//       console.log(this.first + " " + this.last);
//     },
//   },
// };
// person.full();
// person.personTwo.full();

// function Car(make, model) {
//   this.make = make;
//   this.model = model;
// }

// let myCar = new Car("Ford", "Escape");
// console.log(myCar);

// function add(c, d) {
//   console.log(this.a + this.b + c + d);
// }
// let ten = { a: 1, b: 2 };
// add.call(ten, 3, 4);

// add.apply(ten, [3, 4]);

// const listItem = document.getElementsByClassName("list__item");

// [].forEach.call(listItem, (el) => {
//   el.textContent = `какая-нибудь ахинея`;
//   console.log(el);
// });

/* ЗАДАЧА - 2
 * Создать объект пользователя со свойствами имени и возраста.
 * Добавить к этому объекту метод getLogin() написанный при помощи стрелочной функции
 * внутри метода обращаться к свойствам объекта только через this
 * Заставить этот метод работать.
 */

// const user = {
//   name: "Tom",
//   age: "25",
//   getLogin: () => {
//     return this.age + "10";
//   },
// };
// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.getLogin = () => {
//     return (this.name + this.age).toLowerCase();
//   };
// }
// const user1 = new User("John", 26);
// console.log(user1.getLogin.call());

// function hello() {
//   console.log("Hello", this);
// }

// const person = {
//   name: "Vladilen",
//   age: 25,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(window),
//   logInfo: function (job, phone) {
//     console.group(`${this.name} info:`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`);
//     console.log(`Phone is ${phone}`);
//     console.groupEnd();
//   },
// };

// const lena = {
//   name: "Olena",
//   age: 23,
// };

// person.logInfo.bind(lena, "Frontend", "096 456 90 87")();
// person.logInfo.call(lena, "Frontend", "096 456 90 87");
// person.logInfo.apply(lena, ["Frontend", "096 456 90 87"]);

// const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//   return arr.map(function (i) {
//     return i * n;
//   });
// }

// Array.prototype.multBy = function (n) {
//   return this.map(function (i) {
//     return i * n;
//   });
// };

// console.log(array.multBy(2));

// console.log(multBy(array, 5));
