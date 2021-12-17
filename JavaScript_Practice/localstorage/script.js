localStorage.setItem('test', 1);

// for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   alert(`${key}: ${localStorage.getItem(key)}`);
// }

// for (let key in localStorage) {
//   alert(key);
// }

localStorage.user = JSON.stringify({ name: 'John' });
let user = JSON.parse(localStorage.user);
alert(user.name);
