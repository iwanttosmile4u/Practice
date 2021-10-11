/* ЗАДАНИЕ - 1
 * Написать функцию, которая принимает 2 аргумента - имя и возраст пользователя
 * Возвращаемое значение этой функции - объект с двумя ключами name и age, куда будут записаны значения переданных функции аргументов.
 * */

function showName(userName, userAge) {
  return {
    name: userName,
    age: userAge,
  };
}

const user = showName("Tom", 33);
console.log(user);
