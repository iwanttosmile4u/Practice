/* ЗАДАЧА - 2
 * Создать объект пользователя со свойствами имени и возраста.
 * Добавить к этому объекту метод getLogin() написанный при помощи стрелочной функции
 * внутри метода обращаться к свойствам объекта только через this
 * Заставить этот метод работать.
 */

function User(name, age) {
  this.name = name;
  this.age = age;
  this.getLogin = () => {
    return (this.name + this.age).toLowerCase();
  };
}

let person1 = new User("John", 30);

console.log(person1.getLogin.call());
