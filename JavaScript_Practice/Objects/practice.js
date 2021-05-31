// const obj = {
//   age: 33,
//   set name(value) {
//     this._name = value;
//   },
//   get name() {
//       return this._name;
//   }
//   "hard skills": ["HTML", "CSS", "JS"],

//   getterHardSkills() {
//     return this["hard skills"];
//   },
//   getName: function () {
//     return this.name;
//   },
//   getAge() {
//     return this.age;
//   },
//   family: {
//     father: {
//       name: "John",
//       getFatherName: function () {
//         return this.name;
//       },
//     },
//   },
// };

// obj.name = "Roman";
// console.log(obj.name);
// console.log(obj["hard skills"]);
// console.log(obj.getAge());
// console.log(obj.getName());

// const obj2 = obj;

// obj2.name = "Tom";
// console.log(obj.name);
// console.log(obj2.name);

// const user = {};
// alert(user.noSuchProperty === undefined);

// let user = {
//   name: "John",
//   age: 30,
// };
// console.log("age" in user);

// const user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user);

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
// let schedule = {};
// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule));

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// console.log(multiplyNumeric());

const user = {
  name: "Tom",
  surname: "Ford",
  profession: "artist",
  sayHi() {
    console.log(
      `Hi! My name is ${user.name} and my surname is ${user.surname}`
    );
  },
  changeProperty(propertyName, newValue) {
    user[propertyName] = newValue;
  },
};
user.sayHi();
user.changeProperty("name", "John");
console.log(user.name);
