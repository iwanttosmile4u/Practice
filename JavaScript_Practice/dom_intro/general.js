// let element = document.getElementById("elem");
// element.style.background = "red";
// console.log(elem);

const elements = document.querySelectorAll(".list-item");
for (let element of elements) {
  console.log(element.innerHTML);
}
