function repeatString(str, countOfRepeating) {
  let res = "";
  for (let i = 0; i < countOfRepeating; i++) {
    res += str;
  }
  return res;
}

console.log(
  repeatString(prompt("Enter some text"), prompt("Enter count of times"))
);
