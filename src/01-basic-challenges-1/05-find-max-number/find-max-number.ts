export default function findMaxNumber(arr: number[]): number {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// export default function findMaxNumber(arr: number[]): number {
//   return Math.max(...arr);
// }
