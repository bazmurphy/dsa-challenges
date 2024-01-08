// Quadratic Time O(n^2)
// Quadratic time means that the time required to complete a function is proportional to the square of the input data set.

export default function sumArray(arr: number[]) {
  let sum1: number = 0;
  let sum2: number = 2;

  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];

    for (let j = 0; j < arr.length; j++) {
      sum2 += arr[j];
    }
  }

  return sum1 + sum2;
}
