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

/* ЗАДАНИЕ - 4
* Написать функцию createProductCart(). Которая создает объект карточки товара.
*
* Аргументы:
*  - title - название товара
*  - code - артикул товара
*  - price - цена
*  - description - описание
*
* Возвращаемое значение: объект карточки товара со всеми свойствами и методами
*
* Внутри функции нужно создать объект, записать в него све свойства и добавить один метод - startSale(), который изменяет цену товара 
и делает ее меньше на указанное количество процентов.
* метод startSale принимает аргумент - размер скидки, одним числом без знака процентов.
* */



function createProductCart(title, code, price, description) {
    let productCard = {
        name: title,
        code: code,
        price: price,
        description: description,
        getDiscount: function (discount) {
            this.price -= (this.price/100) * sale;
        }
    }
    return productCard;
  }
  const pizza = createProductCart 
  
  
  
  ('Spicy Margarita', 785584, 244, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, voluptates.');
  
  console.log(pizza.price); 
  pizza.startSale(50);
  console.log(pizza.price); 
  