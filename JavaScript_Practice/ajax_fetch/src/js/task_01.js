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
  .then((data) => {
    data.forEach((user) => {});
    console.log(data);
  });
