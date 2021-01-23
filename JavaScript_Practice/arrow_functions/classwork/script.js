const form = document.getElementById("createEvent");
const title = document.getElementById("eventTitle");
const date = document.getElementById("eventDate");
const desc = document.getElementById("eventDesc");
const btn = document.querySelector(".event-form button");

const toUpperCase = (string) => {
  let res = "";
  let order = 0;

  for (let i = 0; i < string.length; i++) {
    order++;

    if (order % 3 === 0) {
      res += string[i].toUpperCase();
    } else {
      res += string[i];
    }
  }

  return res;
};

function daysBefore = numberOfDays => {
    let today = new Date();
}

function makeEventObject(title, date, desc) {
  console.log(title.value);
  console.log(date.value);
  console.log(desc.value);

  let titleString = toUpperCase(title.value);

  /* ЗАДАНИЕ
   * реализовать код функции makeEventObject
   * эта функция принимает 3 аргумента - объекты инпутов формы.
   * чтобы получить значение какого либо инпута достаточно обратиться к его свойству value
   *
   * Возвращаемое значение функции:
   * объект, в котором должны быть 3 свойства
   *   - title - это значение инпута title, каждый третий символ которого приведен в верхний регистр
   *   - daysBefore - количество дней, сколько осталось до даты события
   *   - description - значение инпута desc, в котором удалено каждое слово "типа".
   *
   * В решении нужно обязательно использовать стрелочные функции
   * */
  return {
    title: titleString,
    daysBefore: 10,
    description: "lorem трель dolor gogi met",
  };
}

btn.disabled = !title.value || !date.value || !desc.value;
form.onchange = (e) => {
  btn.disabled = !title.value || !date.value || !desc.value;
};

form.onsubmit = (e) => {
  e.preventDefault();
  const list = document.querySelector(".events-list");

  const event = makeEventObject(title, date, desc);

  console.log(event);

  list.insertAdjacentHTML(
    "beforeend",
    `
  <div class="events-list-item">
    <p class="event-list-title">${event.title}</p>
    <p class="event-list-days">${event.daysBefore}</p>
    <p class="event-list-desc">${event.description}</p>
  </div>
  `
  );
};
