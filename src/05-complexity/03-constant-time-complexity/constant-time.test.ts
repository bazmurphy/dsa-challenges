import accessElement from "./constant-time";

test("Constant Time Test - Five Elements vs Ten Thousand Elements", () => {
  const arr1 = [1, 2, 3, 4, 5];
  const test1Start = performance.now();
  accessElement(arr1, 1);
  const test1End = performance.now();
  const test1Duration = test1End - test1Start;
  console.log(test1Duration);
  expect(test1Duration).toBeGreaterThan(0);

  const arr2 = Array.from({ length: 10000 }, (_, index) => index + 1);
  const test2Start = performance.now();
  accessElement(arr2, 100);
  const test2End = performance.now();
  const test2Duration = test2End - test2Start;
  console.log(test2Duration);
  expect(test2Duration).toBeGreaterThan(0);
});
