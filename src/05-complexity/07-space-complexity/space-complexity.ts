// Space Complexity: O(1)
// Time Complexity: O(1)

// this has a space complexity of constant
// because the function doesn't create any additional data structures or variables that depend on the input size
// the amount of memory doesn't change depending on the inputs
export function add(num1: number, num2: number) {
  return num1 + num2;
}

// Space Complexity: O(n)
// Time Complexity: O(n)

// as the input num increases, the size of the array also increases proportionally
// therefore the space complexity of the function grows linearly with the input
export function createArray(num: number) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(i);
  }

  return arr;
}

// Space Complexity: O(n^2)
// Time Complexity: O(n^2)

// the function creates a two dimensional array and fills it with the values using the nested for loops
// as the input num increases the size of the matrix increases proportionally
// therefore the space complexity of the function grows quadratically with the input
export function createMatrix(num: number): number[][] {
  const matrix: number[][] = [];

  for (let i = 0; i < num; i++) {
    matrix[i] = [];

    for (let j = 0; j < num; j++) {
      matrix[i][j] = i + j;
    }
  }

  return matrix;
}

// Space Complexity: O(log n)
// Time Complexity: O(log n)

// the function uses recursion to calculate the power of a number
// as the input exponent increases the number of recursive calls increases logarithmically
export function findPower(base: number, exponent: number): number {
  if (exponent === 0) {
    return 1;
  }

  if (exponent % 2 === 0) {
    const halfPower = findPower(base, exponent / 2);
    return halfPower * halfPower;
  } else {
    const halfPower = findPower(base, (exponent - 1) / 2);
    return base * halfPower * halfPower;
  }
}

// Space Complexity: O(1)
// Time Complexity: O(n)

// here the space complexity and time complexity are different
// the time complexity is O(n) because the function uses a loop to iterate through each element of the array
// and perform a constant time operation adding the element to the sum
// the number of iteration is directly proportional to the size of the input (array)
// the space complexity is O(1) which is constant because the function only uses a single variable called sum to store the result
// and the space used by the variable doesn't depend on the size of the input (array)
export function findSum(arr: number[]): number {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
