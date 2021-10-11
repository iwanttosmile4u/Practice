/* ЗАДАНИЕ - 3
 * Добавить к предыдущему заданию функционал.
 * В возвращаемом объекте должен появиться еще один метод - addField(). Он будет добавлять свойства в объект.
 * Т.е. внутри объекта будет еще одно свойство\ключ\поле, значением которого будет являться функция.
 * Эта функция принимает два аргумента:
 *   1 - имя свойства, которое будет создаваться
 *   2 - значение. которое туда должно быть записано
 * */

function showName(userName, userAge) {
  return {
    name: userName,
    age: userAge,
    increaseAge() {
      return ++this.age;
    },
    addField(propertyName, propertyValue) {
      this[propertyName] = propertyValue;
      return this;
    },
  };
}

let user = showName("Tom", 33);
console.log(user);
console.log(user.increaseAge());
console.log(user.addField("marrige", "false"));
