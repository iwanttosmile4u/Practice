// Реализовать функцию для создания объекта "пользователь". Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

// Технические требования:

// Написать функцию createNewUser(), которая будет создавать и возвращать объект newUser.
// При вызове функция должна спросить у вызывающего имя и фамилию.
// Используя данные, введенные пользователем, создать объект newUser со свойствами firstName и lastName.
// Добавить в объект newUser метод getLogin(), который будет возвращать первую букву имени пользователя, соединенную с фамилией пользователя, все в нижнем регистре (например, Ivan Kravchenko → ikravchenko).
// Создать пользователя с помощью функции createNewUser(). Вызвать у пользователя функцию getLogin(). Вывести в консоль результат выполнения функции.

function createNewUser() {
  const firstName = prompt("Enter your name");
  const lastName = prompt("Enter your surname");
  const newUser = {
    name: firstName,
    surname: lastName,
    getLogin() {
      return `${this.name.charAt(0)}${this.surname}`.toLowerCase();
    },
  };
  return newUser;
}

const result = createNewUser();
console.log(result.getLogin());
