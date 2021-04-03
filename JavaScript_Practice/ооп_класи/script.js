// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// let person = new Person("Dan", "Abramov");
// person.getFullName();

// class User extends Person {
//   constructor(firstName, lastName, email, password) {
//     super(firstName, lastName);
//     this.email = email;
//     this.password = password;
//   }
//   getEmail() {
//     return this.email;
//   }
//   getPassword() {
//     return this.password;
//   }
// }
// function App() {
//   let user = new User("Dan", "Abramov", "dan@abramov.com", "iLuvES6");
//   user.getFullName();
//   user.getEmail();
//   user.getPassword();
//   user.firstName;
//   user.lastName;
//   user.email;
//   user.password;
// }

// Прототипне наслідування:

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// Person.prototype.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };
// Person.prototype.setGender = function (gender) {
//   this.gender = gender;
// };
// Person.prototype.getGender = function () {
//   return this.gender;
// };
// let person = new Person("Dan", "Anderson");
// person.getFullName();
// person.setGender("male");
// person.getGender();
// console.log(person);

// function User(firstName, lastName, email, password) {
//   Person.call(this, firstName, lastName);
//   this.email = email;
//   this.password = password;
// }
// User.prototype = Object.create(Person.prototype);
// User.prototype.setEmail = function (email) {
//   return (this.email = email);
// };
// User.prototype.getEmail = function () {
//   return this.email;
// };
// let user = new User("Dan", "Anderson", "dan@abramov.com", "iLuvES6");
// user.setEmail("dan@abramov.com");
// user.getGender();

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     alert(this.name);
//   }
// }
// let user = new User("John");
// user.sayHi();

// const animal = {
//   name: "Animal",
//   age: 5,
//   hasTail: true,
// };

// class Animal {
//   static type = "ANIMAL";
//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.hasTail = options.hasTail;
//   }
//   voice() {
//     console.log("I am animal");
//   }
// }
// // const animal = new Animal({ name: "Animal", age: 5, hasTail: true });

// class Cat extends Animal {
//   static type = "CAT";
//   constructor(options) {
//     super(options);
//     this.color = options.color;
//   }
//   voice() {
//     super.voice();
//     console.log("I am cat!");
//   }
//   get ageInfo() {
//     return this.age * 7;
//   }
//   set ageInfo(newAge) {
//     this.age = newAge;
//   }
// }
// let cat = new Cat({ name: "Cat", age: 5, hasTail: true, color: "black" });

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }
  hide() {
    this.$el.style.display = "none";
  }
  show() {
    this.$el.style.display = "block";
  }
}
class Box extends Component {
  constructor(options) {
    super(options.selector);
    this.$el.style.width = this.$el.style.height = options.size + "px";
    this.$el.style.background = options.color;
  }
}

const box1 = new Box({ selector: "#box1", size: 100, color: "red" });
const box2 = new Box({ selector: "#box2", size: 120, color: "blue" });
