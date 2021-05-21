const { test } = require("@jest/globals");
const sum = require("./sum");

test("testing some fn", () => {
  expect(sum(1, 2)).toBe(3);
});

test("array", () => {
  expect([1, 2, 3]).toEqual([1, 2, 3]);
});
