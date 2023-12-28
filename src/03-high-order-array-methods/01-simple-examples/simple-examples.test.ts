import {
  doubledNumbers,
  evenNumbers,
  sum,
  consoleLogAll,
  foundNumber,
  hasEvenNumber,
  allNumsGreaterThanZero,
} from "./simple-examples";

test("High Order Array Methods", () => {
  const numbers = [1, 2, 3, 4, 5, 6];

  expect(doubledNumbers(numbers)).toEqual([2, 4, 6, 8, 10, 12]);
  expect(evenNumbers(numbers)).toEqual([2, 4, 6]);
  expect(sum(numbers)).toBe(21);

  const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  consoleLogAll(numbers);
  expect(consoleLogSpy).toHaveBeenCalledTimes(numbers.length);
  for (let i = 0; i < numbers.length; i++) {
    expect(consoleLogSpy).toHaveBeenNthCalledWith(i + 1, numbers[i]);
  }
  consoleLogSpy.mockRestore();

  expect(foundNumber(numbers)).toBe(3);
  expect(hasEvenNumber(numbers)).toBe(true);
  expect(allNumsGreaterThanZero(numbers)).toBe(true);
});
