export default function arrayIntersection(
  arr1: number[],
  arr2: number[],
): number[] {
  const sharedElements: number[] = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !sharedElements.includes(arr1[i])) {
      sharedElements.push(arr1[i]);
    }
  }

  return sharedElements;
}
