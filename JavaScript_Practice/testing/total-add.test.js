const add = require("./add");
const total = require("./total");

describe("Testing total & add fn", () => {
  test("add", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("total", () => {
    expect(total(5, 20)).toBe("$25");
  });
});
