// export default function arrayIntersection(
//   arr1: number[],
//   arr2: number[],
// ): number[] {
//   const sharedElements = [];

//   const arr1Map: Record<string, number> = {};

//   for (let i = 0; i < arr1.length; i++) {
//     arr1Map[arr1[i]] = arr1[i];
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1Map[arr2[i]]) {
//       sharedElements.push(arr2[i]);
//     }
//   }

//   return sharedElements;
// }

export default function arrayIntersection(
  arr1: number[],
  arr2: number[],
): number[] {
  const interSection: number[] = [];

  const set1 = new Set(arr1);

  for (let i = 0; i < arr2.length; i++) {
    if (set1.has(arr2[i])) {
      interSection.push(arr2[i]);
    }
  }

  return interSection;
}

// export default function arrayIntersection(
//   arr1: number[],
//   arr2: number[],
// ): number[] {
//   const set1 = new Set(arr1);
//   return arr2.filter((element) => set1.has(element));
// }

// export default function arrayIntersection(
//   arr1: number[],
//   arr2: number[],
// ): number[] {
//   const sharedElements: number[] = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !sharedElements.includes(arr1[i])) {
//       sharedElements.push(arr1[i]);
//     }
//   }

//   return sharedElements;
// }
