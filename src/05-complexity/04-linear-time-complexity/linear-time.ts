// Linear Time O(n)
// Linear time means that the time required to complete a function is directly proportional to the size of the input data set.

function sumArray(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = Array.from({ length: 1000000 }, (_, index) => index + 1);

console.time("Sum arr1");
console.log(sumArray(arr1));
console.timeEnd("Sum arr1");

console.time("Sum arr2");
console.log(sumArray(arr2));
console.timeEnd("Sum arr2");

// 15
// Sum arr1: 0.544ms
// 5000050000
// Sum arr2: 1.702ms
