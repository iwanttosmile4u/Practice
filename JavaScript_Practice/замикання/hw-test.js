const books = [
  {
    author: "Скотт Бэккер",
    name: "Тьма, что приходит прежде",
    price: 70,
  },
  {
    author: "Скотт Бэккер",
    name: "Воин-пророк",
  },
  {
    name: "Тысячекратная мысль",
    price: 70,
  },
  {
    author: "Скотт Бэккер",
    name: "Нечестивый Консульт",
    price: 70,
  },
  {
    author: "Дарья Донцова",
    name: "Детектив на диете",
    price: 40,
  },
  {
    author: "Дарья Донцова",
    name: "Дед Снегур и Морозочка",
  },
];

const container = document.getElementById("root");

function renderItem({ author, name, price }) {
  if (!author) {
    throw new TypeError("Author doesn`t exist!");
  }
  if (!name) {
    throw new TypeError("Name of book doesn`t exist!");
  }
  if (!price) {
    throw new TypeError("Price doesn`t exist!");
  }
  container.insertAdjacentHTML(
    "afterbegin",
    `<ul><li>${author}</li><li>${name}</li><li>${price}</li></ul>`
  );
}

books.forEach((elem) => {
  try {
    renderItem(elem);
  } catch (err) {
    console.error(err.message);
  }
});
