// Сортировать в порядке по убыванию
// важность: 4
// let arr = [5, 2, 1, -10, 8];

// // ... ваш код для сортировки по убыванию

// alert( arr ); // 8, 5, 2, 1, -10

const arr = [5, 2, 1, -10, -7, 8];

const compare = (a, b) => {
  if (a < b) return 1;
  if (a == b) return 0;
  if (a > b) return -1;
};

arr.sort(compare);
console.log(arr);
