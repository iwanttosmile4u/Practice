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

/* ЗАДАЧА - 1
 * Создать объект пользователя с его данными - имя, фамилия, дата рождения, о себе.
 * Создать по переменной для каждого из свойств объекта пользователя.
 * Выполнить задание И самым "в лоб" способом, И используя деструктуризацию
 *
 * ПРОДВИНУТАЯ СЛОЖНОСТЬ: при помощи деструктуризации сохранить значение каждого свойства объекта в переменную, имя которой отличается от названия свойства.
 * Если искомого свойства нет в объекте - по умолчанию в переменную присваивать пустую строку.
 * */

let firstName = "Tom";
let lastName = "Jons";
let birthday = "20 of August";
let userInfo = "books, movies, music";

let person = {
  firstName: "Tom",
  lastName: "Jons",
  birthday: {
    day: 20,
    month: 8,
  },
  userInfo: "books, movies, music",
};

({
  firstName,
  lastName,
  birthday: { day, month, year },
  userInfo,
} = person);

console.log(
  `I am ${firstName} ${lastName}. My date of birth is ${day}.${month}. I like ${userInfo}.`
);
