/* ЗАДАНИЕ - 6
 * Дополнить функционал решения из прошлой задачи.
 * Заблокировать вохможность изменять свойство code, создаваемого объекта.
 * */

function createProductCart(name, code, price, description) {
  let productCard = {
    title: name,
    code: code,
    price: price,
    description: description,
    startSale(discount) {
      this.price -= (this.price * discount) / 100;
      return this;
    },
  };
  Object.defineProperty(productCard, "code", { writable: false });
  return productCard;
}

const pizza = createProductCart(
  "Spicy Margarita",
  785584,
  244,
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, voluptates."
);

console.log(pizza);

console.log(pizza.price); // 244
pizza.startSale(10);
console.log(pizza.price); // 122
pizza.code = 800;
console.log(pizza.code);
