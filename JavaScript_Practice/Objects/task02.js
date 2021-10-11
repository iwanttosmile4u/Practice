/* ЗАДАНИЕ - 2
 * Добавить к предыдущему заданию функционал.
 * В возвращаемом объекте должен быть метод, который увеличивает возраст на 1.
 * Т.е. внутри объекта будет свойство\ключ\поле, значением которого будет являться функция,
 * которая увеличивает свойство\ключ\поле age ЭТОГО объекта на 1
 * */

function showName(userName, userAge) {
  return {
    name: userName,
    age: userAge,
    increaseAge() {
      return ++this.age;
    },
  };
}

let user = showName("Tom", 33);
console.log(user);
console.log(user.increaseAge());
