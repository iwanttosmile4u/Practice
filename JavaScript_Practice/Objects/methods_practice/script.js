// const user = {
//   name: "Oleh",
//   "last name": "Jonsons",
//   patronymic: "Borisovich",
//   getInitials: function () {
//     return this.name[0] + this["last name"][0] + this.patronymic[0];
//   },
// };
// console.log(user.getInitials()); виведе OJB (перші букви значення властивості об'єкта)

// Создайте объект notebook с полями: name и price, и добавьте встроеный метод getDiscount(),
// в который в качестве аргумента будет передаваться процент скидки, и который будет возвращать цену с учетом этой скидки.
// Спросите у пользователя размер скидки и выведите в консоль цену с учетом этой скидки.

// const notebook = {
//   name: "Tom",
//   price: 50,
//   getDiscount: function (discount) {
//     discount = (100 - +discount) / 100;
//     return this.price * discount;
//   },
// };
// const priceDiscount = prompt("Enter price discount in percent");
// console.log(notebook.getDiscount(priceDiscount));

// и добавьте в него функцию averageRating, которая выводит средний бал оценок по предметам.
// Выведите средний бал в консоль.

// const student = {
//   name: "Катерина",
//   "last name": "Петрова",
//   status: null,
//   tabel: {
//     history: 12,
//     biology: 12,
//     mathematics: 8,
//     physics: 9,
//     geography: 7,
//   },
//   averageRating: function () {
//     let overallRating = 0;
//     subjectCount = 0;
//     for (let key in this.tabel) {
//       overallRating++;
//       subjectCount += this.tabel[key];
//     }
//     return subjectCount / overallRating;
//   },
// };
// console.log(student.averageRating());

/* ЗАДАНИЕ - 1
 * Написать функцию, которая принимает 2 аргумента - имя и возраст пользователя
 * Возвращаемое значение этой функции - объект с двумя ключами name и age, куда будут записаны значения переданных функции аргументов.
 * */

// const createUser = function (userName, userAge) {
//   return {
//     name: userName,
//     age: userAge,
//   };
// };
// const name = prompt("Enter your name");
// const age = prompt("Enter your age");

// createUser(name, age);
// console.log(createUser("Tania", 27));
