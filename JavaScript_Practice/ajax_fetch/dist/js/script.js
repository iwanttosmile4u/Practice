/* ЗАДАЧА-01
 * Написать json файл, который будет сожержать любое количество обнотипных объектов пользователей.
 * При помощи XMLHttpRequest получить эти данные из файла.
 * */

// const url = "user.json";
// const request = new XMLHttpRequest();
// request.open("GET", url);
// request.onload = function (e) {
//   if (e.target.status === 200) {
//     const result = JSON.parse(e.target.response);
//     console.log(result);
//   }
// };
// request.send();

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => console.error(e));

/* ЗАДАЧА-02
 * Дополнить функционал предыдущего задания.
 * Вывести данные на экран после того как они были получены. Пока запрос обрабатывается - выводить на экан preloader анимацию.
 * */

// const url = "user.json";

// document.body.insertAdjacentHTML(
//   "afterbegin",
//   '<img src= "./Infinity.gif" alt = "preloader" id = "infinity">'
// );

// setTimeout(() => {
//   fetch("user.json")
//     .then((res) => res.json())
//     .then((users) => {
//       document.getElementById("infinity").remove();
//       users.forEach((item) => {
//         document.body.insertAdjacentHTML(
//           "afterbegin",
//           `<div>
//       <p>${item.name}</p>
//       <p>${item.age}</p>
//       <p>${item.gender}</p>
//       </div>`
//         );
//       });
//     });
// }, 2000);

/* ЗАДАЧА-04
 * Добавить для каждого пользователя в json файле, свойство "address". Его значение - это цифра.
 * Цифра означает - индекс в массиве адресов.
 *
 * Задача в том, чтобы по нажатию на кнопку `get address` на экране - пользователь увидел полный адрес, вместо самой кнопки.
 *
 * Этапы выполнения:
 *  - получить данные о всех пользователях при помощи fetch запроса
 *  - отренерить всех пользователей на экране. у каждого пользователя помимо текстовых даннхы должна отображаться кнопка `get address` вместо информации об адресе проживания
 *  - по нажатию на кнопку - отправлять еще один fetch запрос и получив нужный адрес отображать его на странице вместо кнопки
 * */

// fetch("user.json")
//   .then((res) => res.json())
//   .then((users) => {
//     document.getElementById("infinity").remove();
//     users.forEach((item) => {
//       document.body.insertAdjacentHTML(
//         "afterbegin",
//         `<div>
//       <p>${item.name}</p>
//       <p>${item.age}</p>
//       <p>${item.gender}</p>
//       <button>Get address</button>
//       </div>`
//       );
//     });
//   });

/* ЗАДАЧА 1
 * Изучить документацию сервера по адресу:
 * @link - https://ajax.test-danit.com/api-pages/jsonplaceholder.html
 *
 * Отправить GET запрос на сервер для получения всех пользователей.
 *
 * Преобразовать данные ответа в JavaScript объекты карточек пользователей.
 *
 * Разместить на странице карточки пользователей, которые будут содержать следующую информацию:
 *  - имя пользователя
 *  - никнейм
 *  - эл.почта
 *  - телефон
 *  - сайт
 *  - кнопка "See posts"
 * */

class User {
  constructor(name, nickname, email, phone, website) {
    this.name = name;
    this.nickname = nickname;
    this.email = email;
    this.phone = phone;
    this.website = website;
  }
}

const url = "https://ajax.test-danit.com/api/json/users";
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
