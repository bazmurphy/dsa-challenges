import sumUpTo from "./sum-up-to";

test("Summing up positive integers", () => {
  expect(sumUpTo(5)).toBe(15);
  expect(sumUpTo(10)).toBe(55);
  expect(sumUpTo(1)).toBe(1);
});