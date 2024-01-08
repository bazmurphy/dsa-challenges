import findPower from "./logarithmic-time";

test("Logarithmic Time Test", () => {
  const test1Start = performance.now();
  findPower(2, 100);
  const test1End = performance.now();
  const test1Duration = test1End - test1Start;
  console.log(test1Duration);
  expect(test1Duration).toBeGreaterThan(0);

  const test2Start = performance.now();
  findPower(2, 1000000);
  const test2End = performance.now();
  const test2Duration = test2End - test2Start;
  console.log(test2Duration);
  expect(test2Duration).toBeGreaterThan(0);
});
