export default function removeDuplicates<T>(arr: T[]): T[] {
  const seenMap: Record<string, boolean> = {};
  const result: T[] = [];

  for (let i = 0; i < arr.length; i++) {
    const key = String(arr[i]);
    if (!seenMap[key]) {
      seenMap[key] = true;
      result.push(arr[i]);
    }
  }

  return result;
}

// export default function removeDuplicates<T>(arr: T[]): T[] {
//   const result: T[] = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// export default function removeDuplicates<T>(arr: T[]): T[] {
//   return Array.from(new Set(arr));
// }
