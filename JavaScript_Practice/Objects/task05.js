/* ЗАДАНИЕ - 5
 * Дополнить функционал решения из прошлой задачи.
 * Добавить для свойства price getter и setter.
 * getter должен возвращать своство в виде строки в формате `${ЗНАК ВАЛЮТЫ}${ЦЕНА}`, где знаком валюты должен быть знак гривты.
 * */

function createProductCart(name, code, price, description, currency) {
  return {
    title: name,
    code: code,
    price: price,
    description: description,
    currency: currency,

    startSale(discount) {
      this.price -= (this.price * discount) / 100;
      return this;
    },
    get fullPrice() {
      this.currency = prompt("Enter the currency");

      if (this.currency === "₴") {
        return `${this.currency}${this.price}`;
      } else {
        console.error("Wrong currency");
      }
    },
    set fullPrice(value) {
      [this.currency, this.price] = value.split(" ");
    },
  };
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
console.log(pizza.fullPrice);
