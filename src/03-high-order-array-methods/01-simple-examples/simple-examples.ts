// map: Transforms array elements with a provided function, creating a new array.
export function doubledNumbers(numbers: number[]): number[] {
  return numbers.map((num) => num * 2);
}

// filter: Creates a new array with elements that satisfy a specified condition.
export function evenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

// reduce: Accumulates array elements into a single value using a provided function.
export function sum(numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// forEach: Iterates through array elements and applies a function without creating a new array.
export function consoleLogAll(numbers: number[]): void {
  numbers.forEach((num) => console.log(num));
}

// find: Returns the first array element that satisfies a specified condition.
export function foundNumber(numbers: number[]): number | undefined {
  return numbers.find((num) => num > 2);
}

// some: Checks if at least one array element satisfies a condition.
export function hasEvenNumber(numbers: number[]): boolean {
  return numbers.some((num) => num % 2 === 0);
}

// every: Checks if all array elements satisfy a condition.
export function allNumsGreaterThanZero(numbers: number[]): boolean {
  return numbers.every((num) => num > 0);
}
