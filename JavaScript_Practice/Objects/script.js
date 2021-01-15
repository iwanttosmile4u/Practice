// let user = {
//   name: "Vlad",
//   "second name": "Dracula",
//   age: 400,
//   marrige: false,
// };
// console.log(user);

// Создать объект student, у которого будут такие свойства: имя (name), фамилия (last name),
// коэффициент лени (laziness) равный 4 и коэффициент хитрости (trick) равный 5. Вывести его в консоль.

// let student = {
//   name: "Tom",
//   "last name": "Ford",
//   laziness: 4,
//   trick: 5,
// };
// console.log(student);

// Задача 2
// Cоздать объект product c такими полями: name, full name, price,
// availability (есть ли на складе) со значение false,
// и additional gift (подарок к покупке) со значением null. Вывести его в консоль.

// let product = {
//   name: "Laptop",
//   "full name": "MacBook Air 2017",
//   price: 22000,
//   availability: false,
//   "additional gift": null,
// };
// console.log(product);

// let user = {
//   name: "Vlad",
//   "second name": "Dracula",
//   age: 400,
//   marrige: false,
// };
// console.log(user.name);
// console.log(user["second name"]);
// console.log(user.age);
// console.log(user.marrige);

// user.age = 401;
// user["second name"] = "Tsepysh";
// user.marrige = "not defended";
// console.log(user);

// Задача 3
// Скопируйте объект student из задачи 1, напишите после его создания такой код: если коэффициент лени больше или равен 3,
// и при этом меньше или равен 5, а коэффициент хитрости меньше или равен 4 - вывести в консоль сообщение
// "Cтудент имяСтудента фамилияСтудента отправлен на пересдачу".

// let student = {
//   name: "Tom",
//   "last name": "Ford",
//   laziness: 4,
//   trick: 5,
// };
// console.log(student);
// if (student.laziness >= 3 && student.laziness <= 5 && student.trick <= 4) {
//   console.log(
//     `Student ${student.name} ${student["last name"]} is going to the next exam`
//   );
// }

// Задача 4
// Скопируйте объект student из задачи 1, после чего напишите такой код:

// измените коэффициент лени на 6, а коэффициент хитрости - на 3;
// если коэффициент лени больше или равен 5, а коэффициент хитрости меньше 4,
// вывести в консоль сообщение "Cтудент имяСтудента фамилияСтудента передан в военкомат".

// let student = {
//   name: "Tom",
//   "last name": "Ford",
//   laziness: 4,
//   trick: 5,
// };

// console.log(student);
// student.laziness = 6;
// student.trick = 3;

// if (student.laziness >= 5 && student.trick < 4) {
//   console.log(
//     `Студент ${student.name} ${student["last name"]} передан в военкомат`
//   );
// }

// const person = {
//   name: "Rik",
//   "last name": "Alba",
//   "eyes color": "green",
//   "hair color": "black",
//   "сімейний статус": "НІКОЛИ",
// };
// let marrige = "сімейний статус";
// console.log(person[marrige]);

// const person = {
//   name: "Rik",
//   "last name": "Alba",
//   "eyes color": "green",
//   "hair color": "black",
//   "сімейний статус": "НІКОЛИ",
// };
// console.log(person.wife);

/* ЗАДАНИЕ - 2
 * Добавить к предыдущему заданию функционал.
 * В возвращаемом объекте должен быть метод, который увеличивает возраст на 1.
 * Т.е. внутри объекта будет свойство\ключ, значением которого будет являться функция,
 * которая увеличивает поле age ЭТОГО объекта на 1
 * */

/* ЗАДАНИЕ - 3
 * Добавить к предыдущему заданию функционал.
 * В возвращаемом объекте должен появиться еще один метод - addField(). Он будет добавлять свойства в объект.
 * Т.е. внутри объекта будет еще одно свойство\ключ, значением которого будет являться функция.
 * Эта функция принимает два аргумента:
 *   1 - имя свойства, которое будет создаваться
 *   2 - значение. которое туда должно быть записано
 * */

// function createUser(userName, userAge) {
//   return {
//     name: userName,
//     age: userAge,
//     increaseAge: function () {
//       this.age++;
//     },
//     addField: function (propertyName, propertyValue) {
//       this[propertyName] = propertyValue;
//     },
//   };
// }
// let name = prompt("Enter your name");
// let age = prompt("Enter your age");

// let user = createUser(name, age);
// console.log(user);

// user.increaseAge();
// user.addField("pets", null);
// console.log(user);

// ДЗ
// далі два промпта всередині функції
// toLowerCase

// Задача 5
// Создать объект danItStudent, у которого будут такие свойства: имя, фамилия, количество сданных домашних работ.
// Спросить у пользователя "Что вы хотите узнать о студенте?" и вывести в консоль эту информацию.

// let danItStudent = {
//   name: "Tania",
//   "last name": "Panasiuk",
//   "number of submitted homework": 7,
// };
// let userInfo = prompt("What do you know about Dan-it student?");
// console.log(danItStudent[userInfo]);

// Задача 6
// Создать объект danItStudent, у которого будут такие свойства: имя, фамилия, количество сданных домашних работ.
// Вывести объект в консоль. После чего сначала спросить у пользователя "Какое свойство вы хотите изменить?",
// потом - "На какое значение?". Изменить требуемое свойство и вывести объект в консоль.

// let danItStudent = {
//   name: "Tania",
//   "last name": "Panasiuk",
//   "number of submitted homework": 7,
// };
// console.log(danItStudent);

// let changeProperty = prompt("What do you want to change?");
// let newPropertyValue = prompt("Enter new value");

// danItStudent[changeProperty] = newPropertyValue;
// console.log(danItStudent);

// Задача 7
// Создать объект danItStudent, у которого будут такие свойства: имя, фамилия, количество сданных домашних работ.
// Вывести объект в консоль. После чего спрашивать у пользователя в цикле два вопроса - "Какое свойство вы хотите изменить?",
// потом - "На какое значение?". Цикл может иметь максимум 3 итерации.
// Если пользователь нажмет Cancel на любой из вопросов - досрочно прервать цикл. Вывести объект в консоль.

// let danItStudent = {
//   name: "Tania",
//   "last name": "Panasiuk",
//   "number of submitted homework": 7,
// };
// console.log(danItStudent);

// let changeProperty, newPropertyValue;
// for (let i = 0; i < 3; i++) {
//   changeProperty = prompt("What do you want to change?");
//   if (!changeProperty) {
//     break;
//   }
//   newPropertyValue = prompt("Enter new value");
//   if (!newPropertyValue) {
//     break;
//   }
//   danItStudent[changeProperty] = newPropertyValue;
// }
// console.log(danItStudent);

// const person = {
//   name: "Rik",
//   "last name": "Alba",
//   "eyes color": "green",
//   "hair color": "black",
//   "сімейний статус": "НІКОЛИ",
//   "право на трон": undefined,
// };
// if (person["право на трон"] === undefined) {
//   console.log("Роке Алва немає ніяких прав на трон!");
// }
// if ("право на трон" in person) {
//   console.log("У Роке Алва є права на трон!");
// }
// if (!("wife" in person)) {
//   console.log("У Першого маршала Теліга нема дружини! Ви маєте шанс!");
// }

// Задача 8
// Создать объект danItStudent, у которого будут такие свойства: имя, фамилия, количество сданных домашних работ.
// Вывести объект в консоль. После чего спросить у пользователя "Какое свойство вы хотите изменить?",
// и если у объекта такого свойства нет - переспрашивать с сообщением "имяСвойства у объекта нет.
// Напишите, пожалуйста, правильное свойство объекта" пока пользователь не введет имя существующего свойства
// объекта или не нажмет Cancel. Если пользователь не нажал Cancel, спросить "Какое значение вы хотите присвоить этому свойству?".
// Изменить требуемое свойство и вывести объект в консоль.

// let danItStudent = {
//   name: "Tania",
//   "last name": "Panasiuk",
//   "number of submitted homework": 7,
// };
// console.log(danItStudent);

// let userInfo = prompt("What do you want to change");

// while (!(userInfo in danItStudent) && userInfo) {
//   userInfo = prompt(
//     `${userInfo} у объекта нет. Напишите, пожалуйста, правильное свойство объекта`
//   );
// }
// if (userInfo) {
//   let newValue = prompt("Какое значение вы хотите присвоить этому свойству?");
//   danItStudent[userInfo] = newValue;
// }
// console.log(danItStudent);

// Скопируйте объект student из задачи 1, напишите после его создания такой код: если коэффициент лени больше или равен 3,
// и при этом меньше или равен 5, а коэффициент хитрости больше или равен 4 - добавьте объекту свойство "new status"
// со значением "Студент имяСтудента фамилияСтудента отправлен на пересдачу". Выведите объект в консоль.

// let student = {
//   name: "Tom",
//   "last name": "Ford",
//   laziness: 4,
//   trick: 5,
// };
// console.log(student);
// if (student.laziness >= 3 && student.laziness <= 5 && student.trick >= 4) {
//   student[
//     "new status"
//   ] = `Студент ${student.name} ${student["last name"]} отправлен на пересдачу";`;
// }
// console.log(student);

// Задача 11
// Создать пустой объект student, спросить его имя и фамилию, добавить их как свойства объекта,
// и вывести в консоль сообщение "Студент имяСтудента фамилияСтудента готов к заполнению табеля!".
// После чего в цикле спрашивать у пользователя название предмета и оценку по нему.
// Если пользователь нажмет Cancel при n-вопросе о названии предмета, закончить цикл.
// Если он ввел название очередного предмета и оценку по нему - добавить название как свойство объекта и оценку - как его значение.
// По окончании цикла вывести объект student консоль.

// let student = {};
// console.log(student);

// let userName = prompt("Enter your name");
// let userSurname = prompt("Enter your surname");
// student.name = `${userName}`;
// student.surname = `${userSurname}`;
// console.log(
//   `Студент ${student.name} ${student.surname} готов к заполнению табеля!`
// );
// let subjectName, userMark;
// while (true) {
//   subjectName = prompt("Enter subject name");
//   if (subjectName === true) {
//     break;
//   }
//   if (!subjectName) {
//     break;
//   }
//   userMark = +prompt("Enter your mark");
//   student[subjectName] = userMark;
// }
// console.log(student);

// Задача 12
// Создайте объект student, в котором будут такие свойства:
// имя;
// фамилия;
// коэффициент хитрости, равный 3;
// коэффициент лени, равный 5;
// course, равный 2;
// Выведите объект в консоль и напишите такой код: если коэффициент лени больше или равен 5,
// а коэффициент хитрости меньше 4 - удалите свойство course, и добавьте объекту
// свойство "new status" со значением "Студент имяСтудента фамилияСтудента передан в военкомат".

// let student = {
//   name: "Ben",
//   "last name": "Lans",
//   trick: 3,
//   laziness: 5,
//   course: 2,
// };
// console.log(student);
// if (student.laziness >= 5 && student.trick <= 4) {
//   delete student.course;
//   student[
//     "new status"
//   ] = `Студент ${student.name} ${student["last name"]} передан в военкомат`;
// }
// console.log(student);

// const user = {
//   name: "Влад",
//   "second name": "Дракула",
//   age: 400,
//   marriage: false,
// };
// let userLength = 0;
// for (let number in user) {
//   userLength++;
// }
// user.length = userLength;
// console.log(user);
