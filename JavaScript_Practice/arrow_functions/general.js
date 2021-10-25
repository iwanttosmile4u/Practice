// const user = {
//   getAge() {
//     const sum = (a, b) => console.log(this);
//     sum();
//   },
// };
// user.getAge();

// const user = {
//   name: "Tom",
//   getName: (obj) => {
//     console.log(obj.name);
//   },
// };
// user.getName(user);

function tripleSum(a = 0) {
  return function (b) {
    return (c) => a + b + c;
  };
}
console.log(tripleSum()(3)(4));
