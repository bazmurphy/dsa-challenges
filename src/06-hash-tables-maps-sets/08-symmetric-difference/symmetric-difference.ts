export default function symmetricDifference(
  arr1: number[],
  arr2: number[],
): number[] {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const result = [];

  for (const value of set1) {
    if (!set2.has(value)) {
      result.push(value);
    }
  }

  for (const value of set2) {
    if (!set1.has(value)) {
      result.push(value);
    }
  }

  return result;
}

// export default function symmetricDifference(
//   arr1: number[],
//   arr2: number[],
// ): number[] {
//   const set1 = new Set(arr1);
//   const set2 = new Set(arr2);
//   const result = [];

//   for (const num of arr1) {
//     if (!set2.has(num)) {
//       result.push(num);
//     }
//   }

//   for (const num of arr2) {
//     if (!set1.has(num)) {
//       result.push(num);
//     }
//   }

//   return result;
// }
