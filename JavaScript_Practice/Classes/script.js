/* ЗАДАЧА 4
 * Написать игру "Угадай число".
 *
 * Аргументы:
 *   - селектор элемента, где должен быть размещен инпут
 *   - диапазон загадываемого числа в формате объекта: {from: 0, to: 1000}
 *
 * Вызов метода play() запускает игру.
 *
 * На странице в указанном месте должен появиться input, куда пользоавтель и будет вводить числа.
 *
 * За загадывание числа отвечает метод getRandomNumber()
 *
 * За сравнивание числа отвечает отдельный метод compare(num)
 * В качестве аргумента, он получает число, которой пользователь ввел в input
 * возвращаемое значение:
 *   - если число совпадает - "You win!"
 *   - если число введенное пользователем больше загаданного игрой - "You should try a smaller one!"
 *   - если число введенное пользователем меньше загаданного игррой - "You should try a bigger one!"
 * */

class GuessGame {
  constructor(selector, { from, to }) {
    this.selector = selector;
    this.rangeFrom = from;
    this.rangeTo = to;
  }

  play() {
    this.number = this.getRandomNumber();
    this.elements = {
      input: document.createElement("input"),
      btn: document.createElement("button"),
    };
    const container = document.querySelector(this.selector);
    container.innerHtml = "";
    container.append(this.elements.input);
    container.append(this.elements.btn);
    this.elements.btn.textContent = "Play";
    this.elements.btn.style.margin = "0 0 0 10px";
    this.elements.input.placeholder = "Enter some number";
    this.elements.input.type = "number";
    this.elements.btn.addEventListener("click", () => {
      alert(this.compare(this.elements.input.value));
    });
  }

  getRandomNumber() {
    return Math.ceil(
      Math.random() * (this.rangeTo - this.rangeFrom) + this.rangeFrom
    );
  }

  compare(num) {
    num = +num;
    if (num === this.number) {
      return "You win!";
    }

    if (num > this.number) {
      return "You should try a smaller one!";
    }

    if (num < this.number) {
      return "You should try a bigger one!";
    }
  }
}

const game = new GuessGame("div.the-game", { from: -9, to: 6 });
game.play();
