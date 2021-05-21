const add = require("./add");
const total = (Tax, price) => {
  return "$" + add(Tax, price);
};

module.exports = total;
