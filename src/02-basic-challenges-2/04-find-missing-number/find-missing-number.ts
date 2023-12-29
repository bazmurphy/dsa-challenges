// export default function findMissingNumber(arr: number[]): number | undefined {
//   if (!arr) {
//     return undefined;
//   }

//   if (arr.length === 0) {
//     return 1;
//   }

//   const sortedArray = arr.sort((a, b) => a - b);

//   for (let i = 0; i < sortedArray.length; i++) {
//     if (sortedArray[i] + 1 !== sortedArray[i + 1]) {
//       return sortedArray[i] + 1;
//     }
//   }
// }

export default function findMissingNumber(arr: number[]) {
  if (!arr) {
    return undefined;
  }

  if (arr.length === 0) {
    return 1;
  }

  const n = arr.length + 1;

  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
}

// export default function findMissingNumber(arr: number[]) {
//   if (!arr) {
//     return undefined;
//   }

//   if (arr.length === 0) {
//     return 1;
//   }

//   const n = arr.length + 1;

//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = arr.reduce((sum, num) => sum + num, 0);

//   return expectedSum - actualSum;
// }
